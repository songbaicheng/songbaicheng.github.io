---
star: true
category: 运维
tag: 
  - Jenkins
---

# 初始 Jenkins
## 快速搭建
个人理解主节点的 Jenkins 因为不推荐参与构建任务，再加性能损耗小、系统调用权限更直接、复杂度降低等优点，所以应该是安装在宿主机上的，但是目前主流的方案都因为隔离性、可移植性、易于管理和更新的原因都选择容器部署，那我们也就选择容器的方式进行搭建。

便于管理和配置复用，我们这里采用 Docker Compose 的容器编排方式创建 Jenkins 容器。我们在工作目录中创建下列 Dockerfile 和 Docker Compose。

```shell
   # 选择自己的容器镜像
FROM jenkins/jenkins

# 设置环境变量，也可以省略，因为不推荐使用自带的 JDK
ENV JAVA_OPTS="-Xms512m -Xmx1024m"

# 安装必要的插件，当然可以选择启动容器后手动安装
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN /usr/local/bin/install-plugins.sh $(cat /usr/share/jenkins/ref/plugins.txt)

# 用户和权限配置（如有必要，根据实际需求调整）
USER root
RUN chown -R jenkins:jenkins /var/jenkins_home/

# 切换容器登录账户
USER jenkins
```

```yaml
version: '3'
services:
  jenkins:
    build:
      context: ./jenkins
      dockerfile: Dockerfile
    container_name: jenkins
    restart: always  # 在生产环境中通常希望容器崩溃后自动重启
    ports:
      - "8080:8080"  # 映射Jenkins Web UI端口到宿主机
      - "50000:50000"  # 映射Jenkins Agent端口
    volumes:
      - jenkins_data:/var/jenkins_home  # 数据持久化，保存在宿主机的数据卷中
      - /var/run/docker.sock:/var/run/docker.sock  # 如果要在Jenkins中执行Docker命令，需要映射Docker守护进程socket
      - /path/to/your/config:/usr/share/jenkins/ref/init.groovy.d  # 若有自定义初始化脚本
      - /usr/local/maven:/usr/local/maven # 自定义 Maven
      - /usr/local/java:/usr/local/java # 自定义 Java
      - /usr/local/node:/usr/local/node # 自定义 Node
```

在 docker-compose.yml 目录下执行 ```docker-compose up -d``` 即可创建容器，可以用 ```docker ps``` 查看是否启动成功，如果成功则立即执行 ```docker logs jenkins``` 来显示管理员初始化密码，如果没有看到也可以执行 ```docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword``` 进入容器内查看初始化密码。

## 基础配置

