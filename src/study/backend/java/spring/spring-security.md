---
star: true
category: Spring Boot
tag: 
  - Spring Security
---

# Spring Security 基础
## 介绍
目前提到安全框架，Shiro 和 Spring Security 算得上是分庭抗争了，并且 Shiro 主打的是简单、轻量，但却没有 Spring Security 灵活，在 Spring Security 支持 OAuth2 之后更加贴合当前社会需求，并且我们如果使用 Spring 框架的话，学习 Spring Security 更是如鱼得水，并且是重中之重。如果想要更加深入的了解 Spring Security ，请预览下面官方文档的链接进行研读。

```card
title: Spring Security 官网文档
desc: 点击跳转官网查看详细内容
logo: /assets/common-icon/spring-initializr.svg
link: https://spring.io/projects/spring-security
color: rgba(173, 216, 590, 0.15)
```

官方的解释是 Spring Security 是一个提供身份验证、授权和防止常见攻击的框架，正如它说的那样，其核心功能就是 **_认证_** 和 **_授权_**。

- 认证（Authentication）：系统确认一个用户的身份是否真实、合法。
- 授权（Authorization）：系统对用户进行的访问控制，即通过了认证后用户对资源的访问限制。

Spring Security 的重点是对所有进入系统的请求进行拦截，校验其是否可以访问其所期望的资源。而 Spring Security 对于 Web 资源的保护都是通过 Filter 进行保护的，而这些 Filter 都是通过注入到 Spring 容器中的 SecurityFilterChain 过滤器链来实现的，

![Spring Security 流程图](/assets/images/study/backend/java/spirng/spring-security/spring-security-process.png "Spring Security 流程图")

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

### 配置登录认证用户
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

### 配置资源授权角色
通过对路由的匹配并对其指定相应的授权规则，可以创建多条授权规则，建议根据从细到粗的粒度来进行匹配。下面就是对 /hello 下的资源限制为有 user 身份的用户才能访问，其他资源则只需要认证通过即可访问。

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
## 总结
虽然 Spring Security 已经提供了认证授权的完整功能，但是在灵活、安全和可扩展的身份验证和授权解决方案还是不及一些像 OAuth 这种在大规模和分布式系统的安全框架，所以官方也将这些框架继承进来搭配使用，各司其职，所以在实际使用中为了可拓展、服务解耦和更高的安全性上大家就不会单纯使用 Spring Security ，所以了解好 Spring Security 的工作流程之后，我们结下来就要开始 Token 安全令牌的学习了。