# Spring Security
## 介绍
官方的解释是 Spring Security 是一个提供身份验证、授权和防止常见攻击的框架，正如它说的那样，其核心功能就是 **_认证_** 和 **_授权_**。

- 认证（Authentication）：系统确认一个用户的身份是否真实、合法。
- 授权（Authorization）：系统对用户进行的访问控制，即通过了认证后用户对资源的访问限制。

目前提到安全框架，Shiro 和 Spring Security 算得上是分庭抗争了，并且 Shiro 主打的是简单、轻量，但却没有 Spring Security 灵活，并且我们如果使用 Spring 框架的话，学习 Spring Security 更是如鱼得水，并且是重中之重。如果想要更加深入的了解 Spring Security ，请预览下面官方文档的链接进行研读。

> https://spring.io/projects/spring-security

## 快速开始
### 引入依赖
```gradle
implementation 'org.springframework.boot:spring-boot-starter-security'
```
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### 简单配置启动

```yml
spring:
  security:
    user:
      name: user # 用户名
      password: songbaicheng # 密码
```

项目启动后随便访问一个路径就会跳转到自带的 /login 窗口进行登录。如果不指定用户名和密码，用户名默认是 ```user```，密码会在项目启动的时候生成一个 UUID 在控制台打印出来。