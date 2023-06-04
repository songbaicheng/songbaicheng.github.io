# Nacos
## 文档地址
> https://nacos.io/zh-cn/docs/v2/what-is-nacos.html

## 快速开始
我们这里根据 Spring Cloud Alibaba 毕业版本推荐选择了 2.2.0 的版本，相比于 Eureka 来说，Nacos 同样也分为客户端和服务端，不过服务端不需要我们自行搭建，我们直接下载使用官方的即可，这里你可以选择下载二进制包直接使用或者 Docker 镜像的方式都可以，我们这里使用下载二进制包的方法，可以去下面网址找到你想要的版本进行下载。

> https://github.com/alibaba/nacos/tags

下载完成后启动前，这里值得注意的是 Nacos 在**2.2.0.1**和**2.2.1**版本后，必须修改 conf 目录下的 application.properties 文件设置其中的 **nacos.core.auth.plugin.nacos.token.secret.key** 值，否则不能启动，该参数是鉴权用于生成用户登陆临时accessToken所使用的密钥，默认可以使用```SecretKey012345678901234567890123456789012345678901234567890123456789```，该值可用于临时测试，实际使用时请务必更换为自定义的其他有效值。如果你不想使用内置数据库想绑定数据库实现持持久化，需要把 **Config Module Related Configurations** 中的配置全部打开并配置正确的数据库参数，并且把 conf 目录中对应数据库的sql文件执行生成工作表。一切准备完毕后启动即可。

```sh
sh startup.sh -m standalone
```

![Nacos 单机启动](/assets/images/study/backend/java/spring-cloud-alibaba/nocas/nacos-startup-standalone.png "Nacos 单机启动")

> http://127.0.0.1:8848/nacos/
- 默认账号：nacos
- 默认密码：nacos

![Nacos 登录界面](/assets/images/study/backend/java/spring-cloud-alibaba/nocas/nacos-login.png "Nacos 登录界面")

添加测试配置文件，查看数据库是否配置完成。

![Nacos 配置列表](/assets/images/study/backend/java/spring-cloud-alibaba/nocas/nacos-home.png "Nacos 配置列表")

![Nacos MySQL](/assets/images/study/backend/java/spring-cloud-alibaba/nocas/nacos-mysql.png "数据库是否配置生效")

