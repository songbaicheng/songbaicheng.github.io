import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c,d as o,a as n,b as s,e as i}from"./app-c4653423.js";const l={},u=n("h1",{id:"ecmascript-6-0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ecmascript-6-0","aria-hidden":"true"},"#"),s(" ECMAScript 6.0")],-1),r=n("h2",{id:"知识总览",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#知识总览","aria-hidden":"true"},"#"),s(" 知识总览")],-1),d=i(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p>ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。当然新版本的出现就是为了解决旧版本的一些问题，不过更新之后感觉 JS 更像 Java 了，哈哈哈，只能说语言之间相互取其精华，去其糟粕。话不多说直接开始</p><h3 id="let-与-const" tabindex="-1"><a class="header-anchor" href="#let-与-const" aria-hidden="true">#</a> let 与 const</h3><ul><li>let：声明的变量只在 let 命令所在的代码块内有效，不支持变量提升，并且只能声明一次。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 输出十个 10</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出 0123456789</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>const：声明一个只读的常量，一旦声明常量的值就不能改变，说明声明的同时就必须初始化。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token string">&quot;3.1415926&quot;</span><span class="token punctuation">;</span>
<span class="token constant">PI</span>  <span class="token comment">// 3.1415926</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h3><p>解构赋值是对赋值运算符的扩展，针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。</p><h4 id="数组模型的解构" tabindex="-1"><a class="header-anchor" href="#数组模型的解构" aria-hidden="true">#</a> 数组模型的解构</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 基本</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a = 1，b = 2，c = 3</span>

<span class="token comment">// 嵌套 </span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a = 1，b = 2，c = 3</span>

<span class="token comment">// 忽略</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a = 1，c = 3</span>

<span class="token comment">// 默认值</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a = 2</span>

<span class="token comment">// 不完全解构</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a = 1, b = undefined</span>

<span class="token comment">// 剩余运算符</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token operator">...</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a = 1, b = [2, 3]</span>

<span class="token comment">// 字符串，解构的目标若为可遍历对象，皆可进行解构赋值，即实现对象的 Iterator 接口的数据。</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;bye&#39;</span><span class="token punctuation">;</span> <span class="token comment">// a = &#39;b&#39;, b = &#39;y&#39;, c = &#39;e&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对象模型的解构" tabindex="-1"><a class="header-anchor" href="#对象模型的解构" aria-hidden="true">#</a> 对象模型的解构</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13);function k(m,v){const a=e("Mermaid");return p(),c("div",null,[u,r,o(a,{id:"mermaid-6",code:"eJxlkM1Kw0AUhfc+RZbtJuAPvoG4EsQ8QYwjFJJMSbIwO5Gqi0AqSFtdWIihmoVpE0GoJG1fJndmHsMkRrimZzffOTP3zDV65oWh9nckyaLU6XSOlMNutzxV2pUhTNiTXyx9EURivYZ82FiVdOJIpSVp1LQdxMV7yKYD8eXBdY6w4hrnVG/Angx3t3w1h8W3SAOUYuMEXqcIVDpR+/UkheA5lU4teuXW3hm51ImGfeY9QjpqXYB4wj/eiuVni7NR8r9uHW63a5I8GzRwXxabBz7/fdMXixiGM5SH+1UZx7vZxEUWwnOEmKarti3xNMPdowBeJg04kCG/YfGM52MeeShV/t7o2WS75zExiaU61NpuoNquqf3hH6tRtFY="}),d])}const f=t(l,[["render",k],["__file","es6.html.vue"]]);export{f as default};
