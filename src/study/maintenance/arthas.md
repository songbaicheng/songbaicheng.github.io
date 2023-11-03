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
# 在线的环境下下载 arthas-boot 包进行启动
curl -O https://arthas.aliyun.com/arthas-boot.jar
java -jar arthas-boot.jar

# 如果离线或者条件允许的情况下可以去 Github 下载完整安装包
```
```card
title: Arthas Github 网站发行版
desc: 点击跳转官网查看详细内容
logo: /assets/common-icon/github-logo.svg
link: https://github.com/alibaba/arthas/releases
color: rgba(173, 216, 590, 0.15)
```

### 启动
找到 arthas-boot.jar 包并执行 ```java -jar arthas-boot.jar``` 命令启动 Arthas，这里需要注意，启动 Arthas 必须保证当前环境中有运行的 java 进程，否则会自动退出。

![Arthas 启动时退出](/assets/images/study/maintenance/arthas/arthas-break-out.png "Arthas 启动时退出")

启动成功后，紧随其后就会生成当前用户下启动的 java 程序，选择序号后执行就 attach（粘连） 到了目标进程，在进入目标进程后，

![Arthas 启动成功并 attach 到目标进程](/assets/images/study/maintenance/arthas/arthas-start.png "Arthas 启动成功并 attach 到目标进程")

图中我们可以看到 Arthas 会打开一个端口为 3658 的 client，我们之后的操作也可以选择在浏览器界面进行。

![Arthas 浏览器界面](/assets/images/study/maintenance/arthas/arthas-broswer.png "Arthas 浏览器界面")

### 退出
如果只是退出当前的连接，可以用 quit 或者 exit 命令。Attach 到目标进程上的 arthas 还会继续运行，端口会保持开放，下次连接时可以直接连接上。如果想完全退出 arthas，可以执行stop命令。

## 常用场景
### 查找执行方法
当我们遇到一个非常耗时的方法的时候，或者遇到代码问题需要定位的时候，我们可以使用 trace 命令来通过一步步缩小范围来找到耗时最长的方法，如果你并不熟悉代码或者不清楚具体在那个包下，只需要从最外层的包名开始查看，可以用 * 来代替不确定的路径，在多次看到红色最长时间的方法后就能明确具体方法了。

![查看方法耗时](/assets/images/study/maintenance/arthas/arthas-trace.png '查看方法耗时')

### 查看源码解决问题
如果我们已经知晓了问题代码的位置，可是源码我们又看不到，我们就可以用 jad 命令来反编译类名或者方法名来查看源码。

![反编译源码](/assets/images/study/maintenance/arthas/arthas-jad.png '反编译源码')

### 查看某些方法出参入参
如果我们想排查方法调用时一些方法的入参和出参，我们可以使用 watch 命令，如果是多层的结构，我们可以用 -x 【n】来指定查看解析数据的层数。

![监听方法参数](/assets/images/study/maintenance/arthas/arthas-watch.png '监听方法参数')

