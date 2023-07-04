---
star: true
category: Spring Boot
tag: 
  - log
  - logback
---

# Spring Boot Logging
## 关于 Spring 日志
在 Spring Boot 的官方文档的核心功能部分介绍了 Spring 对日志功能的支持，Spring 并没有自己的日志框架实现，而是使用 SLF4J（Simple Logging Facade for Java）作为日志门面，在底层使用 Commons Logging 作为抽象层去识别和对接一些常见的日志框架，如 Logback、Log4j2 等。Spring Boot 默认集成了 Logback 作为日志框架并支持我们在配置文件通过简单的配置就可以开箱即用，如果想了解更多细节可以点击下面卡片跳转官网查看。

```card
title: Spring Security 官网文档
desc: 点击跳转官网查看详细内容
logo: /assets/common-icon/spring-initializr.svg
link: https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#features.logging
color: rgba(173, 216, 590, 0.15)
```

## 快速开始（Logback）
## 简单配置
Spring 默认配置了控制台输出，所以我们可以在配置文件添加以下配置选择文件输出。

```yaml
logging:
  level:
    root: INFO
    com.example: DEBUG

  file:
    name: /var/log/myapp.log
    totalSizeCap: 10MB
    historySize: 7
    maxFileSize: 1MB
```

### 日志格式
![默认日志格式](/assets/images/study/backend/java/spring/spring-boot-logging/spring-boot-log-format.png "Spring Boot 默认日志格式")

- 日期和时间：毫秒精度且易于排序。
- 日志级别：TRACE, DEBUG, INFO, WARN, ERROR, FATAL，要知道 Logback 没有 FATAL 级别，它被映射到 ERROR 里。
- 线程名称：用方括号括起来（可能会被截断以用于控制台输出）。
- 记录器名称：这通常是源类名称（通常是缩写）。
- 日志消息：对应你代码中答应的日志信息。


## 实际使用
在我工作中正常服务器的日志使用的话，通常是搭配 pom.xml 来构建多环境打包的方案，使用 logback.xml 搭配一些输出类型进行输出日志文件，常用的输出类型有以下几种：

| 输出类型 | 描述 |
| :---: | --- |
| ConsoleAppender |	将日志输出到控制台 |
| FileAppender |	将日志输出到单个文件 |
| RollingFileAppender |	支持滚动的文件输出，根据条件生成新的日志文件 |
| SizeAndTimeBasedRollingPolicy |	基于时间和文件大小的滚动策略，根据时间和大小规则生成新的日志文件 |
| TimeBasedRollingPolicy |	基于时间的滚动策略，根据时间周期生成新的日志文件 |
| DailyRollingFileAppender |	按照每天滚动的策略，生成带有日期的日志文件 |
| 自定义Appender |	用户根据需求编写的自定义输出类型 |

### 通用案例
分享一个通用的 logback.xml ，其配置是按照日期和文件大小进行输出的。

```xml
<configuration>

    <!-- 定义日志输出的根目录 -->
    <property name="LOG_HOME" value="/Users/songbaicheng/logs/cloud-mall/mall-web"/>

    <!-- 定义日志文件的名称 -->
    <property name="LOG_NAME" value="mall-web"/>

    <!-- 控制台输出 -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- 按文件大小滚动的文件输出 -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>${LOG_HOME}/%d{yyyy-MM-dd}/${LOG_NAME}.%i.log</fileNamePattern>
            <maxFileSize>10MB</maxFileSize>
            <totalSizeCap>100MB</totalSizeCap>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- 日志输出级别 -->
    <root level="info">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>

</configuration>

```