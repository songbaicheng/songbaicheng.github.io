import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,a}from"./app-7fe0bd69.js";const i="/assets/images/study/maintenance/website-certificate/ssl.png",t={},c=a('<h1 id="网站证书" tabindex="-1"><a class="header-anchor" href="#网站证书" aria-hidden="true">#</a> 网站证书</h1><p>在你想做一个正规的并且所有人都可以访问的网站的时候，再使用 ip 访问就显得没有那么方便了，这个时候就需要一个域名来访问网站。购买域名的流程在一些云服务商已经有一条龙的服务了，并且在你购买完域名就说明你已经经过了购买服务器、搭建网站、备案等流程了，而接下来的步骤就是解析 SSL 证书了。</p><h1 id="linux-证书安装部署" tabindex="-1"><a class="header-anchor" href="#linux-证书安装部署" aria-hidden="true">#</a> Linux 证书安装部署</h1><h2 id="_1-下载证书" tabindex="-1"><a class="header-anchor" href="#_1-下载证书" aria-hidden="true">#</a> 1. 下载证书</h2><p>在你购买域名的服务商界面下载系统对应的 SSL 证书，内部重要的两个文件为后缀是 key 和 pem 的文件。</p><figure><img src="'+i+`" alt="SSL 证书文件" tabindex="0" loading="lazy"><figcaption>SSL 证书文件</figcaption></figure><p>下载到服务器的指定目录下，例如 /usr/local/nginx/conf/cert 目录下。</p><h2 id="_2-编辑-nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-编辑-nginx-配置文件" aria-hidden="true">#</a> 2. 编辑 Nginx 配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
     <span class="token comment">#SSL 默认访问端口号为 443</span>
     listen <span class="token number">443</span> ssl<span class="token punctuation">;</span> 
     <span class="token comment">#请填写绑定证书的域名</span>
     server_name cloud.tencent.com<span class="token punctuation">;</span> 
     <span class="token comment">#请填写证书文件的相对路径或绝对路径</span>
     ssl_certificate cert/debugking.top.pem<span class="token punctuation">;</span>
     <span class="token comment">#请填写私钥文件的相对路径或绝对路径</span>
     ssl_certificate_key  cert/debugking.top.key<span class="token punctuation">;</span>
     ssl_session_timeout 5m<span class="token punctuation">;</span>
     <span class="token comment">#请按照以下协议配置</span>
     ssl_protocols TLSv1.2 TLSv1.3<span class="token punctuation">;</span> 
     <span class="token comment">#请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。</span>
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>RC4:<span class="token operator">!</span>DHE<span class="token punctuation">;</span> 
     ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
     location / <span class="token punctuation">{</span>
         <span class="token comment">#网站主页路径。此路径仅供参考，具体请您按照实际目录操作。</span>
         <span class="token comment">#例如，您的网站主页在 Nginx 服务器的 /etc/www 目录下，则请修改 root 后面的 html 为 /etc/www。</span>
         root html<span class="token punctuation">;</span> 
         index  index.html index.htm<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-检查并重启-nginx" tabindex="-1"><a class="header-anchor" href="#_3-检查并重启-nginx" aria-hidden="true">#</a> 3. 检查并重启 Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-t</span>
systemctl restart nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[c];function r(o,d){return s(),e("div",null,l)}const m=n(t,[["render",r],["__file","website-certificate.html.vue"]]);export{m as default};
