---
star: true
category: 开源项目
tag:
  - JWT
  - Java
---

# JSON Web Tokens

## 前世今生

当我步入开发的第一个项目就已经用上了 Token 令牌鉴权的方式，可当时并不清楚这个在请求头添加的 Bearer 字符串是什么，在走进
Token 之前，我们应该从它的前身 Session 来开始讲起。

在早期的 Web 服务应用阶段，为了解决 HTTP 协议无状态的特性带来的用户认证和会话管理问题。在没有 Session
之前，服务器无法识别连续的多个请求是否来自同一个用户，因为HTTP协议本身并不维护用户的上下文状态。随着Web应用规模的扩大，尤其是分布式系统和微服务架构的兴起，Session
集中存储在一台服务器上的方式开始暴露出可扩展性和性能瓶颈。此外，跨域请求、CSRF攻击等问题也促使开发者寻找新的解决方案。

Token作为一种更轻量级、分布式的认证机制，因其无状态、易于跨域、支持分布式部署等特点而迅速普及，逐渐成为现代Web应用特别是API服务的首选认证方式。尤其是
JSON Web Token (JWT) 的兴起，它将用户信息加密到 Token 中，服务器无需查询数据库即可验证用户身份，这种特性使得它在微服务架构中特别有用，可以减少服务间通信的成本。

总的来说，Session 到Token 的转变反映了 Web 应用从中心化向分布式、从单一服务向微服务架构发展的趋势，也体现了安全性、可扩展性和用户体验之间平衡的不断优化。

## 核心概念

JWT（JSON Web Token）核心在于它的结构，由三部分组成，这些部分通过点('.')分隔，每一部分都是 Base64 URL 编码过的字符串，这三部分分别是：

1. Header（头部）: 令牌的类型（通常总是"typ"被设置为"JWT")和所使用的签名算法（如"alg"被设置为HS256）。例如：

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

2. Payload（有效载荷）: Payload 部分是 JWT 的核心，它包含声明（Claims），这些声明是关于实体（通常是用户）和其他数据的声明。Claims
   可以分为三种类型：

- Registered claims（注册声明）: 预定义的，不是强制性的，但建议使用的，如 iss（发行人）、exp（过期时间）、sub（主题）等。
- Public claims（公共声明）: 自定义的，可以添加任何不违反 JWT 标准的数据，但应该避免冲突。
- Private claims（私有声明）: 双方之间约定的声明，不公开也不建议第三方使用。 例如：

```json
{
  "sub": "主题内容",
  "name": "John Doe",
  "iss": "发行方",
  "exp": 1516239022,
  "admin": true
}
```

3. Signature（签名）: 签名部分是对前两部分（Header和Payload）的加密，用于验证 JWT 的完整性和确保它没有被篡改。签名是使用
   Header 中指定的算法和一个秘钥（对称或非对称）计算得出的。如果使用的是对称算法（如HMAC
   SHA256），则同一秘钥用于签名和验证；如果是非对称算法（如RSA），则使用私钥签名，公钥验证。

```card
title: JWT 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/backend/java/spring/spring-security/jwt.svg
link: https://jwt.io/
color: rgba(173, 216, 590, 0.15)
```

## JWT 简单场景案例

### 引入依赖

::: code-tabs
@tab Maven#Maven

```xml

<dependencies>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
    </dependency>

    <dependency>
        <groupId>javax.xml.bind</groupId>
        <artifactId>jaxb-api</artifactId>
    </dependency>

    <dependency>
        <groupId>com.sun.xml.bind</groupId>
        <artifactId>jaxb-impl</artifactId>
    </dependency>

    <dependency>
        <groupId>com.sun.xml.bind</groupId>
        <artifactId>jaxb-core</artifactId>
    </dependency>
</dependencies>
```

@tab Gradle#Gradle

```gradle
ext {
    jjwtVersion = '0.9.1'
}

dependencies {
    implementation 'io.jsonwebtoken:jjwt:$jjwtVersion' 
    implementation 'jakarta.xml.bind:jakarta.xml.bind-api:$jjwtVersion'
    implementation 'com.sun.xml.bind:jaxb-impl:$jjwtVersion'
    implementation 'com.sun.xml.bind:jaxb-core:$jjwtVersion'
}
```

:::

### JWT 工具类
这是一个简单的生成 JWT 的工具类，其中需要的参数都以静态参数的方式声明了，当然更建议将这些配置存放在 yaml 配置文件中，并且将密钥生成加密文件保存等更安全的方式，其载荷内的声明内容也可以更加丰富，这里我们只讨论 JWT 校验过程，故不做延伸。

::: normal-demo JWT 工具类
```
import com.alibaba.fastjson2.JSON;
import com.sbc.convention.exception.ServiceException;
import com.sbc.convention.pojo.dto.UserInfoDTO;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @description: JWT 工具类
 **/
@Slf4j
public class JWTUtil {

     /**
     * 过期时间
     */
    private static final long EXPIRATION = 86400L;
    /**
     * Token 前缀
     */
    public static final String TOKEN_PREFIX = "Bearer ";
    /**
     * 签发者
     */
    public static final String ISS = "songbaicheng";
    /**
     * 密钥
     */
    public static final String SECRET = "SecretKey039245678901232039487623456783092349288901402967890140939827";

    /**
     * 生成用户 Token
     *
     * @param userInfo 用户信息
     * @return 用户访问 Token
     */
    public static String generateAccessToken(UserInfoDTO userInfo) {
        Map<String, Object> claims = generateClaims(userInfo);
        return TOKEN_PREFIX + generateToken(claims);
    }

    /**
     * 验证用户 Token 的有效性
     *
     * @param jwtToken 用户访问 Token
     * @return 是否有效
     */
    public static boolean validateToken(String jwtToken) {
        if (StringUtils.hasText(jwtToken)) {
            String actualJwtToken = jwtToken.replace(TOKEN_PREFIX, "");
            try {
                Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(actualJwtToken).getBody();
                return validateTokenExpiration(claims);
            } catch (ExpiredJwtException ignored) {
                log.warn("JWT Token 已过期");
            } catch (Exception ex) {
                log.error("JWT Token 解析失败！", ex);
            }
        }
        return false;
    }

    /**
     * 解析用户 Token
     *
     * @param jwtToken 用户访问 Token
     * @return 用户信息
     */
    public static UserInfoDTO parseJwtToken(String jwtToken) {
        if (StringUtils.hasText(jwtToken)) {
            String actualJwtToken = jwtToken.replace(TOKEN_PREFIX, "");
            try {
                Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(actualJwtToken).getBody();
                if (validateTokenExpiration(claims)) {
                    return retrieveUserInfoFromClaims(claims);
                }
            } catch (ExpiredJwtException ignored) {
            } catch (Exception ex) {
                log.error("JWT Token 解析失败！", ex);
                throw new ServiceException("JWT Token 解析失败！");
            }
        }
        return null;
    }

    private static Map<String, Object> generateClaims(UserInfoDTO userInfo) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userInfo.getUserId());
        claims.put("username", userInfo.getUsername());
        claims.put("realName", userInfo.getRealName());
        return claims;
    }

    private static String generateToken(Map<String, Object> claims) {
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setIssuer(ISS)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION * 1000))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    private static boolean validateTokenExpiration(Claims claims) {
        Date expiration = claims.getExpiration();
        return expiration != null && expiration.after(new Date());
    }

    private static UserInfoDTO retrieveUserInfoFromClaims(Claims claims) {
        String subject = claims.getSubject();
        return JSON.parseObject(subject, UserInfoDTO.class);
    }
}

```
:::

### 校验 Token 过滤器
我们这里并不搭配 Spring Security 等权限框架，我们只需要校验请求头中携带的 Token 是否有效即可，这里有两种实现方式，分别是 AOP 和 Filter 过滤器，我们分别说一下这两种方式的优缺点。

- AOP (面向切面编程)：
  - 优点：
    1. 解耦性好：AOP 能够将横切关注点（如权限校验、日志记录等）从业务逻辑中分离出来，使代码更加清晰和模块化。
    2. 灵活性高：可以灵活地指定切入点（如指定特定方法或类），只在需要的地方执行拦截逻辑。
    3. 可读性强：通过注解的方式定义切面，使得代码意图更为明确，便于阅读和维护。
  - 缺点：
    1. 性能开销：虽然现代框架已经尽可能减少了 AOP 的性能影响，但在某些高并发场景下，动态代理可能会带来轻微的性能开销。
    2. 作用域限制：AOP主要针对业务逻辑层（如 Service 层），对于进入 Web 容器之前的请求处理（如静态资源、错误页面等）控制能力有限。
- Filter (过滤器)
  - 优点：
    1. 全面覆盖：Filter 可以拦截所有进出Web容器的请求和响应，包括静态资源、错误页面等，控制层面更广。
    2. 简单易用：相比 AOP，Filter 的配置和实现较为直观，容易上手，符合 Servlet 规范，不依赖特定框架。
    3. 性能高效：作为 Servlet 规范的一部分，Filter 在设计上就考虑了性能问题，对于纯请求过滤处理，性能损耗较低。
  - 缺点：
    1. 侵入性：Filter 需要在 Web.xml 或使用注解进行配置，对 Web 应用的结构有一定的侵入。
    2. 逻辑分散：随着应用复杂度增加，如果过多地使用Filter，可能会导致过滤逻辑分散在多个 Filter 中，不易管理和维护。
    3. 粒度较粗：Filter 通常针对整个请求/响应链路，难以精确到方法级别，不如 AOP 灵活。

根据以上的分析，结合现在大多数都高并发场景的情况，我们更推荐性能更优的 Filter 方式，虽然力度上不如 AOP 加校验注解的方式更灵活，可大部分项目的设计初衷都是除登录等白名单接口外，其余所有接口都应该进行校验。话不多说我们直接开始创建和注入过滤器。

::: normal-demo JWT 认证过滤器创建
```Java
import com.sbc.auth.toolkit.JWTUtil;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.util.StringUtils;

import java.io.IOException;

/**
 * @description: JWT 认证过滤器
 **/
public class JwtAuthenticationFilter implements Filter {

    @Override
    public void init(jakarta.servlet.FilterConfig filterConfig) throws ServletException {
        jakarta.servlet.Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        // 设置响应字符编码为 UTF-8
        httpResponse.setCharacterEncoding("UTF-8");

        String requestURI = httpRequest.getRequestURI();
        if (!requestURI.endsWith("/login")) {
            // 获取请求头 Token
            String token = getJwtFromRequest(httpRequest);
            if (token == null) {
                // 如果没有携带 Token，返回 401 错误
                httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                httpResponse.getWriter().write("未携带 Token");
                return;
            }
            // 如果 Token 无效，也返回 401 错误
            if (!JWTUtil.validateToken(token)) {
                httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                httpResponse.getWriter().write("Token 已失效，请重新登录获取新 Token");
                return;
            }
        }

        chain.doFilter(request, response);
    }


    /**
     * 获取请求头 Token 凭证
     *
     * @param request 请求信息
     * @return Token 令牌
     */
    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}

```
:::
::: normal-demo JWT 认证过滤器注入
```Java
import com.sbc.auth.filter.JwtAuthenticationFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

/**
 * @description: Spring Security 配置类
 **/
@Configuration
public class AuthConfig {

    @Bean
    public FilterRegistrationBean<JwtAuthenticationFilter> jwtFilter() {
        FilterRegistrationBean<JwtAuthenticationFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new JwtAuthenticationFilter());
        registrationBean.addUrlPatterns("/api/*");
        return registrationBean;
    }
}
```
:::
### 生成令牌和携带令牌
正如我们过滤器中的规则，除了请求路径结尾为 ```/login``` 并且匹配  ```/api/*``` 的请求都会在请求头中校验 ```Authorization``` 字段携带的 Token，我们的前端请求使用 Axios 配置如下：

::: normal-demo Axios 配置
```typescript
import { ElMessage } from 'element-plus'
import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { useAuthStore } from '@/stores/authStore'

const axiosInstance: AxiosInstance = axios.create({
  timeout: 10000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {

    // 为确保 pinia 实例被激活，最简单的方法就是将 useStore() 的调用放在 pinia 安装后才会执行的函数中。
    // https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html
    const authStore = useAuthStore()

    const token: string | null = authStore.authState.token
    if (token) {
      config.headers.Authorization = `${token}`
    }
    return config
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在这里可以对响应进行处理
    if (response.status === 401) {
      ElMessage.error('用户未登录或已过期！')
      window.location.href = 'login'
    }
    return response
  },
  (error: AxiosError) => {
    // 对响应错误做些什么
    console.log(error, 'error')
    if (error.response && error.response.status === 401) {
      ElMessage.error('用户未登录或已过期！')
      window.location.href = 'login'
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
```
:::

而在后端的登录逻辑里，我们则是调用 JWT 工具类中的生成方法返回给前端存放在全局事件总线中，这样完整的一套基础的 JWT 校验就完成了。