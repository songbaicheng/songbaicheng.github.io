---
star: true
category: Java 基础
tag: 
  - Java 8 新特性
  - Optional
---

# Java 8 新特性
## Interface
Java 8 中的接口可以包含默认方法（default）和静态方法（static）,default 修饰的方法，是普通实例方法，可以用this调用，可以被子类继承、重写，而 static 修饰的方法，使用上和一般类静态方法一样。但它不能被子类继承，只能用 Interface 调用。
```Java
public interface InterfaceNew {
    static void sm() {
        System.out.println("interface提供的方式实现");
    }
    static void sm2() {
        System.out.println("interface提供的方式实现");
    }

    default void def() {
        System.out.println("interface default方法");
    }
    default void def2() {
        System.out.println("interface default2方法");
    }
    //须要实现类重写
    void f();
}

public interface InterfaceNew1 {
    default void def() {
        System.out.println("InterfaceNew1 default方法");
    }
}
```
如果有一个类既实现了 InterfaceNew 接口又实现了 InterfaceNew1接口，它们都有def()，并且 InterfaceNew 接口和 InterfaceNew1接口没有继承关系的话，这时就必须重写def()。不然的话，编译的时候就会报错。


## Optional
Java 8中的 Optional 类可以在以下情况下使用：
- 当你不确定一个值是否存在时，可以使用 Optional 来封装这个值，避免在运行时出现 NullPointerException 异常。
- 当你需要返回一个可能为空的值时，可以使用 Optional 来代替空指针。这样，你可以避免在代码中使用 null 值，并且可以更加优雅地处理可能为空的情况。
- 当你需要对一个可能为空的值进行操作时，可以使用 Optional 提供的 map、filter 等方法来避免空指针异常的出现。

无论何时何地，Optional 类可以帮助你更好地处理可能为空的值，使得你的代码更加健壮、优雅。

### 创建一个 Optional
创建Optional有以下几种方式：

1. 使用 ```Optional.empty()``` 方法创建一个空的 Optional 对象。
2. 使用 ```Optional.of()``` 方法创建一个包含指定值的 Optional 对象。
3. 使用 ```Optional.ofNullable()``` 方法创建一个包含指定值的 Optional 对象，如果指定值为 null 则返回空的 Optional 对象。

```java
Optional<String> optional1 = Optional.of("hello");
Optional<String> optional2 = Optional.ofNullable(null);
Optional<String> optional3 = Optional.empty();
```

### 判断一个 Optional 是否为空
```java
Optional<String> optional = Optional.of("hello");

if (optional.isPresent()) {
    System.out.println("Optional is not empty");
} else {
    System.out.println("Optional is empty");
}

// Optional is not empty
```

### 获取一个 Optional 的值

#### get()：如果该 Optional 不为空则返回该对象，否则抛出 NullPointerException 异常。
```java
Optional<String> optional = Optional.of("hello");
String value = optional.get(); // 输出hello
```

#### orElse()：如果该 Optional 不为空则返回该对象，否则返回指定的默认值。
```java
Optional<String> optional = Optional.ofNullable(null);
String value = optional.orElse("fallback value"); // 输出fallback value
```

#### orElseGet()：如果该 Optional 不为空则返回该对象，否则调用指定的 Supplier 获取默认值。
```java
Optional<String> optional = Optional.ofNullable(null);
String value = optional.orElseGet(() -> "fallback value"); // 输出fallback value
```

#### map()：如果有值，则对其执行调用映射函数得到返回值。如果返回值不为 null，则创建包含映射返回值的 Optional 作为 map 方法返回值，否则返回空 Optional。
```java
Optional<String> optional = Optional.of("hello");
Optional<String> value = optional.map(str -> str.toUpperCase()); // 输出HELLO
```

#### filter()：如果值存在，并且这个值匹配给定的条件，返回一个 Optional 用以描述这个值，否则返回一个空的 Optional。
```java
Optional<String> optional = Optional.of("hello");
Optional<String> value = optional.filter(str -> str.startsWith("he")); // 输出hello
```

#### orElseThrow()：如果该 Optional 不为空则返回对象，否则抛出指定的异常。
```java
Optional<String> optional = Optional.ofNullable(null);
String value = optional.orElseThrow(() -> new RuntimeException("fallback value")); // 抛出RuntimeException
```

### 反例
一开始我在知道这些 API 后，最常用的写法就像下面这样：
```java
Optional<String> optional = Optional.ofNullable(null);

String value = optional.get();

if (value == null) {
    System.out.println("Value is null");
}
```

或者下面这样：
```java
Optional<String> optional = Optional.ofNullable(null);

if (optional.isPresent()) {
    String value = optional.get();
    System.out.println(value);
} else {
    System.out.println("Value is null");
}
```

low！用了也是白用。

### 正例
```
```

### 总结
我们使用 Optional 的核心原因就是不想代码出现 NPE，我们发现就算使用 Optionl 也会出现 NPE 出现的情况，所以为了避免这种情况的发生，不要轻易 of()、get()、flatMap() 这几个方法。