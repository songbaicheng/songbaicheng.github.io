---
category: 工作任务
tag: 
  - Spring Boot
  - Java
  - Mockito
---

# 代码覆盖率 Mockito 
## 引言
刚开始工作的时候谁写测试类啊，还单元测试呢，测试我都不测试。后来到了正式一些的公司之后，你测试覆盖率不过都不能上线，所以 JaCoCo 这个开源的Java代码覆盖率工具就发挥作用了，它可以衡量测试套件对代码的覆盖程度、帮助开发团队分析测试覆盖率，并且了解哪些代码已经被测试覆盖，以及哪些代码尚未被测试覆盖。虽然 jaCoCo 很强，但是你的测试工具类得保证你的代码都可以覆盖的到，于是 Mockito 又出现了，相对于 Junit 它提供了简洁的API，使得在单元测试中创建模拟对象、定义模拟对象的行为以及验证方法的调用变得非常容易。

## 快速开始
### 导入依赖
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

### 测试代码
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

## 常用方法
### mock(Class<*T*> classToMock) 
创建一个模拟对象，用于代替真实对象的行为。

```java
UserService userServiceMock = Mockito.mock(UserService.class);
```

### when(mock.method()).thenReturn(value)
定义模拟对象方法的行为，指定当调用方法时应该返回的值。

```java
// 定义当调用 getUserById 方法并传入参数 1 时，返回一个名为 "zhangsan" 的 User 对象
User user = UserVo.builder().username("zhangsan").id("1").build();
Mockito.when(userServiceMock.getUserById(1)).thenReturn(user);
```

### verify(mock).method()
 验证模拟对象的方法是否被调用。

 ```java
// 验证 getUserById 方法是否被调用
Mockito.verify(userServiceMock).getUserById(1);

```

 ### verify(mock, times(n)).method()
验证模拟对象的方法被调用了特定的次数（n）。

```java
// 验证 getUserById 方法被调用了2次
Mockito.verify(userServiceMock, Mockito.times(2)).getUserById(1);
```

### verify(mock, atLeast(n)).method()
验证模拟对象的方法被调用了至少n次。

```java
// 验证 getUserById 方法被调用了至少3次
Mockito.verify(userServiceMock, Mockito.atLeast(3)).getUserById(1);
```

### verify(mock, never()).method()
验证模拟对象的方法从未被调用。

```java
// 验证 addUser 方法从未被调用
Mockito.verify(userServiceMock, Mockito.never()).addUser(Mockito.any(User.class));
```

### verifyNoMoreInteractions(mock)
验证模拟对象上的所有方法已经被验证，并且没有其他未验证的方法调用。

```java
// 验证 userServiceMock 上的所有方法已经被验证，并且没有其他未验证的方法调用
Mockito.verifyNoMoreInteractions(userServiceMock);

```

### doThrow(exception).when(mock).method()
指定当调用模拟对象的方法时应该抛出的异常。

```java
// 指定当调用 deleteUser 方法并传入任何参数时，抛出一个名为"UserNotFoundException"的异常
Mockito.doThrow(new UserNotFoundException()).when(userServiceMock).deleteUser(Mockito.anyInt());

```

### doAnswer(answer).when(mock).method()
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

## 总结
Mockito 还提供了其他一些高级功能和方法，例如参数匹配、顺序验证、超时验证等，如果想了解更多可以查阅下面的 Mockito的官方文档。

```card
title: Mockito 官网文档
desc: 点击跳转官网查看详细内容
logo: /assets/images/work-task/development/mockito/mockito.png
link: https://site.mockito.org/
color: rgba(173, 216, 590, 0.15)
```

