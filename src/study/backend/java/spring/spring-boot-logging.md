---
star: true
category: Spring Boot
tag: 
  - log
  - logback
---

# Spring Boot Logging
## 关于 Spring 日志
在 Spring Boot 的官方文档的核心功能部分介绍了 Spring 对日志功能的支持，Spring 并没有自己的日志框架实现，而是使用 SLF4J（Simple Logging Facade for Java）作为日志门面，在底层使用 Commons Logging 作为抽象层去识别和对接一些常见的日志框架，如 Logback、Log4j2 等。Spring Boot 默认集成了 Logback 作为日志框架并支持我们在配置文件通过简单的配置就可以开箱即用，如果想了解更多细节可以点击下面卡片跳转官网查看。

```card
title: Spring Security 官网文档
desc: 点击跳转官网查看详细内容
logo: /assets/common-icon/spring-initializr.svg
link: https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#features.logging
color: rgba(173, 216, 590, 0.15)
```

## 简单方案
### 极速版
Spring 默认配置了控制台输出，所以我们可以在配置文件添加以下配置选择文件输出。

```yaml
logging:
  level:
    root: INFO
    com.example: DEBUG

  file:
    name: /var/log/myapp.log
    totalSizeCap: 10MB
    historySize: 7
    maxFileSize: 1MB
```

![默认日志格式](/assets/images/study/backend/java/spring/spring-boot-logging/spring-boot-log-format.png "Spring Boot 默认日志格式")

- 日期和时间：毫秒精度且易于排序。
- 日志级别：TRACE, DEBUG, INFO, WARN, ERROR, FATAL，要知道 Logback 没有 FATAL 级别，它被映射到 ERROR 里。
- 线程名称：用方括号括起来（可能会被截断以用于控制台输出）。
- 记录器名称：这通常是源类名称（通常是缩写）。
- 日志消息：对应你代码中答应的日志信息。


### 常规版
在我工作中正常服务器的日志使用的话，通常是搭配 pom.xml 来构建多环境打包的方案，使用 logback.xml 搭配一些输出类型进行输出日志文件，常用的输出类型有以下几种：

| 输出类型 | 描述 |
| :---: | --- |
| ConsoleAppender |	将日志输出到控制台 |
| FileAppender |	将日志输出到单个文件 |
| RollingFileAppender |	支持滚动的文件输出，根据条件生成新的日志文件 |
| SizeAndTimeBasedRollingPolicy |	基于时间和文件大小的滚动策略，根据时间和大小规则生成新的日志文件 |
| TimeBasedRollingPolicy |	基于时间的滚动策略，根据时间周期生成新的日志文件 |
| DailyRollingFileAppender |	按照每天滚动的策略，生成带有日期的日志文件 |
| 自定义Appender |	用户根据需求编写的自定义输出类型 |

下面是一个通用的 logback.xml ，其配置是按照日期和文件大小进行输出的。

::: normal-demo logback.xml
```xml
<configuration>

    <!-- 定义日志输出的根目录 -->
    <property name="LOG_HOME" value="/Users/songbaicheng/logs/cloud-mall/mall-web"/>

    <!-- 定义日志文件的名称 -->
    <property name="LOG_NAME" value="mall-web"/>

    <!-- 控制台输出 -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- 按文件大小滚动的文件输出 -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>${LOG_HOME}/%d{yyyy-MM-dd}/${LOG_NAME}.%i.log</fileNamePattern>
            <maxFileSize>10MB</maxFileSize>
            <totalSizeCap>100MB</totalSizeCap>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- 日志输出级别 -->
    <root level="info">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>

</configuration>

```
:::

## 操作日志场景
在真实的业务场景中，日志可以分为**业务日志**和**操作日志**两种.

**系统日志**是指的是程序执行过程中的关键步骤，根据实际场景输出的 **debug、info、warn、error** 等不同级别的程序执行记录信息，这些一般是给程序员或运维看的，一般在出现异常问题的时候，可以通过系统日志中记录的关键参数信息和异常提示，快速排除故障。

**操作日志**是用户实际业务操作行为的记录，这些信息一般存储在数据库里，如什么时间哪个用户点了某个菜单、修改了哪个配置等这类业务操作行为，这些日志信息是给普通用户或系统管理员看到。

首先先列举一个反面案例：
```Java
@RestController
@Slf4j
@BusLog(name = "人员管理")
@RequestMapping("/person")
public class PersonController {

    @Autowired
    private IPersonService personService;
    @Autowired
    private IBusLogService busLogService;


    @PostMapping
    public Person add(@RequestBody Person person) {
       try{
           //添加信息信息
        Person result = this.personService.registe(person);
        //保存业务日志
        this.saveLog(person);
        log.info("//增加person执行完成");        
       }catch(Exception e){
           //保存异常操作日志
           this.saveExceptionLog(e);       
       }
        return result;
    }
}
```

这种通过硬编码实现的业务操作日志管理功能，最大的问题就是业务操作日志收集与业务逻辑耦合严重，和代码重复，新开发的接口在完成业务逻辑后要织入一段业务操作日志保存的逻辑.

为了解决这个问题，我们可以通过 AOP 的方式进行统一处理操作日志，将业务操作日志的收集与业务逻辑解耦，这样就可以在业务逻辑中专注于业务逻辑的开发，而不用再关注业务操作日志的收集。

1. 定义日志注解
```Java
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface ILog {

} 
```

2. 定义日志切面
::: normal-demo 定义切面
```Java
@Aspect
public class ILogPrintAspect {

    @Pointcut("@within(com.sbc.log.annotation.ILog) || @annotation(com.sbc.log.annotation.ILog)")
    public void pointcut() {
    }

    @Around("pointcut()")
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        long startTime = SystemClock.now();
        MethodSignature methodSignature = (MethodSignature) pjp.getSignature();
        Logger log = LoggerFactory.getLogger(methodSignature.getDeclaringType());
        String beginTime = DateUtil.now();
        Object result = null;
        try {
            result = pjp.proceed();
        } finally {
            Method targetMethod = pjp.getTarget().getClass().getDeclaredMethod(methodSignature.getName(), methodSignature.getMethod().getParameterTypes());
            ILog logAnnotation = Optional.ofNullable(targetMethod.getAnnotation(ILog.class)).orElse(pjp.getTarget().getClass().getAnnotation(ILog.class));
            if (logAnnotation != null) {
                ILogPrintDTO logPrint = new ILogPrintDTO();
                logPrint.setBeginTime(beginTime);
                if (logAnnotation.input()) {
                    logPrint.setInputParams(buildInput(pjp));
                }
                if (logAnnotation.output()) {
                    logPrint.setOutputParams(result);
                }
                String methodType = "", requestURI = "";
                try {
                    ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
                    assert servletRequestAttributes != null;
                    methodType = servletRequestAttributes.getRequest().getMethod();
                    requestURI = servletRequestAttributes.getRequest().getRequestURI();
                } catch (Exception ignored) {
                }
                log.info("[{}] {}, executeTime: {}ms, info: {}", methodType, requestURI, SystemClock.now() - startTime, JSON.toJSONString(logPrint));
            }
            
            // 操作数据插入数据库
            // ......
        }
        return result;
    }

    /**
     * 构建输入参数
     *
     * @param pjp 切入点
     * @return 输入参数
     */
    private Object[] buildInput(ProceedingJoinPoint pjp) {
        Object[] args = pjp.getArgs();
        Object[] printArgs = new Object[args.length];
        for (int i = 0; i < args.length; i++) {
            if ((args[i] instanceof HttpServletRequest) || args[i] instanceof HttpServletResponse) {
                continue;
            }
            if (args[i] instanceof byte[]) {
                printArgs[i] = "byte array";
            } else if (args[i] instanceof MultipartFile) {
                printArgs[i] = "file";
            } else {
                printArgs[i] = args[i];
            }
        }
        return printArgs;
    }
}
```
:::

使用该注解在目标方法上，就可以实现操作日志的自动收集，方法内部只需要关心业务逻辑的开发即可。
