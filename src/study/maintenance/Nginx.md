---
category: 运维
tag: 
  - Nginx
---

# Nginx
Nginx七大核心应用场景：反向代理、虚拟主机、域名解析、负载均衡、防盗链、url重定向、https。

常见版本如下：
:::card
```card
title: Nginx 开源官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/maintenance/nginx/nginx.svg
link: https://nginx.org/en/
color: rgba(173, 216, 590, 0.15)
```
```card
title: Nginx 官方商业版本(F5)
desc: 点击跳转官网查看详细内容
logo: /assets/images/maintenance/nginx/f5.svg
link: https://nginx.com/
color: rgba(173, 216, 590, 0.15)
```
```card
title: OpenResty 开源官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/maintenance/nginx/openresty.png
link: https://openresty.com.cn/cn/
color: rgba(173, 216, 590, 0.15)
```
```card
title: Tengine 开源官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/maintenance/nginx/tengine.png
link: http://tengine.taobao.org
color: rgba(173, 216, 590, 0.15)
```
:::

## 快速开始
1. 这里拿 Nginx 官方开源版作为示例，首先你得需要一台 Linux 机器并下载 Nginx 二进制包。

![准备安装包](/assets/images/maintenance/nginx/nginx-install.png "准备安装包")

2. 使用 `./configure --prefix=/usr/local/nginx` 执行 ```configure``` 可执行文件，如果需要 ```gcc``` 依赖请先下载，如果执行期间有其他缺少的依赖补充后重新执行脚本即可。
3. 配置完成后依次执行 ```make``` 和 ```make install``` 开始安装，注意可能需要 root 权限。
4. 安装完成后就可以在 /usr/local/nginx 目录下看到我们安装的 Nginx 目录了，可以执行 /sbin 目录下的 nginx 脚本进行启动 nginx 服务，访问 linux 主机 ip 看是否能够启动成功，可以通过 ```./nginx -s stop``` 关闭 Nginx。

## 优雅起停 Nginx
首先我们要先知道几个常见的起停 Nginx 的命令：

```shell
# 启动 Nginx
./nginx

# 快速暴力停止 Nginx
./nginx -s stop

# 优雅停止 Nginx
./nginx -s quit

# 重新加载配置
./nginx -s reload
```

而平时我们真正生产上使用服务器启动和关闭 Nginx 不会总是每次都找到此执行文件执行的，所以我们需要把起停命令添加到 systemctl 来方便我们直接起停，我们可以在 /usr/lib/systemd/system 目录下添加 nginx.service 这个文件，内容如下：

```shell
[Unit] 
Description=nginx
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit 
PrivateTmp=true
   
[Install]   
WantedBy=multi-user.target
```
创建完成之后执行 ```systemctl daemon-reload``` 加载一下添加的配置，现在我们就可以使用 systemctl 来控制 Nginx 的起停了。

```shell
# 启动 Nginx
systemctl start nginx.service

# 查看 Nginx 状态
systemctl status nginx.service

# 停止 Nginx
systemctl stop nginx.service

# 设为开机启动
systemctl enable nginx.service

# 关闭开机启动
systemctl disable nginx.service
```