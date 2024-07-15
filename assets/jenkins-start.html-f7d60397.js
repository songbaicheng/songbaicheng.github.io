import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-1349c99c.js";const i={},t=e(`<h1 id="初始-jenkins" tabindex="-1"><a class="header-anchor" href="#初始-jenkins" aria-hidden="true">#</a> 初始 Jenkins</h1><h2 id="快速搭建" tabindex="-1"><a class="header-anchor" href="#快速搭建" aria-hidden="true">#</a> 快速搭建</h2><p>个人理解主节点的 Jenkins 因为不推荐参与构建任务，再加性能损耗小、系统调用权限更直接、复杂度降低等优点，所以应该是安装在宿主机上的，但是目前主流的方案都因为隔离性、可移植性、易于管理和更新的原因都选择容器部署，那我们也就选择容器的方式进行搭建。</p><p>便于管理和配置复用，我们这里采用 Docker Compose 的容器编排方式创建 Jenkins 容器。我们在工作目录中创建下列 Dockerfile 和 Docker Compose。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token comment"># 选择自己的容器镜像</span>
FROM jenkins/jenkins

<span class="token comment"># 设置环境变量，也可以省略，因为不推荐使用自带的 JDK</span>
ENV <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx1024m&quot;</span>

<span class="token comment"># 安装必要的插件，当然可以选择启动容器后手动安装</span>
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN /usr/local/bin/install-plugins.sh <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /usr/share/jenkins/ref/plugins.txt<span class="token variable">)</span></span>

<span class="token comment"># 用户和权限配置（如有必要，根据实际需求调整）</span>
<span class="token environment constant">USER</span> root
RUN <span class="token function">chown</span> <span class="token parameter variable">-R</span> jenkins:jenkins /var/jenkins_home/

<span class="token comment"># 切换容器登录账户</span>
<span class="token environment constant">USER</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">jenkins</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./jenkins
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jenkins
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always  <span class="token comment"># 在生产环境中通常希望容器崩溃后自动重启</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># 映射Jenkins Web UI端口到宿主机</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;50000:50000&quot;</span>  <span class="token comment"># 映射Jenkins Agent端口</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> jenkins_data<span class="token punctuation">:</span>/var/jenkins_home  <span class="token comment"># 数据持久化，保存在宿主机的数据卷中</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock  <span class="token comment"># 如果要在Jenkins中执行Docker命令，需要映射Docker守护进程socket</span>
      <span class="token punctuation">-</span> /path/to/your/config<span class="token punctuation">:</span>/usr/share/jenkins/ref/init.groovy.d  <span class="token comment"># 若有自定义初始化脚本</span>
      <span class="token punctuation">-</span> /usr/local/maven<span class="token punctuation">:</span>/usr/local/maven <span class="token comment"># 自定义 Maven</span>
      <span class="token punctuation">-</span> /usr/local/java<span class="token punctuation">:</span>/usr/local/java <span class="token comment"># 自定义 Java</span>
      <span class="token punctuation">-</span> /usr/local/node<span class="token punctuation">:</span>/usr/local/node <span class="token comment"># 自定义 Node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 docker-compose.yml 目录下执行 <code>docker-compose up -d</code> 即可创建容器，可以用 <code>docker ps</code> 查看是否启动成功，如果成功则立即执行 <code>docker logs jenkins</code> 来显示管理员初始化密码，如果没有看到也可以执行 <code>docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword</code> 进入容器内查看初始化密码。</p><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h2>`,8),c=[t];function l(o,p){return s(),a("div",null,c)}const d=n(i,[["render",l],["__file","jenkins-start.html.vue"]]);export{d as default};
