---
category: 微服务
tag: 
  - Spring Cloud Alibaba
  - Java
---

# Nacos
## 文档地址
> https://nacos.io/zh-cn/docs/v2/what-is-nacos.html

## 快速开始
### Nacos服务端单机模式启动
我们这里根据 Spring Cloud Alibaba 毕业版本推荐选择了 2.2.1 的版本，相比于 Eureka 来说，Nacos 同样也分为客户端和服务端，不过服务端不需要我们自行搭建，我们直接下载使用官方的即可，这里你可以选择下载二进制包直接使用或者 Docker 镜像的方式都可以，我们这里使用下载二进制包的方法，可以去下面网址找到你想要的版本进行下载。

> https://github.com/alibaba/nacos/tags

下载完成后启动前，这里值得注意的是 Nacos 在**2.2.0.1**和**2.2.1**版本后，必须修改 conf 目录下的 application.properties 文件设置其中的 **nacos.core.auth.plugin.nacos.token.secret.key** 值，否则不能启动，该参数是鉴权用于生成用户登陆临时accessToken所使用的密钥，默认可以使用```SecretKey012345678901234567890123456789012345678901234567890123456789```，该值可用于临时测试，实际使用时请务必更换为自定义的其他有效值。如果你不想使用内置数据库想绑定数据库实现持持久化，需要把 **Config Module Related Configurations** 中的配置全部打开并配置正确的数据库参数，并且把 conf 目录中对应数据库的sql文件执行生成工作表。一切准备完毕后启动即可。

```sh
sh startup.sh -m standalone
```

执行命令后可以根据自己的配置访问下面网址进行访问。如果启动失败，可以在日志文件夹中寻找 start.out 文件查看启动失败的原因，这里面的日志会根据你每次启动而更换，如果是想查看历来所有的日志则需要去 nacos.log 文件查看。

> http://{ip}:{port}/nacos/
- 默认账号：nacos
- 默认密码：nacos

启动成功后可以通过添加配置文件来测试各功能是否好用，如果是外置数据源的情况可以配置完后查看数据库表中数据是否存在来判断。

### Nacos客户端启动后注册
准备一个 Spring boot 项目，这里建议使用下面阿里云网站进行构建，如果你使用 Spring 官网的工具会发现在 IDEA 中添加依赖的时候找不到 Nacos ，还需要自己去添加。并且使用阿里云构建项目会在项目中给你添加 demo 示例，这里让我想到看过的一个视频里说：“这些生成的配置在我的代码里完全是画蛇添足！”哈哈哈哈，现在想到这句话我都觉得很逗。

> https://start.aliyun.com

下面是要添加的关键依赖：

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
    </dependency>
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-openfeign</artifactId>
    </dependency>
    <!-- 确认从2021.0.5版本起，Spring Cloud将不再默认启用bootstrap包，需自行引入 -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-bootstrap</artifactId>
        <version>4.0.1</version>
    </dependency>
</dependencies>
```

然后配置好配置文件并像 Eureka 一样在启动类或者配置类中添加```@EnableDiscoveryClient```客户端注解即可。

```yaml
server:
  port: 8080 # 应用服务 WEB 访问端口

spring:
  application:
    name: nacos-demo # 服务注册名称
  cloud:
    nacos:
      config:
        server-addr: localhost:8848 # 服务注册地址
        username: nacos
        password: nacos
```
![Nacos 登录界面](/assets/images/study/backend/java/spring-cloud-alibaba/nocas/nacos-server-list.png "服务注册成功")

### Nacos服务端集群模式启动s

![Nacos 集群](/assets/images/study/backend/java/spring-cloud-alibaba/nocas/nacos-cluster.jpg "集群部署架构图")

上图是从网络上找到的 Nacos 集群图，其实在官网也有集群部署的说明，但是没有展示出 Nacos 集群和数据交互的部分，但是在安全性方面，官网推荐**域名 + SLB模式**(内网SLB，不可暴露到公网，以免带来安全风险)，可读性好，而且换ip方便。不过我们先不讨论网关的部分，因为如果牵扯到网关到底是使用微服务网关（Netflix Zuul、Spring Cloud Gateway）还是 Nginx 还需要根据我们项目 API 管控治理能力的大小来决定。搭建 Nacos 集群我们需要使用先修改一下安装目录中 cong 下的 cluster.conf.exemple 文件，可以直接将该文件的 .exemple 后缀去掉后按照文件中例子添加自己创建的 Nacos 节点的 ip 和 port，至于数据源配置如果使用内置数据源则不需要修改，如果使用外置数据源则全部按照单机启动的部分配置成自己的数据库参数即可。

![Nacos 集群节点](/assets/images/study/backend/java/spring-cloud-alibaba/nocas/nacos-node.png "Nacos 集群节点列表")

这个时候启动我们的注册服务会发现每个 Nacos 节点内都可以看到注册服务，Nacos 集群就搭建完成了。