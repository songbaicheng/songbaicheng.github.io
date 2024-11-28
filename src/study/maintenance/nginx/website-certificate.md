---
category: 运维
tag: 
  - Nginx
  - HTTPS
  - 证书
---

# 网站证书
在你想做一个正规的并且所有人都可以访问的网站的时候，再使用 ip 访问就显得没有那么方便了，这个时候就需要一个域名来访问网站。购买域名的流程在一些云服务商已经有一条龙的服务了，并且在你购买完域名就说明你已经经过了购买服务器、搭建网站、备案等流程了，而接下来的步骤就是解析 SSL 证书了。

# Linux 证书安装部署
## 1. 下载证书
在你购买域名的服务商界面下载系统对应的 SSL 证书，内部重要的两个文件为后缀是 key 和 pem 的文件。

![SSL 证书文件](/assets/images/study/maintenance/website-certificate/ssl.png "SSL 证书文件")

下载到服务器的指定目录下，例如 /usr/local/nginx/conf/cert 目录下。

## 2. 编辑 Nginx 配置文件
```shell
server {
     #SSL 默认访问端口号为 443
     listen 443 ssl; 
     #请填写绑定证书的域名
     server_name cloud.tencent.com; 
     #请填写证书文件的相对路径或绝对路径
     ssl_certificate cert/debugking.top.pem;
     #请填写私钥文件的相对路径或绝对路径
     ssl_certificate_key  cert/debugking.top.key;
     ssl_session_timeout 5m;
     #请按照以下协议配置
     ssl_protocols TLSv1.2 TLSv1.3; 
     #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
     ssl_prefer_server_ciphers on;
     location / {
         #网站主页路径。此路径仅供参考，具体请您按照实际目录操作。
         #例如，您的网站主页在 Nginx 服务器的 /etc/www 目录下，则请修改 root 后面的 html 为 /etc/www。
         root html; 
         index  index.html index.htm;
     }
 }
```

## 3. 检查并重启 Nginx
```shell
nginx -t
systemctl restart nginx.service
```
