---
star: true
category: Java 基础
tag: 
  - Java 8 新特性
  - Optional
---

# Java 8 新特性
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

#### 使用 Optional 的 get() 方法获取值：如果该 Optional 对象为空，则抛出 NullPointerException 异常。
```java
Optional<String> optional = Optional.of("hello");
String value = optional.get(); // 输出hello
```

#### 使用 Optional 的 orElse() 方法获取值：如果该 Optional 对象为空，则返回指定的默认值。
```java
Optional<String> optional = Optional.ofNullable(null);
String value = optional.orElse("fallback value"); // 输出fallback value
```

#### 使用 Optional 的 orElseGet() 方法获取值：如果该 Optional 对象为空，则调用指定的 Supplier 获取默认值。
```java
#### Optional<String> optional = Optional.ofNullable(null);
String value = optional.orElseGet(() -> "fallback value"); // 输出fallback value
```

#### 使用 Optional 的 map() 方法获取值：如果该 Optional 对象为空，则不进行任何操作，返回空的Optional对象。
```java
Optional<String> optional = Optional.of("hello");
Optional<String> value = optional.map(str -> str.toUpperCase()); // 输出HELLO
```

#### 使用 Optional 的 filter() 方法获取值：如果该 Optional 对象为空，则不进行任何操作，返回空的Optional对象。
```java
Optional<String> optional = Optional.of("hello");
Optional<String> value = optional.filter(str -> str.startsWith("he")); // 输出hello
```

#### 使用 Optional 的 findFirst() 方法获取值：如果该 Optional 对象为空，则返回空的 Optional 对象。
```java
Optional<String> optional = Optional.of("hello world");
Optional<String> value = optionalfindFirst(); // 输出hello
```

#### 使用 Optional 的 orElseThrow() 方法获取值：如果该 Optional 对象为空，则抛出指定的异常。
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