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
Java 17 是继


```mindmap
root((Java 17 新特性))
  文本块
  switch 表达式
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
