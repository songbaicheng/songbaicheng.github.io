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

## 认识目录
```yaml
- nginx
    - conf # 配置目录
    - html # 静态资源和界面
    - logs # 日志
    - sbin # 主进程文件
```

## 工作模式
Nginx在启动的时候会采用多进程的方式，产生 master 和 worker 两种进程进行工作，master 负责统一协调 worker 进程的工作调度，而真正工作的都是一个个的 worker 进程。

![多进程的工作模式](/assets/images/maintenance/nginx/nginx-worker.jpg "多进程的工作模式")

## 配置文件详解
::: normal-demo nginx.conf
```shell
#user  nobody;
worker_processes  1; # 工作进程个数

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types; # 引用其他的配置文件，这里的mime是告知浏览器请求文件类型解析方式的配置
    default_type  application/octet-stream; # 默认文件通过流的方式处理

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on; # 文件零拷贝
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65; # 长链接时长

    #gzip  on;

    server { # 一个虚拟主机配置
        listen       80; # 端口
        server_name  localhost; # 可解析的域名、主机名

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html; # 资源访问地址
            index  index.html index.htm; # 默认页
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html; # 服务器错误跳转界面
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```
:::

## 自定义虚拟主机域名
在我们简单了解了 nginx.conf 文件后，我们可以看到其中每个 http 下的 server 就是一个虚拟主机，这里我们模拟一个新的虚拟主机通过不同端口访问不同的资源。

::: normal-demo 通过端口自定义虚拟主机
```shell
server {
        listen       88; # 端口
        server_name  localhost; # 可解析的域名、主机名

        location / {
            root   my-html; # 资源访问地址
            index  index.html index.htm; # 默认页
        }

        error_page   500 502 503 504  /50x.html; # 服务器错误跳转界面
        location = /50x.html {
            root   html;
        }
    }
```
:::

一样的，如果我们想通过不同的域名访问不同的资源，我们可以修改 server_name 来区分资源路径。

::: normal-demo 通过域名自定义虚拟主机
```shell
server {
        listen       80; # 端口
        server_name  www.XXX.com; # 可解析的域名、主机名

        location / {
            root   my-html; # 资源访问地址
            index  index.html index.htm; # 默认页
        }

        error_page   500 502 503 504  /50x.html; # 服务器错误跳转界面
        location = /50x.html {
            root   html;
        }
    }
```
:::

### 虚拟主机域名匹配规则
- 完整匹配，如果配置的是完整的域名，则按照完整的域名进行匹配，如果配置了多个，则按照从上到下的优先级来决定。server_name 配置项后可以跟多个域名，用空格隔开区分。
- 通配符匹配，可以通过*来匹配域名。
- 正则匹配，一般用于二级域名来使用，通过正则表达式来匹配域名。

## 反向代理
反向代理不是什么高不可攀的东西，如果想理解反向代理我们必须结合正向代理一起理解，一句话来说就是站在用户角度对后台服务器是否可见，如果是正向代理，就好像我们科学上网，配置一台代理服务器访问海外的服务器，我们是知道海外服务器ip地址的，这就是正向，同理，Nginx 作为网关入口，往往是和内网的后台服务器配合，用户访问 Nginx 看不到真实的后台服务器，所以 Nginx 的代理实现是反向的。

Nginx 作为反向代理服务器的时候，设计往往是隧道式的，即所有的请求都必须从 Nginx 进入，这就是所谓的隧道式的含义，而如果是一些下载的请求，返回的数据和进入的请求竞争带宽则非常影响性能，所以就有了更高性能的 lvs 来做负载均衡，或者是内网后台服务器只允许进入走 Nginx 代理，而发送则接入外围网管直接和请求方通讯这种方式。

而我们开启代理非常简单，只需要我们在 server 中 location 下编辑 proxy_pass 即可实现代理跳转。

::: normal-demo 代理服务器配置
```shell
server {
        listen       88; # 端口
        server_name  localhost; # 可解析的域名、主机名

        location / {
            proxy_pass   http://www.baidu.com; # 代理服务器
            # root   /usr/local/nginx/my-html; # 资源访问地址
            # index  index.html index.htm; # 默认页
        }

        error_page   500 502 503 504  /50x.html; # 服务器错误跳转界面
        location = /50x.html {
            root   html;
        }
    }
```
:::

## 负载均衡
### 轮训
首先我们需要使用 upstream 配置一个代理集，然后通过 proxy_pass 指定这个代理集，之后我们每次请求这个 server 就会自动轮流执行这个代理集中的地址。

::: normal-demo 简单的轮训负载均衡
```shell
upstream webs {
	server localhost:88;
	server localhost:89;
    }

    server {
        listen       80;
        server_name  localhost;

        location / {
	    proxy_pass   http://webs;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    
    server {
        listen       88; # 端口
        server_name  localhost; # 可解析的域名、主机名

        location / {
	    proxy_pass   http://www.baidu.com; # 代理服务器
        }

        error_page   500 502 503 504  /50x.html; # 服务器错误跳转界面
        location = /50x.html {
            root   html;
        }
    }
    server {
        listen       89; # 端口
        server_name  localhost; # 可解析的域名、主机名

        location / {
            proxy_pass   http://www.taobao.com; # 代理服务器
        }

        error_page   500 502 503 504  /50x.html; # 服务器错误跳转界面
        location = /50x.html {
            root   html;
        }
    }
```
:::