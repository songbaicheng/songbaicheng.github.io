---
star: true
category: Java 基础
tag:
  - Java 8 新特性
  - Optional
---

# Java 8 新特性

Java 8 发布于 2014 年，成为 Java 程序员最喜欢且热衷的版本之一，Java 8
引入了很多新特性，并且很多数据结构的底层实现都发生了变化，接下来我们罗列我们日常开发中常用的新特性来分享一下。

```mindmap
root((Java 8 新特性))
  Interface
  Optional
  Lambda 表达式
  函数式接口
  方法引用
  Stream API
```

```card
title: oracle JDK 8 介绍
desc: 点击跳转官网查看详细内容
logo: /icon/oracle.svg
link: https://www.oracle.com/java/technologies/javase/8-whats-new.html
color: rgba(173, 216, 590, 0.15)
```

## Interface

Java 8 中的接口新增默认方法（default）和静态方法（static）,default 修饰的方法，是普通实例方法，可以用 this 调用，可以被子类继承、重写，而
static 修饰的方法，使用上和一般类静态方法一样，但它不能被子类继承，只能用 Interface 调用。这样看来我们的接口和抽象类就越来越像了。

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

如果有一个类既实现了 InterfaceNew 接口又实现了 InterfaceNew1接口，它们都有def()，并且 InterfaceNew 接口和
InterfaceNew1接口没有继承关系的话，这时就必须重写def()。不然的话，编译的时候就会报错。

## functional interface 函数式接口

函数式接口（Functional Interface）是 Java 8 中引入的一种特殊的接口，由 ```@FunctionalInterface``` 注解修饰，它只有一个抽象方法。函数式接口可以用于
Lambda 表达式和方法引用，使得代码更加简洁和易读。
> 值得注意的是只要符合函数式接口的定义就是函数式接口，与是否有 ```@FunctionalInterface``` 注解无关，注解只是在编译时起到强制规范定义的作用。

## Lambda 表达式

说完函数式接口就不得不提到 Lambda 这位重量级选手了，Lambda 表达式是 Java 8 中引入的一种新的语法，它允许你以更简洁的方式编写匿名函数。Lambda
表达式可以用于函数式接口，使得代码更加简洁和易读。

1. Runnable 接口

```Java
// 之前
new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("The runable now is using!");
            }
}).start();

// Lambda
new Thread(() -> System.out.println("It's a lambda function!")).start();
```

2. Comparator 接口

```Java
// 之前
List<Integer> strings = Arrays.asList(1, 2, 3);

Collections.sort(strings, new Comparator<Integer>() {
@Override
public int compare(Integer o1, Integer o2) {
    return o1 - o2;}
});

// Lambda
Collections.sort(strings, (Integer o1, Integer o2) -> o1 - o2);
```

3. 方法调用
   Java 8 允许使用 :: 关键字来传递方法或者构造函数引用，无论如何，表达式返回的类型必须是 functional-interface ，下面用
   Mybatis Plus 的 Wrapper 来展示。

```Java
LambdaUpdateWrapper<TUser> updateWrapper = Wrappers.lambdaUpdate(TUser.class)
        .eq(TUser::getUsername, username)
        .set(TUser::getRealName, userBasicInfo.getRealName())
        .set(TUser::getIdType, userBasicInfo.getIdType())
        .set(TUser::getIdCard, userBasicInfo.getIdCard());
```

## Optional

Java 8中的 Optional 类可以在以下情况下使用：

- 当你不确定一个值是否存在时，可以使用 Optional 来封装这个值，避免在运行时出现 NullPointerException 异常。
- 当你需要返回一个可能为空的值时，可以使用 Optional 来代替空指针。这样，你可以避免在代码中使用 null 值，并且可以更加优雅地处理可能为空的情况。
- 当你需要对一个可能为空的值进行操作时，可以使用 Optional 提供的 map、filter 等方法来避免空指针异常的出现。

无论何时何地，Optional 类可以帮助你更好地处理可能为空的值，使得你的代码更加健壮、优雅。

```java
// 创建一个 Optional
Optional<String> optional1 = Optional.of("hello");
Optional<String> optional2 = Optional.ofNullable(null);
Optional<String> optional3 = Optional.empty();

// 判断一个 Optional 是否为空
Optional<String> optional = Optional.of("hello");
if (optional.isPresent()) {
    System.out.println("Optional is not empty");
} else {
    System.out.println("Optional is empty");
}

// get()：如果该 Optional 不为空则返回该对象，否则抛出 NullPointerException 异常。
Optional<String> optional = Optional.of("hello");
String value = optional.get(); // 输出hello

// orElse()：如果该 Optional 不为空则返回该对象，否则返回指定的默认值。
Optional<String> optional = Optional.ofNullable(null);
String value = optional.orElse("fallback value"); // 输出fallback value

// orElseGet()：如果该 Optional 不为空则返回该对象，否则调用指定的 Supplier 获取默认值。
Optional<String> optional = Optional.ofNullable(null);
String value = optional.orElseGet(() -> "fallback value"); // 输出fallback value

// map()：如果有值，则对其执行调用映射函数得到返回值。如果返回值不为 null，则创建包含映射返回值的 Optional 作为 map 方法返回值，否则返回空 Optional。
Optional<String> optional = Optional.of("hello");
Optional<String> value = optional.map(str -> str.toUpperCase()); // 输出HELLO

// filter()：如果值存在，并且这个值匹配给定的条件，返回一个 Optional 用以描述这个值，否则返回一个空的 Optional。
Optional<String> optional = Optional.of("hello");
Optional<String> value = optional.filter(str -> str.startsWith("he")); // 输出hello

// orElseThrow()：如果该 Optional 不为空则返回对象，否则抛出指定的异常。
Optional<String> optional = Optional.ofNullable(null);
String value = optional.orElseThrow(() -> new RuntimeException("fallback value")); // 抛出RuntimeException
```

## Date/Time API
随着 JDK 1.5 走来的 java.util.Date 、java.util.Calendar 、java.util.GregoiranCalendar 和 java.text.SimpleDateFormat 相信大家已经烂熟于心了，其中的弊端也是十分头疼：
1. 非线程安全：java.util.Date 并不是线程安全的。开发者在使用这个类时必须自己处理多线程并发问题。
2. 设计不佳 ：一方面日期和日期格式化分布在多个包中。另一方面，java.util.Date 的默认日期，年竟然是从 1900 开始，月从 1 开始，日从 0 开始，没有统一性。而且 Date 类也缺少直接操作日期的相关方法。
3. 时区处理困难：因为设计不佳，开发人员不得不编写大量代码来处理时区问题。

### 本地时间
Java 8 为处理本地的日期时间提供了三个类 LocalDate 、LocalTime 和 LocalDateTime。分别用于处理 本地日期、本地时间 和 本地日期时间。

```Java
// 返回当前的日期时间，默认使用的是操作系统的时区。
LocalDateTime currentTime = LocalDateTime.now();

// 时间切换
LocalDateTime currentTime = LocalDateTime.now();
LocalDate date1 = currentTime.toLocalDate();
LocalTime time1 = currentTime.toLocalTime();

// 当前月份
Month month = currentTime.getMonth();
// 当前月中的第几天
int day = currentTime.getDayOfMonth();
// 当前秒数
int seconds = currentTime.getSecond();
```

### 时区时间
ZonedDateTime 和 LocalDateTime 类似，几乎有着相同的 API。从某些方面说，ZonedLocalTime 如果不传递时区信息，那么它会默认使用操作系统的时区，这样，结果其实和 LocalDateTime 是类似的。

```Java
// 返回当前的日期时间
ZonedDateTime now = ZonedDateTime.now();
ZonedDateTime datetime = ZonedDateTime.parse("2012-10-10T21:58:00+08:00");

// 切换本地时间
LocalDate date = now.toLocalDate();
LocalTime time = now.toLocalTime();

// 获取当前时区
ZoneId currentZone = ZoneId.systemDefault();
```

### 格式化
Java 8 重新创建了一个 java.time.format 包，新增 DateTimeFormatter、DateTimeFormatterBuilder、FormatStyle 用于格式化日期时间。

```Java
// 格式化本地时间
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd H:m:s");
String text = now.format(formatter);
```
