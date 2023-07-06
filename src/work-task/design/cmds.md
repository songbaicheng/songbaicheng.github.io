---
star: true
category: 工作任务
tag: 
  - Java
  - Spring Boot
---

# 重构接收价格前置项目
## 引言
没想到，重构这个项目的原因居然是公司开始不再使用 Tomcat 部署项目，想把之前的 war 包启动的项目都换成 jar 包部署。之前的前置项目大部分都都是“远古时期”流传下来的“毒瘤”，纯 Java 项目，各种 Thread 满天飞，规范什么的就更别提了，为了追赶上线进度，我们先使用了 tomcat-embed 模块实现 Java 内置 Tomcat 启动，核心代码如下：

```java
public class Main {
    public static void main(String[] args) throws Exception {
        String webappDirLocation = "src/main/webapp";
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(8080);
        tomcat.addWebapp("/", new File(webappDirLocation).getAbsolutePath());
        tomcat.start();
        tomcat.getServer().await();
    }
}
```

虽然这样可以脱离 Tomcat 部署，但是肯定不是长远之计，所以重构的任务就落到了我的身上，其实在我看来这些老项目还是应该尽早维护，趁着了解业务的人都还在和项目并不复杂的时候，尽早规范统一起来才是正途。虽然这些前置项目平时都不是我负责，但是多多少少上线和联调的时候也都接触过，并说不上陌生，而且业务也不负责，话不多说直接开始。

## 重构思路
### 框架选型
价格接收转发前置项目，这是一个接收交易所价格并转发给多个后台的纯后台项目，几乎没有什么逻辑处理，就是是充当透传的作用，所以我们采用 Spring Boot 来选择重构。由于只是转发价格，并不作存储作用，所以我们并不会牵扯到数据持久化的问题，不会用到数据库。往后台项目推送价格有使用 MQ 交互的，也有用 Socket 通信的，MQ 这里我们只能使用公司在用的 IBM MQ，Socket 我们就继续原来使用了 Java 原生的 Socket 类实现。置于其他的知识点就放在下面一一介绍了。

### 业务梳理
业务流程就是在工作日时将所需要的产品价格从交易所获取并转发给报价平台、K线平台和日终价格三个后台项目。

与交易所建立通讯之后，通过接口会一直受到价格，并且连接建立之后并不会主动断开，除非遇到网络等特殊情况，如果发生断联则触发重连策略。而所收到的价格并不是随时并且全部都发送，因为有些产品的价格是我们不需要的，但是又不确定对方发送的产品价格是固定的，所以我们将自己定义的工作日和所需产品价格。而所需数据的后台项目有新有旧，所以对接价格的接口实现还需要和后台一致。

```flow
start=>start: 启动项目
one=>operation: 尝试与交易所建立连接
isConn=>condition: 是否建立连接
isSend=>condition: 价格是否需要发送
transfer=>operation: 对接后台准备发送
sub=>subroutine: 后台程序

start->one
one(right)->isConn
isConn(yes, right)->isSend
isConn(no, top)->one
isSend(yes, right)->transfer
transfer(right)->sub
```

## 具体实现
### 1.配置
