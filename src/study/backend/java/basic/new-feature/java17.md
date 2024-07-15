---
star: true
category: Java 基础
tag:
  - Java 17 新特性
  - Optional
  - Lambda 表达式
  - 函数式接口
  - Stream API
---

# Java 17 新特性
Java 17 是Java平台的一个重要版本，于2021年9月14日正式发布，与Java 8相比，Java 17带来了更多的新特性和改进，尤其是在性能和安全性方面。

```mindmap
root((Java 17 新特性))
  文本块
  switch 表达式
  Record
  密封类 sealed class
  instanceof 模式匹配
```

## 文本块
在 17 版本之前定义 JSON 字符串方式如下：

```Java
public void lowVersion() {
    String text = "{\n" +
        "  \"name\": \"小黑说Java\",\n" +
        "  \"age\": 18,\n" +
        "  \"address\": \"北京市西城区\"\n" +
        "}";
    System.out.println(text);
}
```

在 17 版本之后，可以使用文本块来定义 JSON 字符串，通过三个双引号可以定义一个文本块，并且结束的三个双引号不能和开始的在同一行。

```Java
private void highVersion() {
    String text = """
            {
              "name": "小黑说Java",
              "age": 18,
              "address": "北京市西城区"
            }
            """;
    System.out.println(text);
}
```

## switch 表达式
在 17 版本之前，switch 语句中只能使用 break 来终止，否则会继续执行下一个 case 语句。在 17 版本之后，switch 语句中可以使用 yield 来返回一个值，并且不需要 break 来终止，并且支持箭头函数写法。

```Java
private static void withYield(Fruit fruit) {
    String text = switch (fruit) {
        case APPLE, PEAR -> {
            System.out.println("给的水果是: " + fruit);
            yield "普通水果";
        }
        case MANGO, AVOCADO -> "进口水果";
        default -> "未知水果";
    };
    System.out.println(text);
}
```
## Record
Record类的主要特点是它只包含一些只读的成员变量（这些变量在Record类中被自动声明为final）以及一个或多个构造函数。Record类的目标是简化创建不可变类的过程，并解决Java中语义模型不一致的问题，有以下特点 
- 不可变性：Record类中的所有成员变量都是final的，这意味着一旦对象被创建，其状态（即数据）就不能被改变。这种特性为开发者带来了许多好处，如更简单的并发编程模型和更好的数据一致性保证。
- 简洁的语法：使用Record类，开发者无需手动编写getters、equals()、hashCode()和toString()方法。编译器会自动为Record类生成这些方法，从而减少了代码的冗余，提高了代码的可读性和清晰度。
- 不支持继承：Record类是final的，因此不能被其他类继承。这意味着Record类提供了一种简洁的方式来定义不可变的数据结构，同时避免了继承可能带来的复杂性和不确定性。

```Java
public record Employee(String name, int age, String department) {
    // 这里不需要编写任何方法，因为Record会自动为我们生成
}

// 使用
Employee alice = new Employee("Alice", 25, "HR");
System.out.println(alice); // 输出类似于 Employee[name=Alice, age=25, department=HR]
```

## 密封类 sealed class
sealed class 允许你限制一个类或接口的子类，只有指定的类或接口才能继承。

```Java
public sealed class Fruit permits Apple, Pear {
}
public final class Apple extends Fruit {
}
public final class Pear extends Fruit {
}
```

## instanceof 模式匹配
instanceof 模式匹配允许开发者使用 instanceof 运算符来检查一个对象是否属于某个类型，并返回一个布尔值。

```Java
private static void oldStyle(Object o) {
    if (o instanceof Furit) {
        Furit furit = (GrapeClass) o;
        System.out.println("This furit is :" + furit.getName);
    }
}

// 使用后
private static void newStyle(Object o) {
    if (o instanceof Furit furit) {
        System.out.println("This furit is :" + furit.getName);
    }
}
```

