import{_ as m}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as u,a as n,d as e,n as t,g as c,w as l,b as s,e as r}from"./app-77e9afaa.js";const d="/assets/images/maintenance/nginx/nginx-install.png",v="/assets/images/maintenance/nginx/nginx-worker.jpg",b={},k=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),s(" Nginx")],-1),g=n("p",null,"Nginx七大核心应用场景：反向代理、虚拟主机、域名解析、负载均衡、防盗链、url重定向、https。",-1),h=n("p",null,"常见版本如下：",-1),x={class:"vp-card-container"},_=r('<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><ol><li>这里拿 Nginx 官方开源版作为示例，首先你得需要一台 Linux 机器并下载 Nginx 二进制包。</li></ol><figure><img src="'+d+`" alt="准备安装包" tabindex="0" loading="lazy"><figcaption>准备安装包</figcaption></figure><ol start="2"><li>使用 <code>./configure --prefix=/usr/local/nginx</code> 执行 <code>configure</code> 可执行文件，如果需要 <code>gcc</code> 依赖请先下载，如果执行期间有其他缺少的依赖补充后重新执行脚本即可。</li><li>配置完成后依次执行 <code>make</code> 和 <code>make install</code> 开始安装，注意可能需要 root 权限。</li><li>安装完成后就可以在 /usr/local/nginx 目录下看到我们安装的 Nginx 目录了，可以执行 /sbin 目录下的 nginx 脚本进行启动 nginx 服务，访问 linux 主机 ip 看是否能够启动成功，可以通过 <code>./nginx -s stop</code> 关闭 Nginx。</li></ol><h2 id="优雅起停-nginx" tabindex="-1"><a class="header-anchor" href="#优雅起停-nginx" aria-hidden="true">#</a> 优雅起停 Nginx</h2><p>首先我们要先知道几个常见的起停 Nginx 的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 Nginx</span>
./nginx

<span class="token comment"># 快速暴力停止 Nginx</span>
./nginx <span class="token parameter variable">-s</span> stop

<span class="token comment"># 优雅停止 Nginx</span>
./nginx <span class="token parameter variable">-s</span> quit

<span class="token comment"># 重新加载配置</span>
./nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而平时我们真正生产上使用服务器启动和关闭 Nginx 不会总是每次都找到此执行文件执行的，所以我们需要把起停命令添加到 systemctl 来方便我们直接起停，我们可以在 /usr/lib/systemd/system 目录下添加 nginx.service 这个文件，内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span> 
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/nginx/logs/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop
<span class="token assign-left variable">ExecQuit</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit 
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
   
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>   
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完成之后执行 <code>systemctl daemon-reload</code> 加载一下添加的配置，现在我们就可以使用 systemctl 来控制 Nginx 的起停了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 Nginx</span>
systemctl start nginx.service

<span class="token comment"># 查看 Nginx 状态</span>
systemctl status nginx.service

<span class="token comment"># 停止 Nginx</span>
systemctl stop nginx.service

<span class="token comment"># 设为开机启动</span>
systemctl <span class="token builtin class-name">enable</span> nginx.service

<span class="token comment"># 关闭开机启动</span>
systemctl disable nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="认识目录" tabindex="-1"><a class="header-anchor" href="#认识目录" aria-hidden="true">#</a> 认识目录</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> nginx
    <span class="token punctuation">-</span> conf <span class="token comment"># 配置目录</span>
    <span class="token punctuation">-</span> html <span class="token comment"># 静态资源和界面</span>
    <span class="token punctuation">-</span> logs <span class="token comment"># 日志</span>
    <span class="token punctuation">-</span> sbin <span class="token comment"># 主进程文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工作模式" tabindex="-1"><a class="header-anchor" href="#工作模式" aria-hidden="true">#</a> 工作模式</h2><p>Nginx在启动的时候会采用多进程的方式，产生 master 和 worker 两种进程进行工作，master 负责统一协调 worker 进程的工作调度，而真正工作的都是一个个的 worker 进程。</p><figure><img src="`+v+'" alt="多进程的工作模式" tabindex="0" loading="lazy"><figcaption>多进程的工作模式</figcaption></figure><h2 id="配置文件详解" tabindex="-1"><a class="header-anchor" href="#配置文件详解" aria-hidden="true">#</a> 配置文件详解</h2>',17),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"#user  nobody;"),s(`
worker_processes  `),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 工作进程个数"),s(`

`),n("span",{class:"token comment"},"#error_log  logs/error.log;"),s(`
`),n("span",{class:"token comment"},"#error_log  logs/error.log  notice;"),s(`
`),n("span",{class:"token comment"},"#error_log  logs/error.log  info;"),s(`

`),n("span",{class:"token comment"},"#pid        logs/nginx.pid;"),s(`


events `),n("span",{class:"token punctuation"},"{"),s(`
    worker_connections  `),n("span",{class:"token number"},"1024"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


http `),n("span",{class:"token punctuation"},"{"),s(`
    include       mime.types`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 引用其他的配置文件，这里的mime是告知浏览器请求文件类型解析方式的配置"),s(`
    default_type  application/octet-stream`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 默认文件通过流的方式处理"),s(`

    `),n("span",{class:"token comment"},`#log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '`),s(`
    `),n("span",{class:"token comment"},`#                  '$status $body_bytes_sent "$http_referer" '`),s(`
    `),n("span",{class:"token comment"},`#                  '"$http_user_agent" "$http_x_forwarded_for"';`),s(`

    `),n("span",{class:"token comment"},"#access_log  logs/access.log  main;"),s(`

    sendfile        on`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 文件零拷贝"),s(`
    `),n("span",{class:"token comment"},"#tcp_nopush     on;"),s(`

    `),n("span",{class:"token comment"},"#keepalive_timeout  0;"),s(`
    keepalive_timeout  `),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 长链接时长"),s(`

    `),n("span",{class:"token comment"},"#gzip  on;"),s(`

    server `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"# 一个虚拟主机配置"),s(`
        listen       `),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 端口"),s(`
        server_name  localhost`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 可解析的域名、主机名"),s(`

        `),n("span",{class:"token comment"},"#charset koi8-r;"),s(`

        `),n("span",{class:"token comment"},"#access_log  logs/host.access.log  main;"),s(`

        location / `),n("span",{class:"token punctuation"},"{"),s(`
            root   html`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 资源访问地址"),s(`
            index  index.html index.htm`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 默认页"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"#error_page  404              /404.html;"),s(`

        `),n("span",{class:"token comment"},"# redirect server error pages to the static page /50x.html"),s(`
        `),n("span",{class:"token comment"},"#"),s(`
        error_page   `),n("span",{class:"token number"},"500"),s(),n("span",{class:"token number"},"502"),s(),n("span",{class:"token number"},"503"),s(),n("span",{class:"token number"},"504"),s("  /50x.html"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 服务器错误跳转界面"),s(`
        location `),n("span",{class:"token operator"},"="),s(" /50x.html "),n("span",{class:"token punctuation"},"{"),s(`
            root   html`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"# proxy the PHP scripts to Apache listening on 127.0.0.1:80"),s(`
        `),n("span",{class:"token comment"},"#"),s(`
        `),n("span",{class:"token comment"},"#location ~ \\.php$ {"),s(`
        `),n("span",{class:"token comment"},"#    proxy_pass   http://127.0.0.1;"),s(`
        `),n("span",{class:"token comment"},"#}"),s(`

        `),n("span",{class:"token comment"},"# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000"),s(`
        `),n("span",{class:"token comment"},"#"),s(`
        `),n("span",{class:"token comment"},"#location ~ \\.php$ {"),s(`
        `),n("span",{class:"token comment"},"#    root           html;"),s(`
        `),n("span",{class:"token comment"},"#    fastcgi_pass   127.0.0.1:9000;"),s(`
        `),n("span",{class:"token comment"},"#    fastcgi_index  index.php;"),s(`
        `),n("span",{class:"token comment"},"#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;"),s(`
        `),n("span",{class:"token comment"},"#    include        fastcgi_params;"),s(`
        `),n("span",{class:"token comment"},"#}"),s(`

        `),n("span",{class:"token comment"},"# deny access to .htaccess files, if Apache's document root"),s(`
        `),n("span",{class:"token comment"},"# concurs with nginx's one"),s(`
        `),n("span",{class:"token comment"},"#"),s(`
        `),n("span",{class:"token comment"},"#location ~ /\\.ht {"),s(`
        `),n("span",{class:"token comment"},"#    deny  all;"),s(`
        `),n("span",{class:"token comment"},"#}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`


    `),n("span",{class:"token comment"},"# another virtual host using mix of IP-, name-, and port-based configuration"),s(`
    `),n("span",{class:"token comment"},"#"),s(`
    `),n("span",{class:"token comment"},"#server {"),s(`
    `),n("span",{class:"token comment"},"#    listen       8000;"),s(`
    `),n("span",{class:"token comment"},"#    listen       somename:8080;"),s(`
    `),n("span",{class:"token comment"},"#    server_name  somename  alias  another.alias;"),s(`

    `),n("span",{class:"token comment"},"#    location / {"),s(`
    `),n("span",{class:"token comment"},"#        root   html;"),s(`
    `),n("span",{class:"token comment"},"#        index  index.html index.htm;"),s(`
    `),n("span",{class:"token comment"},"#    }"),s(`
    `),n("span",{class:"token comment"},"#}"),s(`


    `),n("span",{class:"token comment"},"# HTTPS server"),s(`
    `),n("span",{class:"token comment"},"#"),s(`
    `),n("span",{class:"token comment"},"#server {"),s(`
    `),n("span",{class:"token comment"},"#    listen       443 ssl;"),s(`
    `),n("span",{class:"token comment"},"#    server_name  localhost;"),s(`

    `),n("span",{class:"token comment"},"#    ssl_certificate      cert.pem;"),s(`
    `),n("span",{class:"token comment"},"#    ssl_certificate_key  cert.key;"),s(`

    `),n("span",{class:"token comment"},"#    ssl_session_cache    shared:SSL:1m;"),s(`
    `),n("span",{class:"token comment"},"#    ssl_session_timeout  5m;"),s(`

    `),n("span",{class:"token comment"},"#    ssl_ciphers  HIGH:!aNULL:!MD5;"),s(`
    `),n("span",{class:"token comment"},"#    ssl_prefer_server_ciphers  on;"),s(`

    `),n("span",{class:"token comment"},"#    location / {"),s(`
    `),n("span",{class:"token comment"},"#        root   html;"),s(`
    `),n("span",{class:"token comment"},"#        index  index.html index.htm;"),s(`
    `),n("span",{class:"token comment"},"#    }"),s(`
    `),n("span",{class:"token comment"},"#}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"自定义虚拟主机域名",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义虚拟主机域名","aria-hidden":"true"},"#"),s(" 自定义虚拟主机域名")],-1),N=n("p",null,"在我们简单了解了 nginx.conf 文件后，我们可以看到其中每个 http 下的 server 就是一个虚拟主机，这里我们模拟一个新的虚拟主机通过不同端口访问不同的资源。",-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server "),n("span",{class:"token punctuation"},"{"),s(`
        listen       `),n("span",{class:"token number"},"88"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 端口"),s(`
        server_name  localhost`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 可解析的域名、主机名"),s(`

        location / `),n("span",{class:"token punctuation"},"{"),s(`
            root   my-html`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 资源访问地址"),s(`
            index  index.html index.htm`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 默认页"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        error_page   `),n("span",{class:"token number"},"500"),s(),n("span",{class:"token number"},"502"),s(),n("span",{class:"token number"},"503"),s(),n("span",{class:"token number"},"504"),s("  /50x.html"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 服务器错误跳转界面"),s(`
        location `),n("span",{class:"token operator"},"="),s(" /50x.html "),n("span",{class:"token punctuation"},"{"),s(`
            root   html`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("p",null,"一样的，如果我们想通过不同的域名访问不同的资源，我们可以修改 server_name 来区分资源路径。",-1),B=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server "),n("span",{class:"token punctuation"},"{"),s(`
        listen       `),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 端口"),s(`
        server_name  www.XXX.com`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 可解析的域名、主机名"),s(`

        location / `),n("span",{class:"token punctuation"},"{"),s(`
            root   my-html`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 资源访问地址"),s(`
            index  index.html index.htm`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 默认页"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        error_page   `),n("span",{class:"token number"},"500"),s(),n("span",{class:"token number"},"502"),s(),n("span",{class:"token number"},"503"),s(),n("span",{class:"token number"},"504"),s("  /50x.html"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 服务器错误跳转界面"),s(`
        location `),n("span",{class:"token operator"},"="),s(" /50x.html "),n("span",{class:"token punctuation"},"{"),s(`
            root   html`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=r('<h3 id="虚拟主机域名匹配规则" tabindex="-1"><a class="header-anchor" href="#虚拟主机域名匹配规则" aria-hidden="true">#</a> 虚拟主机域名匹配规则</h3><ul><li>完整匹配，如果配置的是完整的域名，则按照完整的域名进行匹配，如果配置了多个，则按照从上到下的优先级来决定。server_name 配置项后可以跟多个域名，用空格隔开区分。</li><li>通配符匹配，可以通过*来匹配域名。</li><li>正则匹配，一般用于二级域名来使用，通过正则表达式来匹配域名。</li></ul><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><p>反向代理不是什么高不可攀的东西，如果想理解反向代理我们必须结合正向代理一起理解，一句话来说就是站在用户角度对后台服务器是否可见，如果是正向代理，就好像我们科学上网，配置一台代理服务器访问海外的服务器，我们是知道海外服务器ip地址的，这就是正向，同理，Nginx 作为网关入口，往往是和内网的后台服务器配合，用户访问 Nginx 看不到真实的后台服务器，所以 Nginx 的代理实现是反向的。</p><p>Nginx 作为反向代理服务器的时候，设计往往是隧道式的，即所有的请求都必须从 Nginx 进入，这就是所谓的隧道式的含义，而如果是一些下载的请求，返回的数据和进入的请求竞争带宽则非常影响性能，所以就有了更高性能的 lvs 来做负载均衡，或者是内网后台服务器只允许进入走 Nginx 代理，而发送则接入外围网管直接和请求方通讯这种方式。</p><p>而我们开启代理非常简单，只需要我们在 server 中 location 下编辑 proxy_pass 即可实现代理跳转。</p>',6),F=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server "),n("span",{class:"token punctuation"},"{"),s(`
        listen       `),n("span",{class:"token number"},"88"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 端口"),s(`
        server_name  localhost`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 可解析的域名、主机名"),s(`

        location / `),n("span",{class:"token punctuation"},"{"),s(`
            proxy_pass   http://www.baidu.com`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 代理服务器"),s(`
            `),n("span",{class:"token comment"},"# root   /usr/local/nginx/my-html; # 资源访问地址"),s(`
            `),n("span",{class:"token comment"},"# index  index.html index.htm; # 默认页"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        error_page   `),n("span",{class:"token number"},"500"),s(),n("span",{class:"token number"},"502"),s(),n("span",{class:"token number"},"503"),s(),n("span",{class:"token number"},"504"),s("  /50x.html"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 服务器错误跳转界面"),s(`
        location `),n("span",{class:"token operator"},"="),s(" /50x.html "),n("span",{class:"token punctuation"},"{"),s(`
            root   html`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"负载均衡",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#负载均衡","aria-hidden":"true"},"#"),s(" 负载均衡")],-1),I=n("h3",{id:"轮训",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#轮训","aria-hidden":"true"},"#"),s(" 轮训")],-1),S=n("p",null,"首先我们需要使用 upstream 配置一个代理集，然后通过 proxy_pass 指定这个代理集，之后我们每次请求这个 server 就会自动轮流执行这个代理集中的地址。",-1),V=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("upstream webs "),n("span",{class:"token punctuation"},"{"),s(`
	server localhost:88`),n("span",{class:"token punctuation"},";"),s(`
	server localhost:89`),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    server `),n("span",{class:"token punctuation"},"{"),s(`
        listen       `),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},";"),s(`
        server_name  localhost`),n("span",{class:"token punctuation"},";"),s(`

        location / `),n("span",{class:"token punctuation"},"{"),s(`
	    proxy_pass   http://webs`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        error_page   `),n("span",{class:"token number"},"500"),s(),n("span",{class:"token number"},"502"),s(),n("span",{class:"token number"},"503"),s(),n("span",{class:"token number"},"504"),s("  /50x.html"),n("span",{class:"token punctuation"},";"),s(`
        location `),n("span",{class:"token operator"},"="),s(" /50x.html "),n("span",{class:"token punctuation"},"{"),s(`
            root   html`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    server `),n("span",{class:"token punctuation"},"{"),s(`
        listen       `),n("span",{class:"token number"},"88"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 端口"),s(`
        server_name  localhost`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 可解析的域名、主机名"),s(`

        location / `),n("span",{class:"token punctuation"},"{"),s(`
	    proxy_pass   http://www.baidu.com`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 代理服务器"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        error_page   `),n("span",{class:"token number"},"500"),s(),n("span",{class:"token number"},"502"),s(),n("span",{class:"token number"},"503"),s(),n("span",{class:"token number"},"504"),s("  /50x.html"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 服务器错误跳转界面"),s(`
        location `),n("span",{class:"token operator"},"="),s(" /50x.html "),n("span",{class:"token punctuation"},"{"),s(`
            root   html`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    server `),n("span",{class:"token punctuation"},"{"),s(`
        listen       `),n("span",{class:"token number"},"89"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 端口"),s(`
        server_name  localhost`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 可解析的域名、主机名"),s(`

        location / `),n("span",{class:"token punctuation"},"{"),s(`
            proxy_pass   http://www.taobao.com`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 代理服务器"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        error_page   `),n("span",{class:"token number"},"500"),s(),n("span",{class:"token number"},"502"),s(),n("span",{class:"token number"},"503"),s(),n("span",{class:"token number"},"504"),s("  /50x.html"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# 服务器错误跳转界面"),s(`
        location `),n("span",{class:"token operator"},"="),s(" /50x.html "),n("span",{class:"token punctuation"},"{"),s(`
            root   html`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(R,J){const i=o("VPCard"),a=o("CodeDemo");return p(),u("div",null,[k,g,h,n("div",x,[e(i,t(c({title:"Nginx 开源官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/maintenance/nginx/nginx.svg",link:"https://nginx.org/en/",color:"rgba(173, 216, 590, 0.15)"})),null,16),e(i,t(c({title:"Nginx 官方商业版本(F5)",desc:"点击跳转官网查看详细内容",logo:"/assets/images/maintenance/nginx/f5.svg",link:"https://nginx.com/",color:"rgba(173, 216, 590, 0.15)"})),null,16),e(i,t(c({title:"OpenResty 开源官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/maintenance/nginx/openresty.png",link:"https://openresty.com.cn/cn/",color:"rgba(173, 216, 590, 0.15)"})),null,16),e(i,t(c({title:"Tengine 开源官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/maintenance/nginx/tengine.png",link:"http://tengine.taobao.org",color:"rgba(173, 216, 590, 0.15)"})),null,16)]),_,e(a,{id:"code-demo-76",type:"normal",title:"nginx.conf",code:"eJy9VttOG0cYfpWJQeIm2CaBNnXUiyhNAhKJUEmv6mo12R3bI+yd7cyYQKNUpCKlClCoGkggEJQmKKitIFHLoQHKw5Rdr6/6Cv1n9mCvwUTtRdda7+zMN998/2H+2XspUSLlciqX6qgKwhGy2R1mjV/O23cZHyHccDgziRBEINRzGXUgd3f9+HDFP3pW25g+3vvZW3iTt/N2B+GccaPMigjBn8jo9zQ0gan9oFpOUpO8B0TtAgMIgBxqofDSILtI7bE09OrhvE1GiS0Fupe3FSQ0wWS2TUxJma2MyF7oBfD9AF+S0onQ1DbLVYuE9BVaIWk57hChrT5YqD3ecB/uHO8v1pYn6w9na4eb3uLU8f7O3wcz/tFSfWoG+tUk7+mW+8Oj2tq6tz3nv/7OXdrwt3a9t98E6Nrbfff5tP/6pfd83lv8wz2Yi+kCFRYp4GpZGmpphLDjlKmJlfYMMyWR3UJygitKU33/qb/5KqCtTyz7R1Pe9gNgC2jdV5O1+W+VjYq1A7xlFBivYAmmYQqdXZ2cVJgkBrYsjrpR9KrT4PNOCaZANExc/gLlUzD4ZZUImU+hrpAxikPj6uoUEsuqQJ0qhYw745IIQ0BAFIHytMFJgXDCz2aJwEqIgYswH/BR55iy4i7mFrFUK5/q0pHXXNhUmdqUQkFHkEPK6BgKoqwCLUexRsxWDg1d+WzHm971f18NWaXpGDZzqqIUQeMFRwhxcJmOEkN5i1XBt1kYVWOnDH3Qp6O2cFT/8U/v+3XvyQ60Y67iV9RJsIP1oxCJezDneG8Ctpq/tOxNrx3v7Xsr75ozRm8GKiSJ3i5l1UK1X7bcuZcNSMBn2LgCZuvAlpiQOrnntoKEhORx19bc+dm/Jh4E60A70qNVmiXMBZFohNFL3TzWerr7FX+6bQyCPRzkNspEmzC6OGPgMlSSlbKS6G9Peu/m/c2j+pNNd+WNuzqRhFPbImPhI60mNZqNrVJ/sd2YpQtArD0oPg5kG0K92d5kRmagR5Mm7UWcWJRDYYlCpUmQIhFIMiRLBKkNQU3dhzJ92UBbE0ej2awA9WWzcF+A+yLcICeeq/N0ZdZ99AIKS/3xkr+15e/+5h/+WluYqa/+dIprP25MPsvJ7TyD4AAYG9fGDPUPIWFy6kCFBfuuONiE3iD1qF2E5EU9Fz5MZ+HXk7uUPdVMKEShrq9RPp92Sk5nsypdD/SK4AoB5RrESSeXycTETUI7WpWqGacIvY6FvHpjIApTG8EfZbP/XXLoyehq8aiGFECFWaSRXcmF24ETeQ0rtyfluILQ8NVPB4ZuG9cHBq/dunLzGuRN6IbOCBi86yrQypU8/5LU4gy3W8QeR8E2V96GTAtfVIUV5xEthKnSJZDFzGpFnQjKYc0kcEabVS7QXSpLSJ/qgGY2eW9EMhCSkjwREC0K4XIiDCBcPcOzP8Bi+AIpQVaMUi6ruIxU0UJVodKjQscQK6CBoe7zSDkMHti2kMO47L6DBbGU6gItVrkWEzKGj6h8N51zLUU6jvrJQcHASbAi7CIo5k2oRBGPUMpOiiGpQlvS+rVxTJ1eaeOj92QViIfOKqtN0NCvQWJE/f23bw8Nh4L/nWt6ey8iIRJi2hxeCRNhimESLmlBfTGFeaw60g5JyG0BGiMEUkUDoXWSE759BXjOMHW5U51wCBIrNzw8mOs5QRyh42O/T0FaV6cOxAki1j9woz93Dt/6bHAwd+7mJ32tbI7+YgJSbX48rfkj5P+Nrv5L3f8HZncU6A=="},{default:l(()=>[f]),_:1}),E,N,e(a,{id:"code-demo-85",type:"normal",title:"%E9%80%9A%E8%BF%87%E7%AB%AF%E5%8F%A3%E8%87%AA%E5%AE%9A%E4%B9%89%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA",code:"eJyrVirOSM3JUbJSKk4tKkstUqiOyVOAgpzM4pJUGM/CwlpBWeH56vVP+xcjlEA0xecl5qYC1ecnJ+Zk5BeXgFQ+7V//YvniZ/MmPJ/V8nT+/KcTeh83ND7ZsfvZnF1AdkwekjVAbSWZ+XkK+siWg0BRfn4JkMqt1M0oyc0Bmfpia8uzXRNerNv/cvq6p3M2PJ3bgKojMy8ltQJK6YE0IZgg7S93z3ixbsnLhVsRumqRnZJaVJRfFF+QmA70jYKpgQEQGwGxMRCbKCjomxpADAUZ9WxO79OuhU9nrng5ZeaL9etfbN/8Yu+a51N7Xs5dhMVrtgjNODwJNhfFWVBKqRYAC2qYyA=="},{default:l(()=>[y]),_:1}),A,e(a,{id:"code-demo-91",type:"normal",title:"%E9%80%9A%E8%BF%87%E5%9F%9F%E5%90%8D%E8%87%AA%E5%AE%9A%E4%B9%89%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA",code:"eJyrVirOSM3JUbJSKk4tKkstUqiOyVOAgpzM4pJUGM/CwFpBWeH56vVP+xcjlEA0xecl5qYqKJSXl+tFREToJefngtQ+7V//YvniZ/MmPJ/V8nT+/KcTeh83ND7ZsfvZnF1AdkwekkX5yYklmfl5CvrI1oNAUX5+CZDKrdTNKMnNAZn6YmvLs10TXqzb/3L6uqdzNjyd24CqIzMvJbUCSumBNCGYIO0vd894sW7Jy4VbEbpqkZ2SWlSUXxRfkJgO9I+CqYEBEBsBsTEQmygo6JsaQAwFGfVsTu/TroVPZ654OWXmi/XrX2zf/GLvmudTe17OXYTFa7YIzTg8CTYXxVlQSqkWAIdjmP8="},{default:l(()=>[B]),_:1}),U,e(a,{id:"code-demo-126",type:"normal",title:"%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE",code:"eJxtUOFKAkEQfpXl+p0rlSBGbyLIpYt3cLcru2sqIhhIPyLxfhRlaGIGBYUXhBRK9DC5d3tv0a5ap9LAMDMw3zfzfXWDWchxjIzBED1BFNSzGKzCsRlHv1M6fQh2QPjsi84oXlmCcth0kdonedOxCON6U3R8+TgK7rzwtiUGA+G1v5un849Z0JuqPovXzigYtwkGcP24jhIl1VquZDKmBovzUgbCSqWSODbtQjmRJ64+NJ+NQu8s6LXF+VB0nzYZdgAlhKsGlhmFiwchLtq4Ct3arsVdRzPISSuYenL8FV2PRe9V9JvbJDYuoCpYloSGxa0miGY3cvwQDScxrrGuEFFKqNJRVCaBVDKpck/lvsoD9VoquSTVVH86osuu9H35/iY/X8Kri6h//49jRzF427uV7gXvxlurYjR+AO7tuRQ="},{default:l(()=>[F]),_:1}),C,I,S,e(a,{id:"code-demo-138",type:"normal",title:"%E7%AE%80%E5%8D%95%E7%9A%84%E8%BD%AE%E8%AE%AD%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1",code:"eJzVUM1Kw0AQfpUl3pugFtIW36RQtnUxgSQbdremUgoK4kEszUEPlWrRHBQUcvCgWHwam5++hbPaJkGUiorgwLA7szPf9+3XVbhBLEupKm2XC0awjTzS5Khbd+qCE7ZNGLJoC1sG5aKq67WP+xXoI4gePL9e5iMAIysZlskFWVS6Nl/IZxsOtgmMLUAlU74MXWFSB6lvymTPZbSz03Ax51AYQrhVVZXaC8iZHBmEMcpgfgtYUFnTIFch1yDXEVLLWqdkCNsqrGesG/lz8UsyGKVSzbtNIC4cX7NEr6EVlNyE0SBY6g1MRoMwvQricz853Y/G48jvP+/uTR8m8egR7t8yz/NKTWxutkstakuK6SRI/IN41I8OL6Lh9Q99BcAManY8TMMwvb9Ln26Tk6PZ2eXvu77M78rf+F2U/ZnrAtMmpv/fdqX3ApRRd6U="},{default:l(()=>[V]),_:1})])}const q=m(b,[["render",w],["__file","Nginx.html.vue"]]);export{q as default};
