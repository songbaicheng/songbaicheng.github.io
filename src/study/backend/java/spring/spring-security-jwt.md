---
star: true
category: Spring Boot
tag: 
  - Spring Security
  - JWT
---

# Spring Security + JWT
## 前言
说到 JWT（JSON Web Token），我们首先要知道 Token 是什么，想要知道 Token 是什么，我们就得先谈一下早期 Session 登录的时代，下面是之前 Session 登录的大致流程。

```flow
start=>start: 开始
one=>operation: 用户通过表单或其他方式提交用户名和密码
two=>operation: 服务器接收到登录请求，验证用户提供的用户名和密码是否有效
isAccounPasswordCorrected=>condition: 账号密码是否正确?
end-err=>end: 账号密码错误
three=>operation: 服务器会为该用户创建一个唯一的会话标识符（Session ID）
four=>operation: 服务器将该会话标识符存储在服务器端，通常保存在内存中或持久化到数据库中
five=>operation: 服务器将会话标识符发送回客户端，通常通过设置一个名为"JSESSIONID"的 Cookie
six=>operation: 客户端收到会话标识符后，将其保存在客户端的 Cookie 中
seven=>operation: 客户端之后的每个请求都会自动附带会话标识符，通常通过 Cookie 或其他方式（如 URL 参数）
eight=>operation: 服务器在接收到请求时，会根据会话标识符查找对应的会话信息
isSessionValid=>condition: 会话是否有效?
nine=>operation: 服务器将请求视为已经通过身份验证
ten=>operation: 服务器要求用户重新进行身份验证或重定向到登录页面
end-all=>end: 结束

start->one
one->two
two->isAccounPasswordCorrected
isAccounPasswordCorrected(yes)->three
isAccounPasswordCorrected(no)->end-err->end-all
three->four
four->five
five->six
six->seven
seven->eight
eight->isSessionValid
isSessionValid(yes)->nine->end-all
isSessionValid(no)->ten->end-all
```

然而，随着应用程序的复杂性和扩展性的增加，分布式系统和跨服务的场景变得更加常见。在这种情况下，使用基于 Session 会话的登录可能会面临一些挑战，例如会话状态的同步和跨服务的会话管理。而且如果 Cookie 如果被截获，用户就会很容易受到跨站请求伪造（CSRF）的攻击。于是令牌（Token）应运而生，Token 承载了用户身份信息和其他必要的声明，无需在服务器端存储会话信息，使其具备了无状态性（stateless）的特性。这样可以减轻服务器的负担，并且适用于分布式环境和跨服务的场景。基于这种特性 Token 的登录过程如下所示。

```flow
start=>start: 开始
one=>operation: 用户通过表单或其他方式提交用户名和密码
two=>operation: 服务器接收到登录请求，验证用户提供的用户名和密码是否有效
isAccounPasswordCorrected=>condition: 账号密码是否正确?
end-err=>end: 账号密码错误
three=>operation: 服务器会生成一个令牌（Token），包含用户身份信息和其他必要的声明（例如权限、过期时间等）并保存在缓存服务器（Redis）中
four=>operation: 服务器将令牌返回给客户端，通常通过响应的数据体中的字段或特定的响应头部
five=>operation: 客户端收到令牌后，将其保存在客户端（通常是本地存储或 Cookie）
six=>operation: 客户端之后的每个请求都会将令牌作为身份验证凭据附加在请求中，通常通过请求头部的 Authorization 字段
seven=>operation: 服务器在接收到请求时，会验证令牌的有效性和真实性
isSessionValid=>condition: 令牌信息是否有效?
eight=>operation: 服务器将请求视为已经通过身份验证
nine=>operation: 服务器要求用户重新进行身份验证或拒绝请求
end-all=>end: 结束

start->one
one->two
two->isAccounPasswordCorrected
isAccounPasswordCorrected(yes)->three
isAccounPasswordCorrected(no)->end-err->end-all
three->four
four->five
five->six
six->seven
seven->isSessionValid
isSessionValid(yes)->eight->end-all
isSessionValid(no)->nine->end-all
```

虽然看似流程上十分相似，但是每个请求都必须携带包含了所有必要的用户身份信息和声明的令牌来进行身份验证，而且令牌可以通过签名和加密机制来保护身份信息的完整性和真实性，这样极大的保证了安全性的同时也解决了跨域支持的问题。JWT 官网也告诉了我们什么是 JSON Web Token 并告诉我们什么情况下可以去使用它，如果有兴趣可以点击下面链接去深入了解。

```card
title: JWT 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/backend/java/spring/spring-security/jwt.svg
link: https://jwt.io/
color: rgba(173, 216, 590, 0.15)
```

## 快速开始
### 引入依赖

::: code-tabs
@tab Maven#Maven
```xml
<properties>
    <jjwt.version>0.11.5</jjwt.version>
</properties>

<dependencies>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-api</artifactId>
        <version>${jjwt.version}</version>
    </dependency>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-impl</artifactId>
        <version>${jjwt.version}</version>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-jackson</artifactId>
        <version>${jjwt.version}</version>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```
@tab Gradle#Gradle
```gradle
ext {
    jjwtVersion = '0.11.5'
}

dependencies {
    implementation "io.jsonwebtoken:jjwt-api:$jjwtVersion"
    runtimeOnly "io.jsonwebtoken:jjwt-impl:$jjwtVersion"
    runtimeOnly "io.jsonwebtoken:jjwt-jackson:$jjwtVersion"
}
```
:::

### 系统参数配置和读取
::: normal-demo jwt 所需系统参数和读取代码
```yaml
jwt:
  secret: jwt:
  secret: 650e387e-d8ba-43cd-9237-a9274a675f7b # 与HMAC-SHA算法一起使用的密钥必须具有>=256位的大小
  expiration: 3600 # 设置为令牌的有效期时间（单位：秒）
```
```java
@Setter
@Getter
@Configuration
@ConfigurationProperties(prefix = "jwt")
public class JwtConfig {

    /**
     * 密钥
     */
    private String secret;

    /**
     * 过期时间
     */
    private long expiration;
}
```
:::

### 工具类方法
::: normal-demo jwt 工具类生成 Token 代码
```java
package com.sbc.boot3.utils;

import com.sbc.boot3.config.JwtConfig;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtUtils {

    private final JwtConfig jwtConfig;

    /**
     * 定义系统标识头常量
     */
    private static final String HEADER_SYSTEM_KEY = "JWT";

    /**
     * 根据用户ID生成JWT
     *
     * @param username 用户名
     * @return JWT
     */
    public String generateToken(String username) {
        return Jwts.builder()
                .setExpiration(generateExpirationDate())
                .setSubject(username)
                .signWith(Keys.hmacShaKeyFor(jwtConfig.getSecret().getBytes(StandardCharsets.UTF_8)))
                .compact();
    }

    /**
     * 生成token的过期时间
     */
    private Date generateExpirationDate() {
        return new Date(System.currentTimeMillis() + jwtConfig.getExpiration() * 1000);
    }
}
```
:::

### 请求获取 Token
::: normal-demo 请求 Token 方法代码
```java
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final JwtUtils jwtUtils;

    /**
     * 生成token
     * @param user 用户信息
     * @return Token
     */
    @PostMapping("/token")
    public ResponseEntity<String> authenticateUser(@RequestBody SecurityUser user) {

        String token = jwtUtils.generateToken(user.getUsername());

        return ResponseEntity.ok(token);
    }
}
```
:::

### Token 解码
拿到 Token 之后可以去官网解码查看生成的内容是否正确。

![Token 解码](/assets/images/study/backend/java/spring/spring-security-jwt/jwt-decode.png "Token 解码")

## 走进 JWT
在官网我们可以看到对 JWT 的介绍也不算很多，知道它是一种用于在网络应用间安全传递信息的开放标准（RFC 7519），通过使用数字签名或加密方式，可以将声明式的JSON数据进行安全地传输。而对我开发有帮助的是我们需要知道 JWT 是有三个部分组成的：头部（Header）、载荷（Payload）和签名（Signature），现在我们重点说说这三个部分：

### 头部（Header）
头部通常由两部分组成：令牌类型（typ）和签名算法（alg）。这些信息被用于描述JWT的类型和所采用的签名算法。头部使用JSON对象表示，并且需要通过Base64编码进行传输。

```json
{
  "typ": "JWT",
  "alg": "HS256"
}
```

### 载荷（Payload）
载荷部分包含了JWT的声明信息，它是存储实际数据的地方。载荷也是一个JSON对象，并且需要通过Base64编码进行传输。载荷包含了一些预定义的声明（Claim），以及可以自定义的声明。预定义的声明包括了一些标准的声明名称，如iss（签发者）、sub（主题）、exp（过期时间）、iat（签发时间）等。

```json
{
  "sub": "topic",
  "name": "John Doe",
  "admin": true,
  "exp": 1688283529
}
```

### 签名（Signature）
签名部分是对头部和载荷进行数字签名的结果，以确保JWT的完整性和真实性。签名通过使用头部中指定的算法和密钥进行生成。签名可以帮助验证JWT是否被篡改过。我们看到的签名部分是将Base64编码的头部和Base64编码的载荷通过某种方式（如使用"."进行连接）组合成一个字符串，然后使用指定的签名算法和密钥对这个字符串进行签名生成签名值形成的。

```json
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

### 搭配 Spring Security
