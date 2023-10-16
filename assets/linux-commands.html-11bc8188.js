import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-6f9c27b0.js";const i={},l=e(`<h1 id="常用-linux-命令" tabindex="-1"><a class="header-anchor" href="#常用-linux-命令" aria-hidden="true">#</a> 常用 Linux 命令</h1><p>后段开发者难免需要经常和服务器打交道，自己把经常用到的命令都统计下来方便翻阅查看。</p><h2 id="linux-关机重启" tabindex="-1"><a class="header-anchor" href="#linux-关机重启" aria-hidden="true">#</a> Linux 关机重启</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关机</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now

<span class="token comment"># 重启</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh-key" tabindex="-1"><a class="header-anchor" href="#ssh-key" aria-hidden="true">#</a> ssh key</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> your_email@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自定义快捷指令" tabindex="-1"><a class="header-anchor" href="#自定义快捷指令" aria-hidden="true">#</a> 自定义快捷指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -alF&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="后台运行命令" tabindex="-1"><a class="header-anchor" href="#后台运行命令" aria-hidden="true">#</a> 后台运行命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 后台运行,并且有nohup.out输出</span>
<span class="token function">nohup</span> xxx <span class="token operator">&amp;</span>

<span class="token comment"># 后台运行, 不输出任何日志</span>
<span class="token function">nohup</span> xxx <span class="token operator">&gt;</span> /dev/null <span class="token operator">&amp;</span>

<span class="token comment"># 后台运行, 并将错误信息做标准输出到日志中 </span>
<span class="token function">nohup</span> xxx <span class="token operator">&gt;</span>out.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建和查看定时任务" tabindex="-1"><a class="header-anchor" href="#创建和查看定时任务" aria-hidden="true">#</a> 创建和查看定时任务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看定时任务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 编辑定时任务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压缩命令" tabindex="-1"><a class="header-anchor" href="#解压缩命令" aria-hidden="true">#</a> 解压缩命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 压缩目录为 tar 文件</span>
<span class="token function">tar</span> zcvf xxx.tar

<span class="token comment"># 压缩目录为 zip 文件</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> xxx.zip

<span class="token comment"># 解压 tar 文件到当前目录</span>
<span class="token function">tar</span> zxvf xxx.tar
 
<span class="token comment"># 解压 tar 到指定文件夹</span>
<span class="token function">tar</span> zxvf xxx.tar <span class="token parameter variable">-C</span> /xxx/yyy/

<span class="token comment"># 解压 zip 到当前目录</span>
<span class="token function">unzip</span> xxx.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vim-命令" tabindex="-1"><a class="header-anchor" href="#vim-命令" aria-hidden="true">#</a> vim 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#normal模式下 g表示全局, x表示查找的内容, y表示替换后的内容</span>
:%s/x/y/g
 
<span class="token comment">#normal模式下</span>
<span class="token number">0</span>  <span class="token comment"># 光标移到行首(数字0)</span>
$  <span class="token comment"># 光标移至行尾</span>
<span class="token builtin class-name">shift</span> + g <span class="token comment"># 跳到文件最后</span>
gg <span class="token comment"># 跳到文件头</span>
 
<span class="token comment"># 显示行号</span>
:set nu
 
<span class="token comment"># 去除行号</span>
:set nonu
 
<span class="token comment"># 检索</span>
/xxx<span class="token punctuation">(</span>检索内容<span class="token punctuation">)</span>  <span class="token comment"># 从头检索, 按n查找下一个</span>
?xxx<span class="token punctuation">(</span>检索内容<span class="token punctuation">)</span>  <span class="token comment"># 从尾部检索</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[l];function d(r,t){return s(),a("div",null,c)}const m=n(i,[["render",d],["__file","linux-commands.html.vue"]]);export{m as default};
