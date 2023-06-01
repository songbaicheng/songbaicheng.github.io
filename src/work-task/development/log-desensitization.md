# 切面编程
## 浅聊AOP
当我第一次接触Spring框架的时候，就告诉我们 IOC（控制反转） 和 AOP（面向切面编程） 这两个最核心的知识点，IOC 作为我们工作中最经常使用的知识点大家肯定是烂熟于心，而一聊到 AOP ，脑海中想到的只有零零散散的面试题，和一些日志、缓存、事务、安全、权限等功能场景，这些场景确实主要在项目搭建阶段就已经搭建完毕了，这也导致我们很少在工作中接触到它。其实学习使用 AOP 是相对简单的，我们需要先知道以下几个核心概念：

- 切面：一个关注点的模块化，这个关注点可能会横切多个对象。
- 连接点：程序执行过程中明确的点，如方法调用或异常处理器。
- 切点：指定一个或多个连接点，切面在这些点上执行它的操作。
- 通知：切面在特定连接点上执行的操作，有 before、after、around、afterThrowing 和 afterReturning 等类型。
- 织入：将切面应用到目标对象来创建新的代理对象的过程。

通过这些概念我们也可以看出来，AOP 的基本思想是将这些横切关注点与系统的核心业务逻辑分离开来，通过定义一个切面（Aspect）来包含这些关注点，然后在系统运行时，动态地将切面织入到核心业务逻辑中。

AOP 是一种编程范式，是一种思想，用于解决横切关注点的模块化问题。我们常用的 AspectJ 则是基于 Java 的 AOP 框架，提供了实现 AOP 概念的语法和工具。

## 工作中使用到 AOP 的例子
### 返回对象脱敏
最近公司开始要求对客户信息的保密性进行加强，需要我们将日志和前台界面的客户信息进行加密处理，由于我们项目的日志五花八门，而且使用的架构也不尽相同，所以日志脱敏的解决办法就是开发一个脱敏工具类，同时将脱敏需要的依赖打包成 jar 添加到每个项目中去，检索项目中所有打印日志的语句，统一加上工具类中的脱敏方法，听起来这就是个感人的工作。其次是前台界面客户信息脱敏，因为我们大部分项目都是纯后台，所以负责这个任务的工作就落到了我另一个同事头上，当他在和我讨论这个实现的时候和我说了一下他的思路：我们后台需要做的就是把传递给前台的 vo 中的敏感信息过滤，如果每个 vo 对象都要过滤那简直是天方夜谭，于是他想将所有 controller 中的方法作为切点增加个切面，拿到每个方法返回值判断 vo 并进行过滤。下面我拿 demo 来演示一下：

1. 首先我们先模拟一个 controller 返回前台一个 vo：

```java
@GetMapping("/test/vo")
public UserVo testReturnVo() {
    return UserVo.builder()
            .id(IdUtil.getSnowflakeNextId())
            .email("recipient@example.com")
            .firstName("baicheng")
            .lastName("song")
            .phoneNumber("12345678912")
            .username("songbaicheng")
            .build();
}

@Data
@Builder
public class UserVo {
    private Long id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
}
```

2. 接下来新增切面，把要处理返回值的方法作为切点托管。这里有两种方式，分别是在 @Around 和 @AfterReturning 中进行操作，如果我们只是操作返回值，则推荐使用 @AfterReturning 中获取入参中的返回值项进行修改，如果有其他更复杂的操作，则可以在 @Around 的 ProceedingJoinPoint 获取更多的钩子进行操作。而且值得注意的是如果这里同时使用两个方法的话，是先执行 @AfterReturning 再执行 @Around。

```java
@Slf4j
@Aspect
@Component
public class TestReturnVoAspect {

    @Pointcut("execution(* com.sbc.springbootmoudle.controller.HelloController.testReturnVo(..))")
    public void servicePointcut() {
    }

    /**
        方法一
     */
    @Around("servicePointcut()")
    public Object aroundAdvice(ProceedingJoinPoint pjp) throws Throwable {

        // 获取方法返回值
        Object result = pjp.proceed();

        if (result instanceof UserVo) {
            
            // 模拟脱敏操作
            return  UserVo.builder()
                    .id(IdUtil.getSnowflakeNextId())
                    .email("**********@example.com")
                    .firstName("ba****ng")
                    .lastName("s**g")
                    .phoneNumber("123****912")
                    .username("son*****heng")
                    .build();
        }

        return result;
    }

    /**
        方法二（推荐）
     */
    @AfterReturning(value = "servicePointcut()", returning = "result")
    public void doAfterReturning(JoinPoint joinPoint, UserVo result) {

        if (result instanceof UserVo) {
            // 模拟脱敏过程
            result.setUsername("so****ng");
            result.setEmail("**********@example.com");
            result.setFirstName("ba****ng");
            result.setLastName("s**g");
            result.setPhoneNumber("123****912");
        }
    }
}
```
3. 请求方法就可以看到返回的 Vo 已经脱敏：

![脱敏后的 Vo](/assets/images/work-task/development/log-desensitization/return-vo.png)
