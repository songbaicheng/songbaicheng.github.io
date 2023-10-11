import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as r,a as n,d as a,n as e,g as i,b as o,e as d}from"./app-6a007c68.js";const p="/assets/images/maintenance/nginx/nginx-install.png",v={},g=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),o(" Nginx")],-1),m=n("p",null,"Nginx七大核心应用场景：反向代理、虚拟主机、域名解析、负载均衡、防盗链、url重定向、https。",-1),u=n("p",null,"常见版本如下：",-1),b={class:"vp-card-container"},x=d('<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><ol><li>这里拿 Nginx 官方开源版作为示例，首先你得需要一台 Linux 机器并下载 Nginx 二进制包。</li></ol><figure><img src="'+p+`" alt="准备安装包" tabindex="0" loading="lazy"><figcaption>准备安装包</figcaption></figure><ol start="2"><li>使用 <code>./configure --prefix=/usr/local/nginx</code> 执行 <code>configure</code> 可执行文件，如果需要 <code>gcc</code> 依赖请先下载，如果执行期间有其他缺少的依赖补充后重新执行脚本即可。</li><li>配置完成后依次执行 <code>make</code> 和 <code>make install</code> 开始安装，注意可能需要 root 权限。</li><li>安装完成后就可以在 /usr/local/nginx 目录下看到我们安装的 Nginx 目录了，可以执行 /sbin 目录下的 nginx 脚本进行启动 nginx 服务，访问 linux 主机 ip 看是否能够启动成功，可以通过 <code>./nginx -s stop</code> 关闭 Nginx。</li></ol><h2 id="优雅起停-nginx" tabindex="-1"><a class="header-anchor" href="#优雅起停-nginx" aria-hidden="true">#</a> 优雅起停 Nginx</h2><p>首先我们要先知道几个常见的起停 Nginx 的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 Nginx</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function k(h,f){const s=t("VPCard");return c(),r("div",null,[g,m,u,n("div",b,[a(s,e(i({title:"Nginx 开源官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/maintenance/nginx/nginx.svg",link:"https://nginx.org/en/",color:"rgba(173, 216, 590, 0.15)"})),null,16),a(s,e(i({title:"Nginx 官方商业版本(F5)",desc:"点击跳转官网查看详细内容",logo:"/assets/images/maintenance/nginx/f5.svg",link:"https://nginx.com/",color:"rgba(173, 216, 590, 0.15)"})),null,16),a(s,e(i({title:"OpenResty 开源官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/maintenance/nginx/openresty.png",link:"https://openresty.com.cn/cn/",color:"rgba(173, 216, 590, 0.15)"})),null,16),a(s,e(i({title:"Tengine 开源官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/maintenance/nginx/tengine.png",link:"http://tengine.taobao.org",color:"rgba(173, 216, 590, 0.15)"})),null,16)]),x])}const y=l(v,[["render",k],["__file","Nginx.html.vue"]]);export{y as default};
