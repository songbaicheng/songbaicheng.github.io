# Spring Boot Admin
## 介绍
Spring Boot Admin是一个用于管理和监控 Spring Boot 应用程序的开源项目。它提供了一个用户界面，可以集中管理多个 Spring Boot 应用程序，并提供有关这些应用程序的详细信息和指标。

其模式也和 Eureka 相同分为客户端和服务端相同，主要功能如下：

- 应用程序监控：Spring Boot Admin 可以监控和展示每个 Spring Boot 应用程序的运行状态、健康状况和指标数据，如内存使用、线程数、请求统计等。
- 健康检查和管理：它提供了对Spring Boot应用程序的健康检查功能，并可以根据应用程序的健康状况采取相应的管理措施，如重启应用程序或发送警报通知。
- 易于集成：Spring Boot Admin可以轻松集成到现有的Spring Boot应用程序中，只需添加相应的依赖并进行简单的配置即可。
- 实时日志查看：它提供了实时查看应用程序日志的功能，可以帮助开发人员快速定位和解决问题。
- 事件通知：Spring Boot Admin 支持通过邮件、Slack等方式发送事件通知，如应用程序上线、下线、健康状态变更等。
- 安全性：它提供了一些安全特性，如基于角色的访问控制、HTTPS支持等，以确保管理界面的安全性。

Spring Boot Admin 可以选择和服务注册中心搭配使用，当与服务注册中心配合使用时，它可以自动发现注册在服务注册中心中的 Spring Boot 应用程序，并将其添加到管理界面中进行监控和管理。这样可以实现动态管理多个应用程序，并且随着应用程序的启动和关闭，管理界面能够及时更新应用程序的状态和信息。

另外 Spring Boot Admin 和 Spring Boot Actuator 可以很好地配合使用。通过在Spring Boot应用程序中集成 Spring Boot Actuator，可以使 Spring Boot Admin 能够获取应用程序的详细信息和指标数据，从而在管理界面上展示和监控这些数据。同时，Spring Boot Admin 还可以利用 Spring Boot Actuator 提供的功能，如远程 Shell、线程转储等，与应用程序进行交互和管理。因此，Spring Boot Admin 和 Spring Boot Actuator是相互配合使用的，Spring Boot Actuator 提供了监控和管理的基础功能，而 Spring Boot Admin 提供了一个集中管理和监控的用户界面，通过与 Spring Boot Actuator 端点的交互，实现对多个 Spring Boot 应用程序的管理和监控。

## 快速开始


### 服务端
#### 引入依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>de.codecentric</groupId>
    <artifactId>spring-boot-admin-starter-server</artifactId>
</dependency>
```

#### 简单配置
启动类增加```@EnableAdminServer```注解，启动后访问项目根目录即自动跳转服务端界面。

![Spring Boot admin 主页](/assets/images/study/backend/java/spring-cloud-alibaba/spring-boot-admin/admin-home.png "Spring Boot admin 主页")

### 客户端
#### 引入依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>de.codecentric</groupId>
    <artifactId>spring-boot-admin-starter-client</artifactId>
</dependency>
```

#### 简单配置
```yml
spring:
  boot:
    admin:
      client:
        url: http://localhost:8110/ # spring boot admin server 地址

management:
  endpoints:
    web:
      exposure:
        include: '*' # 暴露给监控全部接口
```
![客户端服务注册](/assets/images/study/backend/java/spring-cloud-alibaba/spring-boot-admin/admin-wallboard.png "客户端服务注册")

![客户端服务详情](/assets/images/study/backend/java/spring-cloud-alibaba/spring-boot-admin/admin-details.png "客户端服务详情")