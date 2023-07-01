---
category: 微服务
tag: 
  - Spring Cloud Alibaba
  - Java
  - Gateway
---

# Gateway
## 浅聊微服务网关
网关是一个通用的概念，它在计算机网络中指的是在不同网络之间进行连接、转发和控制流量的设备或软件。而微服务网关我们通用的理解是统一对外暴露可共享的服务 API 的功能，一般这些微服务网关都与服务注册中心相配合使用，这里我们要谈的 Spring Cloud Gateway 是基于 Spring Boot 和 Spring WebFlux 构建的网关框架。它提供了一种简单、轻量级的方式来处理路由、过滤和负载均衡。Spring Cloud Gateway 还支持动态路由、断路器、限流等功能，并与 Spring Cloud 生态系统无缝集成，具体详情见其官网文档。

```card
title: Gateway 官网文档
desc: 点击跳转官网查看详细内容
logo: /assets/common-icon/spring-initializr.svg
link: https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#gateway-starter
color: rgba(173, 216, 590, 0.15)
```

## 快速开始
### 项目依赖

```java
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

### 简单的网关实例配置
```yml
spring:
  cloud:
    gateway:
      discovery:
        locator:
          enabled: true # 启用了服务发现功能
          lower-case-service-id: true # 将服务ID转换为小写形式
```

添加以上配置的网关服务就可以发现服务注册中心的其他服务并进行相应的定位和路由设置，在请求该网关服务后加上实例名称和接口即可实现点对点通讯。