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

# Java 11 新特性
Java 11 是继 Java 8 之后的第一个 LTS 长期支持功能版本。

```mindmap
root((Java 11 新特性))
  标准HttpClient
  免编译启动
  增强String的API
  集合转换为数组
  Predicate 接口
  var 变量
  嵌套类
```

## 标准HttpClient
Java 9 中引入了增强的 HttpClient API 作为实验性功能。在 Java 11 中，现在 HttpClient 是一个标准。建议使用 Apache Http Client API 等其他 HTTP Client API 代替。它的功能非常丰富，现在基于 Java 的应用程序可以在不使用任何外部依赖的情况下发出 HTTP 请求。

```Java
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class APITester {
   public static void main(String[] args) {
      HttpClient httpClient = HttpClient.newBuilder()
         .version(HttpClient.Version.HTTP_2)
         .connectTimeout(Duration.ofSeconds(10))
         .build(); 
         try {
            HttpRequest request = HttpRequest.newBuilder()
            .GET()
            .uri(URI.create("https://www.baidu.com"))
            .build();                              
            HttpResponse<String> response = httpClient.send(request,
            HttpResponse.BodyHandlers.ofString()); 

         System.out.println("Status code: " + response.statusCode());                            
         System.out.println("Headers: " + response.headers().allValues("content-type"));
         System.out.println("Body: " + response.body());
      } catch (IOException | InterruptedException e) {
         e.printStackTrace();
      }
   }
}
```

## 免编译启动
```shell
$ java Test.java
Hello World!
```

## 增强 String 的 API
```Java
String.repeat(int) ： 重复给定次数的字符串。返回连接的字符串。
String.isBlank() ：检查字符串是否为空或只有空格。
String.strip() ： 删除前导和尾随空格。
String.stripLeading() ： 删除前导空格。
String.stripTrailing() ： 删除尾随空格。
String.lines() ： 返回多行字符串的行流。
```

## 集合转换为数组
```Java
import java.util.Arrays;
import java.util.List;

public class APITester {
   public static void main(String[] args) {		
      List<String> namesList = Arrays.asList("Joe", "Julie");
      
      // Old way
      String[] names = namesList.toArray(new String[namesList.size()]);
      
      // New way
      names = namesList.toArray(String[]::new);
   }
}
```

## Predicate 接口
Java 11 向 Predicate 接口引入了新方法 not() 来否定类似于 negate 方法的现有谓词。

```Java
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class APITester {
   public static void main(String[] args) {		
      List<String> tutorialsList = Arrays.asList("Java", "\n", "HTML", " ");

      List<String> tutorials = tutorialsList.stream()
         .filter(Predicate.not(String::isBlank))
         .collect(Collectors.toList());

      tutorials.forEach(tutorial -> System.out.println(tutorial));
   }
}
```

## var 变量
Java 11 允许在 lambda 表达式中使用 var，它可用于将修饰符应用于局部变量。

```Java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@interface NonNull {}

public class APITester {
   public static void main(String[] args) {		
      List<String> tutorialsList = Arrays.asList("Java", "HTML");

      String tutorials = tutorialsList.stream()
         .map((@NonNull var tutorial) -> tutorial.toUpperCase())
         .collect(Collectors.joining(", "));

      System.out.println(tutorials);
   }
}
```
