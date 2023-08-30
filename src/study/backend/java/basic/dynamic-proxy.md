---
category: Java 基础
tag: 
  - proxy
  - Java
---

# 动态代理
## 引言
今天在复习微服务的时候看到 OpenFeign 使用动态代理集成调用 Ribbon 来实现负载均衡，出于兴趣我就想简单瞥一眼到底是如何调用的，可是结果非常出乎意料，搜索到的结果是：在 OpenFeign 中，Ribbon 的集成是通过使用 Feign 的 Client 接口来实现的。可能那个作者单纯是想延伸一下动态代理这一块的知识，至于到底如何调用的先放在下次再谈，但是动态代理这个知识点必须该梳理梳理了，无论是背面试题还是源码当中它都无处不在，什么 jdk 实现和 cjlib 实现，今天都得给我整明白。

## 走进动态代理
### 什么是动态代理
Java 的动态代理是一种运行时生成代理对象的机制，允许在运行时创建代理类及其实例，以实现对目标对象的代理操作。简单来说就是它提供了一种灵活的方式来在不修改目标对象源代码的情况下，对其方法进行增强或添加额外的逻辑。有动态代理就有静态代理，见名知意，静态代理就是代码中事先定义好的，在编译的时候就已经确定的，在灵活性上肯定就是略逊一筹了。动态代理在需要在运行时对对象进行控制、增强或拦截的场景中非常有用，使用的场景有以下几种：

1. AOP（面向切面编程）：动态代理可以用于实现横切关注点的模块化，例如日志记录、性能监控、事务管理等。通过在目标方法执行前后插入额外的逻辑，可以实现对目标方法的增强。
2. 延迟加载（Lazy Loading）：动态代理可以延迟加载对象，当需要访问对象时才进行实例化，可以提高系统的性能和资源利用率。代理对象可以在真正需要对象时才创建，从而避免了不必要的对象创建和初始化过程。
3. 远程代理（Remote Proxy）：动态代理可以用于远程方法调用，通过代理对象在本地调用方法，实际执行的是远程的对象的方法。这种方式可以隐藏远程调用的细节，提供更简洁的调用方式。
4. 安全控制：动态代理可以用于实现安全控制，例如权限验证、身份认证等。代理对象可以在调用目标方法之前进行权限检查，只有符合要求的用户才能访问目标方法。
5. 缓存管理：动态代理可以用于实现缓存管理，通过在代理对象中添加缓存逻辑，可以在访问某个方法时先检查缓存，如果缓存中存在结果，则直接返回结果，避免重复计算。
6. 日志记录：动态代理可以用于实现日志记录，通过在代理对象中添加日志记录逻辑，可以记录方法的调用信息、参数和返回值，方便系统的跟踪和调试。

当我们遇到以上这些情况的时候怎么知道这是在使用动态代理呢，那我们就需要知道如何实现动态代理了。

### 如何实现动态代理
在Java中，有两种常见的实现方式用于实现动态代理：基于接口的动态代理和基于类的动态代理。

1. 基于接口的动态代理：
- 基于Java的java.lang.reflect.Proxy类实现。
- 要求目标对象实现一个或多个接口。
- 代理类是在运行时动态生成的，基于接口生成代理类，因此代理类只能代理接口中定义的方法。
- 代理对象通过实现InvocationHandler接口来处理被代理方法的调用。
2. 基于类的动态代理：
- 基于第三方库如CGLIB（Code Generation Library）实现。
- 不要求目标对象实现接口，可以代理普通的类。
- 代理类是通过继承目标类来生成的，因此代理类可以代理目标类中的所有方法，包括非公共的方法。
- 代理对象通过继承目标类并重写方法来实现对被代理方法的调用。

这两种实现方式的区别在于代理对象的生成方式和代理的范围。基于接口的动态代理要求目标对象实现接口，生成的代理类只能代理接口中的方法；而基于类的动态代理不要求目标对象实现接口，生成的代理类可以代理目标类中的所有方法，包括非公共的方法。

总的来说，基于接口的动态代理适用于那些已经实现了接口的目标对象；而基于类的动态代理适用于那些没有实现接口的目标对象，或者需要代理非公共方法的情况。

### 基于接口实现动态代理
#### 示例思路
我们定义了一个 UserService 接口和其实现类 UserServiceImpl。然后，创建了一个 UserServiceProxy 类作为代理对象的处理器，并实现了 InvocationHandler 接口。在 invoke() 方法中，我们可以在方法执行前后添加额外的逻辑。最后，使用 Proxy 类的 newProxyInstance() 方法创建代理对象并执行目标方法。
#### 实例代码
1. 定义接口和实现类：首先，需要定义一个接口，该接口是目标对象和代理对象共同实现的接口。假设我们有一个简单的接口 UserService，包含了一些用户操作的方法，然后简单实现该接口。

```java
public interface UserService {
    void addUser(String username);
    void deleteUser(String username);
    void updateUser(String username);
    void getUser(String username);
}

public class UserServiceImpl implements UserService {
    @Override
    public void addUser(String username) {
        System.out.println("Adding user: " + username);
    }

    @Override
    public void deleteUser(String username) {
        System.out.println("Deleting user: " + username);
    }

    @Override
    public void updateUser(String username) {
        System.out.println("Updating user: " + username);
    }

    @Override
    public void getUser(String username) {
        System.out.println("Getting user: " + username);
    }
}
```

2. 实现 InvocationHandler 接口：创建一个实现 InvocationHandler 接口的类，该类负责处理代理对象的方法调用。在该类中，你可以定义在目标方法执行前后需要执行的逻辑。

```java
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

public class UserServiceProxy implements InvocationHandler {
    private Object target;

    public UserServiceProxy(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        // 在方法执行前添加额外逻辑
        System.out.println("Before method: " + method.getName());

        // 调用目标对象的方法
        Object result = method.invoke(target, args);

        // 在方法执行后添加额外逻辑
        System.out.println("After method: " + method.getName());

        return result;
    }
}
```
3. 创建代理对象：使用 java.lang.reflect.Proxy 类的 newProxyInstance() 方法创建代理对象。该方法接受三个参数：类加载器，目标对象实现的接口数组，和 InvocationHandler 对象。

```java
import java.lang.reflect.Proxy;

public class Main {
    public static void main(String[] args) {
        // 创建目标对象
        UserService userService = new UserServiceImpl();

        // 创建 InvocationHandler 对象
        UserServiceProxy handler = new UserServiceProxy(userService);

        // 创建代理对象
        UserService proxy = (UserService) Proxy.newProxyInstance(
                userService.getClass().getClassLoader(),
                userService.getClass().getInterfaces(),
                handler);

        // 通过代理对象调用方法
        proxy.addUser("John Doe");
        proxy.deleteUser("John Doe");
    }
}
```

### 基于类实现动态代理
#### 示例思路
通过Enhancer类创建了一个代理类，将MyInterceptor作为拦截器。当调用代理对象的方法时，拦截器的intercept方法将被调用，你可以在该方法中添加适当的逻辑来丰富目标功能。

#### 实例代码
1. 引入 CGLib 依赖

```groovy
dependencies {
    // 其他依赖项...
    implementation 'cglib:cglib:3.3.0'
}

```
```xml
<dependencies>
    <!-- 其他依赖项... -->
    <dependency>
        <groupId>cglib</groupId>
        <artifactId>cglib</artifactId>
        <version>3.3.0</version>
    </dependency>
</dependencies>
```

2. 创建一个被代理的类，无需实现任何接口。

```java
public class MyClass {
    public void doSomething() {
        System.out.println("Doing something");
    }
}
```

3. 实现一个MethodInterceptor接口的类，该接口定义了一个intercept方法，在该方法中定义了代理类的行为。

```java
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;

public class MyInterceptor implements MethodInterceptor {
    @Override
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        // 在调用被代理类方法前执行一些操作
        System.out.println("Before method invocation");

        // 调用被代理类的方法
        Object result = proxy.invokeSuper(obj, args);

        // 在调用被代理类方法后执行一些操作
        System.out.println("After method invocation");

        return result;
    }
}
```

4. 使用CGLib的Enhancer类来创建代理对象。Enhancer类提供了一种方便的方式来生成代理类的子类，并将拦截逻辑应用到被代理类的方法上。

```java
import net.sf.cglib.proxy.Enhancer;

public class Main {
    public static void main(String[] args) {
        // 创建Enhancer实例
        Enhancer enhancer = new Enhancer();
        
        // 设置被代理类的父类
        enhancer.setSuperclass(MyClass.class);
        
        // 设置拦截器
        enhancer.setCallback(new MyInterceptor());
        
        // 创建代理对象
        MyClass proxy = (MyClass) enhancer.create();
        
        // 调用代理对象的方法
        proxy.doSomething();
    }
}
```
### 总结和延伸
示例中代理对象通过反射的方式调用目标对象的方法，并在方法执行前后执行了额外的逻辑，实现了动态代理的动态性。我们可以根据这两个 demo 在各个场景中做延伸，比如：

1. 日志记录：你可以添加日志记录的逻辑，记录方法的调用信息、参数和返回值。这样可以实现在不修改目标对象的代码的情况下，对方法的调用进行日志记录。

2. 性能监控：你可以添加性能监控的逻辑，包括记录方法的执行时间、计数器等。通过动态代理，你可以在方法调用前后测量和监控方法的性能指标。

3. 缓存管理：你可以添加缓存管理的逻辑，检查缓存中是否存在方法调用的结果。如果缓存中存在结果，则直接返回缓存的结果，避免重复计算。

4. 事务管理：你可以添加事务管理的逻辑，包括在方法执行前开启事务、在方法执行后提交或回滚事务。通过动态代理，可以实现对方法的事务控制，确保方法的执行在事务的上下文中进行。

5. 安全控制：你可以添加安全控制的逻辑，包括对方法的权限验证、身份认证等。通过动态代理，可以在方法调用前对用户进行权限检查，只有符合要求的用户才能访问目标方法。
