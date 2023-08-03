---
category: 工作任务
tag: 
  - Web Service
  - Java
---

# Web Service
## 浅聊 Web Service
刚来公司的时候有些项目请求并不是用 Postman 发送 Http 请求，而是用 SoapUI 的工具发送 XML 请求，当时面对那个老旧版本的工具和我个人非常嫌弃的 XML 我直接从头到脚就是抵触，后来我才知道这个东西叫 Web Service。现在用 Web Service 的还多吗，当然是不多，Apache 官网维护的 Web Service 最后一次更新还是在2015年10月，传输 XMl 速度也慢，只能说现在肯定是基于 Http 的 Json 的天下。

那 Web Service 到底是干什么的呢？它是一种跨编程语言和操作系统平台的远程调用技术，能使得运行在不同机器上的不同应用无须借助附加的、专门的第三方软件或硬件就可相互交换数据或集成。仔细想想只要能暴露接口，用 Json 不是更香，而且实现 Web Service 还得适配 SOAP 协议，实用性就更低了。

## Web Service 三要素
从表面看，Web Service 就是一个应用程序向外界暴露出一个能通过Web进行调用的API，也就是说能用编程的方法通过 Web 来调用这个应用程序。我们把调用的应用程序叫做客户端，而把提供的应用程序叫做服务端。Web Service 不是一种技术，更像是建立在可互操作的分布式应用程序的新平台，是一个平台，是一套标准，是一种规范。它定义了应用程序如何在 Web 上实现互操作性，而实现这项技术离不开下面介绍的 UDDI，WSDL，SOAP 这三个元素：

### UDDI
一种用于描述、发现、集成 Web Service 的技术，它是 Web Service 协议栈的一个重要部分。通过UDDI，企业可以根据自己的需要动态查找并使用Web服务，也可以将自己的Web服务动态地发布到UDDI注册中心，供其他用户使用。

### WSDL
为了描述 Web 服务发布的XML格式。就是用机器能阅读的方式提供的一个正式描述文档而基于XML（标准通用标记语言下的一个子集）的语言，用于描述 Web Service 及其函数、参数和返回值。

### SOAP
简单对象访问协议，是交换数据的一种协议规范，是一种轻量的、简单的、基于XML标准通用（标记语言下的一个子集）的协议。主要组成由 Http 协议和 XML 数据格式。Web Service 通过 HTTP 协议发送请求和接收结果时，发送的请求内容和结果内容都采用 XML 格式封装，并增加了一些特定的 HTTP 消息头，以说明 HTTP 消息的内容格式，这些特定的 HTTP 消息头和 XML 内容格式就是 SOAP 协议。SOAP 提供了标准的RPC(远程调用技术)方法来调用Web Service。

了解了这三个元素是什么我们就可以知道 Web Service 主要是通过 SOAP 协议在 Web 上提供的软件服务，使用WSDL 文档进行描述说明服务，并通过 UDDI 进行注册服务供客户端调用。

## Web Service 规范
目前有三种规范：JAX-WS（Java API for XML-Based Web Service）、JAXM（Java API for XML Message）、JAX-RS（RESTful 风格）。

JAX-WS 是用于构建 SOAP 风格的 Web 服务，而 JAX-RS 是用于构建 RESTful 风格的 Web 服务。在这里还是选择前者进行展开，毕竟使用 RESTful 风格的项目较少，因为如果使用 RESTful 风格就都加入 Json 的怀抱了。

在服务端，用户只需要通过 Java 语言定义远程调用所需要实现的接口（SEI：Service EndPoit Interface），并对其提供相关的实现，通过调用 JAX-WS 的服务来发布接口就可以发布为Web Service 接口。

在客户端，用户可以通过 JAX-WS 的 API 来创建一个代理来（用本地代理对象来替代远程的服务对象）实现远程服务端的调用。（在使用 JAX-WS 生成远程服务端的代理可以使用 JDK 自带的 wsimport命令来自动生成）。

## 快速开始
> 所有的测试代码都在博客[首页](/README.md)中的 java-study-demo 中找到。
> 注：使用 JDK 17 时发现注解已经被弃用，下面代码建议使用 JDK 8。

### 1. 创建 Web 服务
::: normal-demo Web Service 服务端
```java
/**
 * @ClassName MyCalculator
 * @Description 简单的加法计算器
 */
@WebService
public class MyCalculator {

    @WebMethod
    public int add(int a, int b) {
        return a + b;
    }
}
```
```java
/**
 * @ClassName WebServiceSeverMain
 * @Description Web Service 服务主函数
 */
public class WebServiceSeverMain {

    public static void main(String[] args) {

        // 定义Web服务的地址
        String url = "http://localhost:8080/calculator";

        // 创建Calculator对象
        MyCalculator calculator = new MyCalculator();

        // 发布Web服务
        Endpoint.publish(url, calculator);

        System.out.println("Web服务已发布，访问地址: " + url + "?wsdl");
    }
}
```
:::

### 2. 访问 wsdl 文件
![wsdl文件](/assets/images/work-task/development/web-service/wsdl.png "wsdl文件")

### 3. 生成客户端代码
#### 使用 JDK 自带的 wsimport 命令

```
wsimport -d /todir bin http://localhost:8080/calculator?wsdl
```
![wsimport用法](/assets/images/work-task/development/web-service/wsimport.png "wsimport用法")

![生成客户端结构](/assets/images/work-task/development/web-service/wsdl-generated.png "生成客户端结构")

#### IDE 工具生成客户端
一般 IDE 都带有解析 wsdl 文件的 Tools，像 IntelliJ IDEA 、Eclipse。需要你把网页请求的 XML 存储为后缀为 .wsdl 的文件后解析，非常简单就不做赘述了。

### 4. 使用客户端
将生成的 Java 代码放到客户端项目中，然后调用代理类就可以进行数据访问了，请求时一定要保证服务端正常开启。

::: normal-demo Web Service 客户端
```java
/**
 * @ClassName WebServiceCLientMain
 * @Description Web Service 客户端主函数
 */
public class WebServiceCLientMain {

    public static void main(String[] args) {
        MyCalculatorService service = new MyCalculatorService();
        MyCalculator port = service.getMyCalculatorPort();

        int num1 = 10;
        int num2 = 20;
        int result = port.add(num1, num2);

        System.out.println("Result of adding " + num1 + " and " + num2 + " is: " + result);
    }
}
```
:::