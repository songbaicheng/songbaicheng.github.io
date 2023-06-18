# Spring Security
## 介绍
目前提到安全框架，Shiro 和 Spring Security 算得上是分庭抗争了，并且 Shiro 主打的是简单、轻量，但却没有 Spring Security 灵活，在 Spring Security 支持 OAuth2 之后更加贴合当前社会需求，并且我们如果使用 Spring 框架的话，学习 Spring Security 更是如鱼得水，并且是重中之重。如果想要更加深入的了解 Spring Security ，请预览下面官方文档的链接进行研读。

> https://spring.io/projects/spring-security

官方的解释是 Spring Security 是一个提供身份验证、授权和防止常见攻击的框架，正如它说的那样，其核心功能就是 **_认证_** 和 **_授权_**。

- 认证（Authentication）：系统确认一个用户的身份是否真实、合法。
- 授权（Authorization）：系统对用户进行的访问控制，即通过了认证后用户对资源的访问限制。

Spring Security 的重点是对所有进入系统的请求进行拦截，校验其是否可以访问其所期望的资源。而 Spring Security 对于 Web 资源的保护都是通过 Filter 进行保护的，而这些 Filter 都是通过注入到 Spring 容器中的 SecurityFilterChain 过滤器链来实现的，

![Spring Security 流程图](/assets/images/study/backend/java/spring-boot/spring-security/spring-security-process.png "Spring Security 流程图")

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

## 简单配置启动

```yml
spring:
  security:
    user:
      name: user # 用户名
      password: songbaicheng # 密码
```

项目启动后随便访问一个路径就会跳转到自带的 /login 窗口进行登录。如果不指定用户名和密码，用户名默认是 ```user```，密码会在项目启动的时候生成一个 UUID 在控制台打印出来。

### 配置登录用户
Spring Security 提供了基于内存和持久化两种添加用户的方式，工作中常用的当然是选择持久化的方式居多，外加基于持久化的方式加 ORM 框架新增总共三种方式实现，进行下面几种测试点的时候，一定要注意只能同时存在一种添加用户的方式，如果存在的方式过多则会存在异常。

#### 基于内存添加用户

```java
@Configuration
public class SecurityConfig {

    @Bean
    public InMemoryUserDetailsManager inMemoryUserDetailsManager () {

        UserDetails userDetails1 = User.withUsername("songbaicheng").password("{noop}songbaicheng").roles("role1").build();
        UserDetails userDetails2 = User.withUsername("songbaicheng1").password("{noop}songbaicheng").roles("role2").build();
        UserDetails userDetails3 = User.withUsername("songbaicheng2").password("{noop}songbaicheng").roles("role3").build();

        return new InMemoryUserDetailsManager(userDetails1, userDetails2, userDetails3);
    }
}
```

#### 基于 JDBC 添加用户
首先需要引入数据库持久化依赖
```gradle
implementation 'mysql:mysql-connector-java:8.0.25'
```

```xml
<dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.25</version>
</dependency>
```
创建对应数据库并配置连接，具体的建表语句官方已经帮我们放在下面路径中的依赖包里了,其中的语法可能并不支持所有数据库，如果你使用 MySQL 数据库可以使用以下语句。
> /spring-security-core-6.1.0.jar!/org/springframework/security/core/userdetails/jdbc/users.ddl

```sql
create table users(
  username varchar(50) not null primary key,
  password varchar(500) not null,
  enabled boolean not null
);

create table authorities (
  username varchar(50) not null,
  authority varchar(50) not null,
  constraint fk_authorities_users foreign key(username) references users(username)
);

create unique index ix_auth_username on authorities (username,authority);
```

```yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/[database-name] # 数据库地址
    driver-class-name: com.mysql.cj.jdbc.Driver # 驱动
    username: [username] # 账号
    password: [password] # 密码
```
最后添加配置类并配置 JdbcUserDetailsManager，启动项目后 admin 用户就自动添加到数据库当中了。

```java
@Configuration
public class SecurityConfig {

    @Resource
    private DataSource dataSource;

    @Bean
    public JdbcUserDetailsManager jdbcUserDetailsManager() {

        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);

        if (!jdbcUserDetailsManager.userExists("admin")) {
            jdbcUserDetailsManager.createUser(User.withUsername("admin").password("{noop}songbaicheng").roles("role4").build());
        }

        return jdbcUserDetailsManager;
    }
}
```

#### 基于 ORM 添加用户
该方法需要根据自己的业务定义自己的 UserDetails 和重写 UserDetailsService 类中的 loadUserByUsername 方法，下面只是一个 demo 演示，将数据库中的用户数据验证并赋值到自定义的 UserDetails 中返回。

```java
@Data
@Builder
public class SecurityUser implements UserDetails {

    private String username;
    private String password;
    private String authority;
    private boolean enabled;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
```

```java
@Service
@RequiredArgsConstructor
public class SecurityService implements UserDetailsService {

    private final IAuthoritiesMapper iAuthoritiesMapper;
    private final IUsersMapper iUsersMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        String realUsername = iAuthoritiesMapper.getUsernameById(username);

        if (ObjectUtils.isEmpty(realUsername)) {
            throw new UsernameNotFoundException("用户不存在！");
        }

        return SecurityUser.builder()
                .username(realUsername)
                .password(iUsersMapper.getPasswordById(username))
                .build();
    }
}
```

### 配置授权
通过对路由的匹配并对其指定相应的授权规则，可以创建多条授权规则，建议根据从细到粗的粒度来进行匹配。

```java
@Bean
public SecurityFilterChain web(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests((authorize) -> authorize
                    .requestMatchers("/hello").hasRole("user")
                    .anyRequest().authenticated()
    );

    return http.build();
}
```

## OAuth2
OAuth 2.0（开放授权 2.0）是一种授权框架，用于允许用户授权第三方应用程序访问其在另一个应用程序（如社交媒体、电子邮件服务或云存储服务）上的受保护资源，而无需向第三方应用程序共享其凭据（例如用户名和密码）。其主要职责就是实现一个三方互信的功能，目前网站上支持的第三方登录就是 OAuth 协议的实现。OAuth 2.0 的核心概念包括以下角色：

- 资源所有者（Resource Owner）：资源所有者是指控制受保护资源的用户，例如网站用户或移动应用程序用户。
- 客户端（Client）：客户端是请求访问受保护资源的第三方应用程序，它通过 OAuth 2.0 协议与身份和授权服务器进行交互。
- 身份和授权服务器（Authorization Server）：身份和授权服务器负责验证资源所有者的身份，并根据资源所有者的授权向客户端颁发访问令牌。
- 受保护资源服务器（Resource Server）：受保护资源服务器托管受保护的用户数据或服务，只有在经过授权的情况下才能访问。

OAuth 2.0 的工作流程如下：

1. 客户端向资源所有者请求授权，以访问其受保护资源。这可以通过重定向资源所有者到身份和授权服务器的授权页面来实现。
2. 资源所有者向身份和授权服务器提供其凭据（例如用户名和密码），并授权客户端访问受保护资源。
3. 身份和授权服务器验证资源所有者的身份，并生成一个访问令牌（Access Token）。
4. 身份和授权服务器将访问令牌颁发给客户端。
5. 客户端使用访问令牌向受保护资源服务器发起请求，并在请求中提供访问令牌作为身份验证凭据。

OAuth 2.0 的优势在于它根据受保护资源服务器验证访问令牌的有效性，并根据访问令牌决定是否授权客户端访问受保护资源，使得用户可以授予对其受保护资源的有限访问权限，而无需共享其凭据。这提供了更好的安全性和用户隐私保护。此外，OAuth 2.0 支持多种授权流程，如授权码授权流程、隐式授权流程、密码授权流程和客户端凭据授权流程，以满足不同应用场景的需求。

