---
category: 运维
tag: 
  - 1Panel
---

# 1Panel
## 聊聊运维面板
在很多内网的服务器中，需要手工输入命令安装各类软件，操作起来费时费力并且容易出错，非常考验运维人员的基本功，而面向一些云服务器来说，我只是需要安装一些数据库或者运行环境，这个时候如果使用运维面板就可以一件安装，简直不要太方便。之前听过的运维面板只有宝塔，不过最近一个号称新一代的 Linux 服务器运维管理面板 1Panel 横空出世，正好手头也有服务器就看看面板工具是不是真的那么好用。如果想了解更详细的面板介绍可以点击下面链接跳转官网查看。

::: card
```card
title: 1Panel 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/maintenance/1panel/1Panel.png
link: https://1panel.cn/
color: rgba(173, 216, 590, 0.15)
```
```card
title: 宝塔官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/maintenance/1panel/bt.svg
link: https://www.bt.cn/new/index.html
color: rgba(173, 216, 590, 0.15)
```
:::

## 快速开始
### 环境准备和下载
这里我准备了一台阿里云的服务器，下载前注意一下服务器用户是否有足够权限，默认是安装在 /opt 目录下的，而且像很多这种下载脚本执行的安装方式在下载安装的时候会产生文件，所以个人还是推荐创建一个新文件夹再进行下载。执行下面命令即可下载最新安装脚本并自动进行安装。


::: code-tabs
@tab RedHat / CentOS
```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```
@tab Ubuntu
```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```
:::

### 启动展示
安装的话会有一些初始化操作的步骤，一步一步完成即可，安装成功后，界面会出现访问服务的网址，如果你手速够快或者一些特殊情况看不到了，可以执行  ```1pctl user-info``` 进行查看。旧版本的话直接使用 ip + port 的方式就可以直接跳转登录界面，可是新版本增加了一个安全入口登录的限制，这个就需要用 ```1pctl user-info``` 这个命令查看 entrance 这个属性跟在端口后。