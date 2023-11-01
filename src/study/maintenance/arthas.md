---
category: 运维
tag: 
  - Arthas
  - Java
---

# Arthas（阿尔萨斯)
## 简介
Arthas 是阿里提供的一款线上监控诊断产品，通过全局视角实时查看应用 load、内存、gc、线程的状态信息，并能在不修改应用代码的情况下，对业务问题进行诊断，包括查看方法调用的出入参、异常，监测方法执行耗时，类加载信息等，大大提升线上问题排查效率。

当你遇到以下类似问题而束手无策时，Arthas可以帮助你解决：
1. 这个类从哪个 jar 包加载的？为什么会报各种类相关的 Exception？
2. 我改的代码为什么没有执行到？难道是我没 commit？分支搞错了？
3. 遇到问题无法在线上 debug，难道只能通过加日志再重新发布吗？
4. 线上遇到某个用户的数据处理有问题，但线上同样无法 debug，线下无法重现！
5. 是否有一个全局视角来查看系统的运行状况？
6. 有什么办法可以监控到 JVM 的实时运行状态？
7. 怎么快速定位应用的热点，生成火焰图？
8. 怎样直接从 JVM 内查找某个类的实例？

```card
title: Arthas 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/maintenance/arthas/arthas.png
link: https://arthas.aliyun.com/
color: rgba(173, 216, 590, 0.15)
```

## 快速开始
### 下载
```shell
# 第一种方法就是下载 arthas-boot 包进行启动
curl -O https://arthas.aliyun.com/arthas-boot.jar
java -jar arthas-boot.jar

# 不过个人在启动时发现上述下载方式会提示缺少依赖而报错
# 于是离线或者条件允许的情况下可以去下载完整包
# https://github.com/alibaba/arthas/releases
```

### 启动
```shell
# 如果下载的完整包解压后目录也会出现 arthas-boot.jar 
java -jar arthas-boot.jar

# 紧随其后就会生成当前用户下启动的 java 程序，选择序号后执行就进入了目标进程
# 在进入目标进程后，输入dashboard，按回车/enter，会展示当前进程的信息，按ctrl+c可以中断执行。
dashboard
```

### 退出
如果只是退出当前的连接，可以用 quit 或者 exit 命令。Attach 到目标进程上的 arthas 还会继续运行，端口会保持开放，下次连接时可以直接连接上。如果想完全退出 arthas，可以执行stop命令。

## 常用命令
### dashboard
显示当前系统的实时数据面板，按 ctrl+c 退出，可以通过 i 来指定刷新时间，默认是 5 毫秒刷新一次，可以通过 n 来指定刷新次数。

### jad
反编译指定已加载类的源码。