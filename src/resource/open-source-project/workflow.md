---
category: 开源项目
tag: 
  - Activiti
---

# 工作流引擎
## 介绍
工作流（workflow）就是通过计算机对业务流程自动化执行管理，它主要结局的是多个参与者之间按照某种预定义的规则自动进行传递文档、信息或者任务的过程，从而实现某个预期的业务目标，或者促使此目标的实现。

工作流基于业务流，适用于消费品行业、制造业、电信服务业、物流服务业、物业管理、政府机构等，特别是大的企业集团公司。具体应用在关键业务流程、行政审批流程、人事管理流程等。

比较原始的工作流实现方式无非就是利用审核表或者增加审核字段，通过自己实现业务逻辑对一些步骤进行审批和限制，如果是比较复杂的大型业务模式就显得非常不专业了。

我们这里引入一个开源的工作流引擎 Activiti，它可以将业务中复杂的业务流程抽取出来，使用专门的建模语言 BPMN 2.0 进行定义，减少业务系统因为业务改变造成的任务量，提高系统健壮性，降低系统维护成本。

```card
title: Activiti 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/open-source-project/workflow/activiti.jpg
link: https://www.activiti.org/
color: rgba(173, 216, 590, 0.15)
```

## 快速开始
### 项目启动
这里我们采用 Spring Boot 2.7.6 + jdk17 + activiti 7.0.0.Beta5 版本来进行学习，这个版本是我经过多次试验才能成功使用的版本，都是血和泪啊，下面是 pom 文件供大家参考。

::: normal-demo pom.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.sbc</groupId>
    <artifactId>activiti</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>activiti</name>
    <description>Demo project for Spring Boot to learn activiti7</description>

    <properties>
        <java.version>17</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

        <spring-boot.version>2.7.6</spring-boot.version>
        <activiti.version>7.0.0.Beta5</activiti.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <dependency>
            <groupId>org.activiti</groupId>
            <artifactId>activiti-spring-boot-starter</artifactId>
            <version>${activiti.version}</version>
        </dependency>
        <dependency>
            <groupId>org.activiti</groupId>
            <artifactId>activiti-dependencies</artifactId>
            <version>${activiti.version}</version>
            <type>pom</type>
        </dependency>

    </dependencies>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <repositories>
        <repository>
            <id>activiti-releases</id>
            <url>https://artifacts.alfresco.com/nexus/content/repositories/activiti-releases</url>
        </repository>
    </repositories>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>${spring-boot.version}</version>
                <configuration>
                    <mainClass>com.sbc.activiti.ActivitiApplication</mainClass>
                    <skip>true</skip>
                </configuration>
                <executions>
                    <execution>
                        <id>repackage</id>
                        <goals>
                            <goal>repackage</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>

```
:::

### 表结构
activiti 根据配置会在第一次启动的时候创建所需要的表，这些表明根据命名前缀规则分为以下几类：

表分类 | 表名 | 表注释
--- | --- | ---
|| ACT_EVT_LOG | 日志表
||ACT_PROCDEF_INFO|
一般通用数据 ||
||ACT_GE_BYTEARRAY| 通用的流程定义和流程资源
||ACT_GE_PROPERTY| 系统相关属性表
流程历史记录 |ACT_HI_ACTINST| 历史的流程实例
||ACT_HI_ATTACHMENT| 历史的流程附件
||ACT_HI_COMMENT| 历史的说明性信息
||ACT_HI_DETAIL| 历史的流程运行中的细节
||ACT_HI_IDENTITYLINK| 历史的流程运行过程中用户关系
||ACT_HI_PROCINST| 历史的流程实例
||ACT_HI_TASKINST| 历史的任务信息
||ACT_HI_VARINST| 历史的流程运行中的变量信息
流程定义表 ||
||ACT_RE_DEPLOYMENT| 部署单元信息
||ACT_RE_MODEL| 模型信息
||ACT_RE_PROCDEF| 已部署的流程定义
运行实例表 ||
||ACT_RU_DEADLETTER_JOB| 
||ACT_RU_EVENT_SUBSCR| 运行时的事件
||ACT_RU_EXECUTION| 运行时流程执行的实例
||ACT_RU_IDENTITYLINK| 运行时用户关系信息
||ACT_RU_INTEGRATION|
||ACT_RU_JOB| 运行时作业
||ACT_RU_SUSPENDED_JOB|
||ACT_RU_TASK| 运行时任务
||ACT_RU_TIMER_JOB|
||ACT_RU_VARIABLE| 运行时变量表

### 流程设计器
之前较早的版本大家可能为了方便会使用 Eclipse 或者 IDEA 的插件进行 BPMN 流程图设计，但是其插件都过于老旧且一直没有更新了，而在 Activiti6 之后官方推出了一个流程设计器的 war 包工具，可以在本地进行流程图可视化操作，当然在 Activiti7 之后更是有了支持的 Docker 镜像可以使用，如果你不想下载使用的话，最新的官方推荐了一个 Activiti Modeler Application 的在线网站 BPMN.IO 的网站让我们可以在线绘制 BPMN 图，这里我们使用这种方式进行学习。

```card
title: BPMN.IO 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/open-source-project/workflow/activiti.jpg
link: https://bpmn.io/
color: rgba(173, 216, 590, 0.15)
```