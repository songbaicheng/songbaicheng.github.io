import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-a5ecefa9.js";const l={},p=e(`<h1 id="shell-脚本" tabindex="-1"><a class="header-anchor" href="#shell-脚本" aria-hidden="true">#</a> Shell 脚本</h1><blockquote><p>所有的脚本没有特殊标注都以 Linux 机器为准，有些命令可能在 AIX 机器上会失效。</p></blockquote><h2 id="定时删除过期日志" tabindex="-1"><a class="header-anchor" href="#定时删除过期日志" aria-hidden="true">#</a> 定时删除过期日志</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ./bin.bash</span>

<span class="token assign-left variable">Log_directory</span><span class="token operator">=</span><span class="token string">&quot;/price/log&quot;</span> ＃ 日志地址
<span class="token assign-left variable">days_to_keep</span><span class="token operator">=</span><span class="token number">7</span> ＃ 保留的天数，即七天前的文件将被删除

<span class="token comment"># 计算七天前的曰期</span>
<span class="token assign-left variable">target_date</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$days_to_keep</span> days ago&quot;</span> + %Y-%m-%d<span class="token variable">)</span></span>

<span class="token comment"># 删除七天前日期格式的文件夹</span>
<span class="token function">find</span> <span class="token string">&quot;<span class="token variable">$log_directory</span>&quot;</span> <span class="token parameter variable">-type</span> d <span class="token parameter variable">-name</span> <span class="token string">&quot;????-??-??&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> folder<span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">folder_name</span><span class="token operator">=</span>＄<span class="token punctuation">(</span>basename <span class="token string">&quot;<span class="token variable">$folder</span>&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 比较文件夹的日期与目标日期</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$folder_name</span> <span class="token operator">&lt;</span> <span class="token variable">$target_date</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;删除文件夹：<span class="token variable">$folder</span>&quot;</span>
        <span class="token function">rm</span> - rf <span class="token string">&quot;＄folder&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token comment"># 删除七天前的*.1og.* 格式文件</span>
<span class="token function">find</span> <span class="token string">&quot;<span class="token variable">$log_directory</span>&quot;</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.1og.*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> <span class="token function">file</span><span class="token punctuation">;</span>
    <span class="token assign-left variable">file_date</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">stat</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;%y&quot;</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token operator">|</span> <span class="token function">cut</span> -d<span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f1</span><span class="token variable">)</span></span>

    <span class="token comment"># 比较文件的日期与目标日期</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$file_date</span> <span class="token operator">&lt;</span> <span class="token variable">$target_date</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;删除文件：<span class="token variable">$file</span>&quot;</span>
        <span class="token function">rm</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 cron 来定时运行此脚本，使用 <code>crontab -e</code> 命令编辑当前用户的 cron 任务表，然后添加以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">0</span> <span class="token number">0</span> * * * /shells/cleanup_logs.sh <span class="token comment"># 将在每天的午夜（00:00）运行脚本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存后退出，可以使用 <code>crontab -l</code> 查看是否添加成功。</p><h2 id="比较声明环境文件是否生效" tabindex="-1"><a class="header-anchor" href="#比较声明环境文件是否生效" aria-hidden="true">#</a> 比较声明环境文件是否生效</h2><p>对于声明环境变量的文件，可以用 <em><strong>export</strong></em> 关键字声明然后 <em><strong>source</strong></em> 使文件生效即可，我们判断环境变量是否已经生效可以先按行遍历拿到 export 开头的行，从中取到变量名和值，然后根据变量名获取环境变量中已经生效的值和文件中的变量值进行比较即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 初始化错误计数器</span>
<span class="token assign-left variable">error_count</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment"># 函数来处理错误计数</span>
<span class="token function-name function">count_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable"><span class="token punctuation">((</span>error_count<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token punctuation">}</span>

<span class="token comment"># 使用find命令查找以-profile结尾的环境变量文件，并处理它们</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*-profile&quot;</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> <span class="token function">file</span><span class="token punctuation">;</span> <span class="token keyword">do</span>

    <span class="token comment"># 检查文件是否存在并可读</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>

        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Reading variables from: <span class="token variable">$file</span>&quot;</span>
        <span class="token comment"># 逐行读取文件内容</span>
        <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> line<span class="token punctuation">;</span> <span class="token keyword">do</span>

            <span class="token comment"># 查找包含&quot;export&quot;关键字的行</span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span> <span class="token operator">==</span> export* <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>

                <span class="token comment"># 提取变量名和值</span>
                <span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span> <span class="token operator">|</span> <span class="token function">cut</span> -d<span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f2</span> <span class="token operator">|</span> <span class="token function">cut</span> -d<span class="token string">&#39;=&#39;</span> <span class="token parameter variable">-f1</span><span class="token variable">)</span></span>
                <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span> <span class="token operator">|</span> <span class="token function">cut</span> -d<span class="token string">&#39;=&#39;</span> -f2-<span class="token variable">)</span></span>

                <span class="token comment"># 去除文件中的单引号</span>
                <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable">\${value<span class="token operator">/</span><span class="token operator">/</span>\\&#39;<span class="token operator">/</span>}</span>
                
                <span class="token comment"># 获取对应的环境变量值</span>
                <span class="token assign-left variable">env_value</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>variable}</span>&quot;</span>
                
                <span class="token comment"># 比较文件中的值和环境变量中的值</span>
                <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$value</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;<span class="token variable">$env_value</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span>中<span class="token variable">$variable</span>的值不相同，文件中的变量值为<span class="token variable">$value</span>，环境变量中的变量值为<span class="token variable">$env_value</span>&quot;</span>
                    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Variable <span class="token variable">$variable</span> does not match. File value: <span class="token variable">$value</span>, Environment value: <span class="token variable">$env_value</span>&quot;</span>
                    count_error
                <span class="token keyword">fi</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;不能读取的文件：<span class="token variable">$file</span>&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token comment"># 判断错误计数器是否为0</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$error_count</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;环境变量完全相同！&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;环境变量有<span class="token variable">$error_count</span>个不同&quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[p];function o(i,c){return n(),a("div",null,t)}const d=s(l,[["render",o],["__file","shell.html.vue"]]);export{d as default};
