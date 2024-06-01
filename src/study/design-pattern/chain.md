---
category: 设计模式
tag: 
  - chain pattern
  - Java
---

# 责任链模式
## 什么是责任链模式
责任链模式（Chain of Responsibility Pattern）它允许你构建一个对象链，每个对象都持有对下一个对象的引用，从而形成一条链。每个对象在收到请求后，可以选择处理请求或将请求传递给链中的下一个对象。
这种模式的核心思想是解耦发送者和接收者，让多个对象都有机会处理请求，而不需要显式指定接收者。请求会沿着链传递，直到有一个对象处理它为止。

### 角色
- Handler（处理者）： 定义一个处理请求的接口，通常包含一个处理请求的方法，并持有对下一个处理者的引用。处理者可以决定是否处理请求，或者将请求传递给链中的下一个处理者。
- ConcreteHandler（具体处理者）： 实现处理者接口，在收到请求时判断自己是否能够处理，如果可以处理则处理请求，否则将请求传递给链中的下一个处理者。
- Client（客户端）： 创建责任链，并向链的第一个处理者发送请求。

### 优点
- 解耦发送者和接收者： 发送者不需要知道接收者的具体信息，只需要将请求发送到链的第一个处理者即可。
- 灵活性和可扩展性： 可以动态地添加、移除或重新排序处理者，以满足不同的需求。
- 单一职责原则： 每个处理者只负责处理特定类型的请求，符合单一职责原则。

### 缺点
- 如果没有处理者能够处理请求，请求可能会到达链的末端而未被处理。
- 性能问题： 如果责任链过长或者处理者之间的调用关系复杂，可能会影响性能。

### 场景
- 事件处理系统
责任链模式在 GUI 框架和其他事件处理系统中广泛使用。例如，在一个图形用户界面中，一个按钮点击事件可以被多个处理器处理（如按钮本身、父容器、窗口等），直到有一个处理器处理了该事件。
- 日志记录系统
日志记录系统可以使用责任链模式，不同的日志级别（如 DEBUG、INFO、WARN、ERROR）可以有不同的处理器。日志请求沿着责任链传递，不同级别的日志可以由不同的处理器处理，或者由同一个处理器处理但以不同的方式记录。
- 请求处理管道
在 web 应用程序中，常常有一系列的过滤器（如安全过滤器、日志过滤器、压缩过滤器等）对请求进行处理。每个过滤器都是一个处理器，请求沿着过滤器链传递，每个过滤器可以选择处理请求或将其传递到链中的下一个过滤器。
- 审批工作流系统
在审批工作流系统中，不同级别的审批者可以形成一个责任链。请求从一个审批者传递到下一个审批者，直到请求被批准或拒绝。例如，一个请假申请可以从部门经理传递到人力资源经理，再到总经理，每个级别的审批者都有机会处理该请求。
- 权限管理系统
在权限管理系统中，可以使用责任链模式来检查用户权限。权限检查请求沿着责任链传递，直到有一个处理器确认用户具有足够的权限或到达链的末尾。如果没有处理器处理该请求，则表示用户没有足够的权限。
- 数据处理管道
数据处理管道可以由一系列的数据处理步骤组成，每个步骤都是一个处理器。例如，在数据清洗过程中，可以有多个步骤（如去重、格式化、数据校验等）依次处理数据，每个步骤可以选择处理数据或将其传递到下一个处理器。
- 命令处理系统
在命令处理系统中，可以使用责任链模式来处理命令。不同的处理器可以处理不同类型的命令，请求沿着责任链传递，直到有一个处理器处理该命令。例如，在一个文本编辑器中，不同的命令（如复制、粘贴、撤销等）可以由不同的处理器处理。
- 异常处理
在异常处理系统中，可以使用责任链模式来处理不同类型的异常。异常请求沿着责任链传递，直到有一个处理器处理该异常。例如，在一个 web 应用程序中，可以有一系列的异常处理器来处理不同类型的异常（如数据库异常、网络异常、业务逻辑异常等）。

总之符合多层处理流程的功能都可以用责任链模式来应对。

## 应用场景
### 用责任链实现请求内容校验
用户注册的场景下，我们在创建新用户之前需要经过对字段合法性、用户是否已注册、用户黑名单校验等步骤，如果只是将步骤分为不同的方法或者都写在同一个方法里难免会造成一个大类，维护起来十分困难，这里使用责任链的模式进行拆分。

1. 抽象处理者
这里我们抽象处理者需要有处理方法和分类标识，处理方法当然是我们责任链每个环节的的具体实现，而分类标识则用来分类处理者种类从而实现多种处理者并存。这里我们还继承 Spring 的 Ordered 来实现每种责任链中处理者的执行排序。
```Java
import org.springframework.core.Ordered;

/**
 * @description: 抽象业务责任链
 **/
public interface AbstractChainHandler<T> extends Ordered {

    /**
     * 执行责任链逻辑
     *
     * @param requestParam 责任链执行入参
     */
    void handler(T requestParam);

    /**
     * 责任链组件标识
     */
    String mark();
}
```

2. 具体处理者
这里我们分别实现校验注册字段的三个具体实现类，首先定于用户注册责任链的分类。
```Java
/**
 * @description: 用户责任链处理者
 **/
public interface UserRegisterCreateChainFilter <T extends UserRegisterReqVo> extends AbstractChainHandler<UserRegisterReqVo> {

    @Override
    default String mark() {
        return UserChainMarkEnum.USER_REGISTER_FILTER.name();
    }
}
```
有了注册责任链接口后，我们只需要继承这个接口实现具体的校验逻辑和顺序即可。
```Java
/**
 * @description: 用户注册参数必填检验
 **/
@Component
public class UserRegisterParamNotNullChainHandler implements UserRegisterCreateChainFilter<UserRegisterReqVo> {

    @Override
    public void handler(UserRegisterReqVo requestParam) {
        if (Objects.isNull(requestParam.getUsername())) {
            throw new ClientException(UserRegisterErrorCodeEnum.USER_NAME_NOTNULL);
        } else if (Objects.isNull(requestParam.getPassword())) {
            throw new ClientException(UserRegisterErrorCodeEnum.PASSWORD_NOTNULL);
        } else if (Objects.isNull(requestParam.getTelephone())) {
            throw new ClientException(UserRegisterErrorCodeEnum.PHONE_NOTNULL);
        } else if (Objects.isNull(requestParam.getIdType())) {
            throw new ClientException(UserRegisterErrorCodeEnum.ID_TYPE_NOTNULL);
        } else if (Objects.isNull(requestParam.getIdCard())) {
            throw new ClientException(UserRegisterErrorCodeEnum.ID_CARD_NOTNULL);
        } else if (Objects.isNull(requestParam.getMail())) {
            throw new ClientException(UserRegisterErrorCodeEnum.MAIL_NOTNULL);
        } else if (Objects.isNull(requestParam.getRealName())) {
            throw new ClientException(UserRegisterErrorCodeEnum.REAL_NAME_NOTNULL);
        }
    }

    @Override
    public int getOrder() {
        return 0;
    }
}

/**
 * @description: 用户注册用户名唯一检验
 **/
@Component
@RequiredArgsConstructor
public class UserRegisterHasUsernameChainHandler implements UserRegisterCreateChainFilter<UserRegisterReqVo> {

    private final UserLoginService userLoginService;

    @Override
    public void handler(UserRegisterReqVo requestParam) {
        if (userLoginService.hasUsername(requestParam.getUsername())) {
            throw new ClientException(UserRegisterErrorCodeEnum.USERNAME_REGISTERED);
        }
    }

    @Override
    public int getOrder() {
        return 1;
    }
}

/**
 * @description: 用户注册检查证件号是否多次注销
 **/
@Component
@RequiredArgsConstructor
public class UserRegisterCheckDeletionChainHandler implements UserRegisterCreateChainFilter<UserRegisterReqVo> {

    private final UserInfoService userInfoService;

    @Override
    public void handler(UserRegisterReqVo requestParam) {
        Integer userDeletionNum = userInfoService.queryUserDeletionNum(requestParam.getIdType(), requestParam.getIdCard());
        if (userDeletionNum >= 5) {
            throw new ClientException("证件号多次注销账号已被加入黑名单");
        }
    }

    @Override
    public int getOrder() {
        return 2;
    }
}
```
3. 创建责任链
我们使用 Spring 的容器夹在组件的方式创建责任链，我们使用 Spring 提供的 CommandLineRunner 接口实现项目启动时获取所有继承我们抽象处理者的类并且按照 mark 分类和 Ordered 顺序来进行排序。
```Java
/**
 * @param <T> 请求参数的类型
 * @description: 抽象责任链上下文
 */
public class AbstractChainContext<T> implements CommandLineRunner {

    private final Map<String, List<AbstractChainHandler>> abstractChainHandlerContainer = new HashMap<>();

    @Override
    public void run(String... args) {
        // 获取所有具体执行者组件
        Map<String, AbstractChainHandler> chainFilterMap = ApplicationContextHolder.getBeansOfType(AbstractChainHandler.class);

        // 根据责任链组件标识将组件分类
        chainFilterMap.values().forEach(bean -> {
            abstractChainHandlerContainer
                    .computeIfAbsent(bean.mark(), k -> new ArrayList<>())
                    .add(bean);
        });

        // 按照组件 order 优先级进行排序
        abstractChainHandlerContainer.replaceAll((mark, handlers) ->
                handlers.stream()
                        .sorted(Comparator.comparing(Ordered::getOrder))
                        .collect(Collectors.toList())
        );
    }

    /**
     * 责任链组件执行
     *
     * @param mark         责任链组件标识
     * @param requestParam 请求参数
     */
    public void handler(String mark, T requestParam) {
        List<AbstractChainHandler> abstractChainHandlers = abstractChainHandlerContainer.get(mark);
        if (CollectionUtils.isEmpty(abstractChainHandlers)) {
            throw new RuntimeException(String.format("[%s] 责任链标识未定义。", mark));
        }
        abstractChainHandlers.forEach(each -> each.handler(requestParam));
    }
}
```

4. 使用责任链
```Java
@Transactional(rollbackFor = Exception.class)
@Override
public UserRegisterRespVo register(UserRegisterReqVo requestParam) {
    // 登录责任链
    abstractChainContext.handler(UserChainMarkEnum.USER_REGISTER_FILTER.name(), requestParam);
    // 其他逻辑省略
   
}
```
