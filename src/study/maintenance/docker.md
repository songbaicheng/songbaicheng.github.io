---
category: 运维
tag: 
  - Docker
---

# Docker
在云计算的推动下，虚拟化技术是大势所趋，Docker 是作为运维工程师及后端开发人员都应该了解的技术，简化环境搭建、节省开支、持续交付、部署和部署，也是学习 k8s 之前必须要学会的知识点。学习后在搭建测试环境和本地测试也是十分的方便，再也不用受各种安装环境时提示安装失败的折磨，快快学起来。

## Docker 架构
Docker 包括三个基本概念:
- 镜像（Image）：相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。
- 容器（Container）：镜像和容器的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。
- 仓库（Repository）：仓库可看成一个代码控制中心，用来保存镜像。

## 镜像加速
### 加速器
国内从 DockerHub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。Docker 官方和国内很多云服务商都提供了国内加速器服务，例如：
- 科大镜像：https://docker.mirrors.ustc.edu.cn/
- 网易：https://hub-mirror.c.163.com/
- 阿里云：https://<你的ID>.mirror.aliyuncs.com
- 七牛云加速器：https://reg-mirror.qiniu.com

### 配置加速器
如果是可视化的界面在 Docker 的 Docker Engine 中的 ```registry-mirrors``` 中添加加速器地址即可；对于使用 systemd 的系统，请在 /etc/docker/daemon.json 中写入如下内容（如果文件不存在请新建该文件）。
```
{"registry-mirrors":["https://reg-mirror.qiniu.com/"]}
```

### 检查加速器是否生效
检查加速器是否生效配置加速器之后，如果拉取镜像仍然十分缓慢，请手动检查加速器配置是否生效，在命令行执行 ```docker info```，如果从结果中看到了如下内容，说明配置成功。
```shell
$ docker info
Registry Mirrors:
    https://reg-mirror.qiniu.com
```

## 快速开始
感觉所有编程技术的第一课都是 Hello World ，Docker 也不例外，这里我们拿一个输出 Hello World 的 Ubuntu 镜像来作为我们运行的第一个例子。

```docker
runoob@runoob:~$ docker run ubuntu:15.10 /bin/echo "Hello World"
Hello World
```

其实学过 shell 脚本的人不难看出，其实这里的输出其实就是相当于 ```echo 'Hello World'```，而其他命令的作用就是帮我们运行一个 Ubuntu 镜像，使它变成一个可执行的容器然后来运行我们的命令，```docker run [container name]``` 这个命令就是运行指定容器的命令，而这个命令也可以指定很多参数，比如；

-t: 在新容器内指定一个伪终端或终端。
-i: 允许你对容器内的标准输入 (STDIN) 进行交互。

一般我们使用这两个命令就是在第一次启动容器的时候直接进入到容器内部进行编辑，当然如果你第一次只是想运行出一个镜像并不想和产生的容器产生交互，就可以使用后台模式启动，即 ```-d``` 参数，使用 ```-d``` 参数运行后的容器会返回一串 container id，当然我们也可以用 ```docker ps``` 来查看正在运行的容器。

如果我们想要停止一些容器，就可以先用 ```docker ps``` 来查看启动容器的 id，然后用 ```docker stop [container id]``` 来停止容器，停止后的容器再使用 ```docker ps``` 已经查看不到了，当然并不是被删除了，你可以使用 ```docker ps -a``` 查看全部创建的容器。

## 基本使用