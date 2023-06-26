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
