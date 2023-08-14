---
category: 工作任务
tag: 
  - Spring Boot
  - Java
  - Mockito
---

# 单元测试
> 单元测试（Java语言中）是对类中每个方法提供一个或多个测试的一种实践，其目的是为了有规律的测试一个类的各个部分是否具备正确的行为。 ——摘自《Java 编程思想》

## 引言
刚开始工作的时候谁写测试类啊，还单元测试呢，测试我都不测试。后来到了正式一些的公司之后，不通过质量门禁则不能上线，所以 JaCoCo 这个开源的单元测试引擎就发挥作用了，它搭配 Sonar 面板可以展示单元测试对代码的覆盖程度、帮助开发团队分析测试覆盖率，并且了解哪些代码已经被测试覆盖，以及哪些代码尚未被测试覆盖。尽管如此，你的测试类还是很难保证你的代码所有逻辑分支都可以覆盖的到，于是 Mock 又出现了，相对于 Junit 它提供了简洁的API，使得在单元测试中创建模拟对象、定义模拟对象的行为以及验证方法的调用变得非常容易。所以我们选择使用 Mock 搭配 JUnit 作为最佳解决方案。

## 质量门襟要求
除 web 语言之外的所有开发语言在投产时，增量代码单元测试行覆盖率要求 100%，如果在 80% 到 100% 范围，可以进行人工评审环节，评审过后方可通过质量门禁校验。并且单元测试成功率不得低于 100%。

## 规范的单元测试
单元测试的目的是：提升软件质量、促进代码优化、提升研发效率、增加重构自信。单元测试需要符合两大类原则：FIRST 原则和 AIR 原则。

- FITST原则：
    - 快速（Fast）：单元测试能够快速执行。
    - 隔离（Isolated）：单元测试不要依赖外部环境，如网络、第三方 Web Service 等。
    - 可重复（Repeatable）：单元测试应该是可以被重复执行的，并且结果是相等的。
    - 自我验证（Self-verigying）：单元测试应该是用例本身自动校验，不依赖人工验证。
    - 及时（Timely）：单元测试应该及时进行编写、更新和维护，以保证测试用例可以随着业务代码的变化动态保证质量。
- AIR 原则：
    - 自动化（Automatic）
    - 独立性（Independent）
    - 可重复（Repeatable）

### 屏蔽内容限制
不包含逻辑处理的代码可屏蔽：
- 实体类（DTO、Entity、VO）。
- 框架自动生成代码，如 Mapper、实体类等。
- 枚举类。

### 用例强制要求
- 测试用例必须增加断言逻辑，避免恒真，用例需要保持结果准确性校验，用例执行结果必须能根据代码变化而反映出变化。
- 单元测试需要尽可能的覆盖函数的所有范围，针对代码执行成功、失败、异常三种情况编写不同的用例。
- 保证单元测试的独立性。
- 单元测试是可重复执行的。
- 测试力度足够小，可以精确定位问题。

### 用例建议要求
- 不建议调用数据库，外部接口，建议使用Mock
- 不建议启动 Spring 容器。
- 测试用例均需需为 public void。
- 单元测试包结构和源码结构尽量保持一致。
- 单元测试文件名称是由被”测试文件 + Test“ 组成

## 单元测试用例思路
以目标类或类中的某一个函数为单元体，通过构造尽可能覆盖所有的单数范围的不同入参对其进行调用，对比返回值是否到达预期，从而验证函数逻辑的正确性。

当然存在被测试类A调用其他类B的函数，为了控制A中的代码逻辑，需要控制B对象函数的返回值，可以根据如下考虑：

| B对象来源 | 场景 | A对象是否需哟啊提前给B赋值 | 赋值方式 | 是否需要Mock函数 |
|---|---|:---:|:---:|:---:|
| 静态类 | 静态类初始化或其函数调用过程中，不依赖环境信息（API调用、DB调用、磁盘读取等） |不涉及|不涉及|不需要|
| 静态类 | 静态类初始化或其函数调用过程中，依赖了环境信息（API调用、DB调用、磁盘读取等） |不涉及|不涉及|需要|
| new 所得 | 静态类初始化或其函数调用过程中，不依赖环境信息（API调用、DB调用、磁盘读取等）|不需要|不涉及|不需要|
| new 所得 | 静态类初始化或其函数调用过程中，依赖了环境信息（API调用、DB调用、磁盘读取等）|需要| Mock whenNew|需要|
| A的public方法传入 | 静态类初始化或其函数调用过程中，不依赖环境信息（API调用、DB调用、磁盘读取等）|需要|public方法|不需要|
| A的public方法传入 | 静态类初始化或其函数调用过程中，依赖了环境信息（API调用、DB调用、磁盘读取等）|需要|public方法|需要|
| Spring注解 | 静态类初始化或其函数调用过程中，不依赖环境信息（API调用、DB调用、磁盘读取等）|需要|public 方法|需要|
| Spring注解 | 静态类初始化或其函数调用过程中，依赖了环境信息（API调用、DB调用、磁盘读取等）|需要|Mock 注解|需要|

## Mock
Mock 是在测试过程中对于一些不容易构造获取的对象，创建一个Mock对象来模拟对象的行为。基本原理就是先模拟对象，然后声明行为，最后执行验证，通过Mock能力控制代码路径，跳过外部依赖，实现分支覆盖。

Mock 框架目前也有很多版本，有如下几种：
- Easy Mock：一套通过简单方法对于给定的接口生成 Mock 对象的类库，它提供接口的模拟，能够通过录制、回放、检查三步来完成大体流程，可以令Mock对象返回指定的值或者抛出指定异常。
- JMock：基于Java开发，大大简化了虚拟对象的使用。
- Mockito：可读性强，验证语法简单，可以与JUnit无缝结合，是最广泛的Mock框架。
- PowerMock：Mockito增强版，弥补了对静态方法的不支持。

||Easy Mcok|JMock|Mockito|PowerMock|
|---|:---:|:---:|:---:|:---:|
|final 方法|不支持|不支持|支持|支持|
|私有方法|不支持|不支持|不支持|不支持|
|静态方法|不支持|不支持|支持|支持|
|SpringBoot依赖|复杂|复杂|默认依赖|基于 Mocktio 拓展|
|API风格|略复杂|略复杂|简单|简单|

## Mock 单元测试实践
### Mockito
#### 导入依赖
::: code-tabs

@tab Maven#Maven

```xml
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <scope>test</scope>
</dependency>
```

@tab Gradle#Gradle

```gradle
testImplementation 'org.mockito:mockito-core:<version>'
```

:::

#### 测试代码
Mockito 与多种测试框架（如JUnit、TestNG）和依赖注入框架（如Spring）完美集成，所以我们就用最常用的 Spring Boot 代码进行测试。

首先我们先准备好要测试的方法类，内容也是非常的简单，无非是包含了关于用户的 crud 功能。

::: normal-demo 待测试方法

```java
@Data
@Builder
public class User {
    private String id;
    private String username;
}
```
```java
@Repository
public interface IUserMapper {
    List<User> getAllUsers();
    
    User getUserById(String id);
    
    void saveUser(User user);
    
    void deleteUser(String id);
}
```
```java
@Service
public class UserService {

    @Autowired
    private IUserMapper userMapper;
    
    public List<User> getAllUsers() {
        return userMapper.getAllUsers();
    }
    
    public User getUserById(String id) {
        return userMapper.getUserById(id);
    }
    
    public void saveUser(User user) {
        userMapper.saveUser(user);
    }
    
    public void deleteUser(String id) {
        userMapper.deleteUser(id);
    }
}
```

:::

接下来就是写测试类了，我们这里需要依赖 Spring 容器测试，所以我们结合 @SpringBootTest 启动，而具体的测试方法也根据

::: normal-demo 测试类代码

```java
@SpringBootTest
class UserServiceTest {

    @MockBean
    private IUserMapper userMapper;
    @Autowired
    private UserService userService;

    @Test
    void testGetAllUsers() {
        List<User> expectedUsers = Arrays.asList(
              UserVo.builder().username("zhangsan").id("1").build(),
              UserVo.builder().username("lisi").id("2").build(),
        );
        
        Mockito.when(userMapper.getAllUsers()).thenReturn(expectedUsers);
        
        List<User> actualUsers = userService.getAllUsers();
        
        assertEquals(expectedUsers, actualUsers);
        Mockito.verify(userMapper).getAllUsers();
    }
    
    @Test
    void testGetUserById() {
        String userId = "1";
        User expectedUser = new User(userId, "John");
        
        Mockito.when(userMapper.getUserById(userId)).thenReturn(expectedUser);
        
        User actualUser = userService.getUserById(userId);
        
        assertEquals(expectedUser, actualUser);
        Mockito.verify(userMapper).getUserById(userId);
    }
    
    @Test
    void testSaveUser() {
        User user = new User("1", "John");
        
        userService.saveUser(user);
        
        Mockito.verify(userMapper).saveUser(user);
    }
    
    @Test
    void testDeleteUser() {
        String userId = "1";
        
        userService.deleteUser(userId);
        
        Mockito.verify(userMapper).deleteUser(userId);
    }
    
    @Test
    void testGetUserById_NonExistingUser() {
        String userId = "1";
        
        Mockito.when(userMapper.getUserById(userId)).thenReturn(null);
        
        assertThrows(UserNotFoundException.class, () -> {
            userService.getUserById(userId);
        });
        
        Mockito.verify(userMapper).getUserById(userId);
    }
    
    @Test
    void testSaveUser_NullUser() {
        assertThrows(IllegalArgumentException.class, () -> {
            userService.saveUser(null);
        });
        
        Mockito.verify(userMapper, Mockito.never()).saveUser(ArgumentMatchers.any());
    }
}
```

:::

#### 常用方法
##### mock(Class<*T*> classToMock) 
创建一个模拟对象，用于代替真实对象的行为。

```java
UserService userServiceMock = Mockito.mock(UserService.class);
```

##### when(mock.method()).thenReturn(value)
定义模拟对象方法的行为，指定当调用方法时应该返回的值。

```java
// 定义当调用 getUserById 方法并传入参数 1 时，返回一个名为 "zhangsan" 的 User 对象
User user = UserVo.builder().username("zhangsan").id("1").build();
Mockito.when(userServiceMock.getUserById(1)).thenReturn(user);
```

##### verify(mock).method()
 验证模拟对象的方法是否被调用。

 ```java
// 验证 getUserById 方法是否被调用
Mockito.verify(userServiceMock).getUserById(1);

```

 ##### verify(mock, times(n)).method()
验证模拟对象的方法被调用了特定的次数（n）。

```java
// 验证 getUserById 方法被调用了2次
Mockito.verify(userServiceMock, Mockito.times(2)).getUserById(1);
```

##### verify(mock, atLeast(n)).method()
验证模拟对象的方法被调用了至少n次。

```java
// 验证 getUserById 方法被调用了至少3次
Mockito.verify(userServiceMock, Mockito.atLeast(3)).getUserById(1);
```

##### verify(mock, never()).method()
验证模拟对象的方法从未被调用。

```java
// 验证 addUser 方法从未被调用
Mockito.verify(userServiceMock, Mockito.never()).addUser(Mockito.any(User.class));
```

##### verifyNoMoreInteractions(mock)
验证模拟对象上的所有方法已经被验证，并且没有其他未验证的方法调用。

```java
// 验证 userServiceMock 上的所有方法已经被验证，并且没有其他未验证的方法调用
Mockito.verifyNoMoreInteractions(userServiceMock);

```

##### doThrow(exception).when(mock).method()
指定当调用模拟对象的方法时应该抛出的异常。

```java
// 指定当调用 deleteUser 方法并传入任何参数时，抛出一个名为"UserNotFoundException"的异常
Mockito.doThrow(new UserNotFoundException()).when(userServiceMock).deleteUser(Mockito.anyInt());

```

##### doAnswer(answer).when(mock).method()
指定模拟对象方法的调用应该如何进行自定义处理，例如执行回调函数或返回动态计算的结果。

```java
// 定义当调用 updateUser 方法时，执行自定义的逻辑来修改用户对象
Mockito.doAnswer(invocation -> {
    User userToUpdate = invocation.getArgument(0);
    // 执行自定义逻辑来更新用户对象
    userToUpdate.setName("Updated Name");
    return userToUpdate;
}).when(userServiceMock).updateUser(Mockito.any(User.class));

```

### PowerMock
#### 导入依赖
::: code-tabs
@tab Maven#Maven

```xml
<dependency>
    <groupId>org.powermock</groupId>
    <artifactId>powermock-api-mockito2</artifactId>
    <version>2.0.9</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.powermock</groupId>
    <artifactId>powermock-module-junit4</artifactId>
    <version>2.0.9</version>
    <scope>test</scope>
</dependency>
```
@tab Gradle#Gradle
```gradle
    testImplementation 'org.powermock:powermock-api-mockito2:2.0.9'
    testImplementation 'org.powermock:powermock-module-junit4:2.0.9'
```
:::

#### 测试代码
::: normal-demo 测试类代码

```java
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * @ClassName TestClass
 * @Description 测试 PowerMock 类
 */
public class TestClass {

    public String getUUID() {
        return UUID.randomUUID().toString();
    }

    public List<Integer> soutArray() {

        return new ArrayList<Integer>() {
            {
                add(2);
            }
        };
    }
}
```
```java
package com.sbc.unittest;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * @ClassName TestClassTest
 * @Description powermock 测试类
 * @Author songbaicheng
 * @Date 2023/8/14 12:09
 */
@RunWith(PowerMockRunner.class)
@PrepareForTest({TestClass.class, UUID.class})
class TestClassTest {

    @Test
    public void testGetUUID() throws Exception {

        PowerMockito.mockStatic(UUID.class);
        PowerMockito.doReturn(new UUID(0L, 0L)).when(UUID.randomUUID());

        TestClass testClass = new TestClass();
        String uuid = testClass.getUUID();

//        PowerMockito.verifyStatic(UUID.class);

        assertEquals("00000000-0000-0000-0000-000000000000", uuid);
    }

    @Test
    public void testSoutArray() {
        TestClass testClass = PowerMockito.spy(new TestClass());

        List mockIntegers = PowerMockito.mock(List.class);
        PowerMockito.doReturn(mockIntegers).when(testClass).soutArray();

        testClass.soutArray();
    }
}
```
:::

## 总结
Mockito 还提供了其他一些高级功能和方法，例如参数匹配、顺序验证、超时验证等，如果想了解更多可以查阅下面的 Mockito的官方文档。

```card
title: Mockito 官网文档
desc: 点击跳转官网查看详细内容
logo: /assets/images/work-task/development/mockito/mockito.png
link: https://site.mockito.org/
color: rgba(173, 216, 590, 0.15)
```

