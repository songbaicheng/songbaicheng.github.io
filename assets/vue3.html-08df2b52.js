import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as u,c as r,a as n,b as s,d as a,w as d,n as p,g as i,e as o}from"./app-30b6e21f.js";const v="/assets/images/study/frontend/framework/vue3/init-vue3-project.png",k={},m=o('<h1 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h1><h2 id="vue3-和-vue-2" tabindex="-1"><a class="header-anchor" href="#vue3-和-vue-2" aria-hidden="true">#</a> Vue3 和 Vue 2</h2><p>问过一些从事前端的朋友，他们大部分都还在用 Vue2，倒不是因为不想用 3，主要是公司的框架都是2，如果重新改造得不偿失，但是他们自己都是已经在使用 3 开始做项目了。学习 Vue3 之前还是建议有一些 Vue2 的基础，官网给出了 3 中我们值得关注的一些新特性：</p><ul><li>组合式 API</li><li>Teleport 组件</li><li>Fragments 片段</li><li>Emits 组件选项</li><li>来自 @vue/runtime-core 的 createRenderer API 用来创建自定义渲染函数</li><li>单文件组件中的状态驱动的 CSS 变量</li><li>新增全局规则和针对插槽内容的规则</li><li>Suspense</li></ul><p>新特性还是非常多的，其中最直观也是最重要的就是 组合式API 的出现，它取代了 Vue2 的 选项式API 的风格，在灵活性和逻辑的复用性上有了很大的提升，官网也是推荐开发使用组合式 API + 单文件组件（SFC）的方式，所以我们也遵循此道来进行 Vue3 的学习。</p>',5),g={class:"vp-card-container"},h=o(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p>确保在安装了最新版本的 Node.js，并且你的当前工作目录正是打算创建项目的目录下执行下面命令。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据安装指引可能根据个人不同的选项初始化出目录结构不太相同的项目，但是我们只关注 Vue 的文件，我们只关注根目录中 src 里的文件。</p><figure><img src="`+v+`" alt="初始化目录" width="300" height="500" tabindex="0" loading="lazy"><figcaption>初始化目录</figcaption></figure><p>我们把将目光聚集在 App.vue 这个文件上，作为 Vue 的全局入口文件，我们可以先把其他扰乱视线的东西删除，把它作为一个干净的单文件组件来写第一个 demo 案例。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ count }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就得到了一个最简单的自增按钮的界面，至于其中的setup、ref等“新面孔”在下面的学习里再缓缓道来。</p><h2 id="三种书写风格" tabindex="-1"><a class="header-anchor" href="#三种书写风格" aria-hidden="true">#</a> 三种书写风格</h2>`,9);function b(f,_){const c=t("RouterLink"),e=t("VPCard");return u(),r("div",null,[m,n("blockquote",null,[n("p",null,[s("所有的测试代码都在博客"),a(c,{to:"/"},{default:d(()=>[s("首页")]),_:1}),s("中的 vue3-study-demo 中找到。")])]),n("div",g,[a(e,p(i({title:"Vue3 官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/study/frontend/framework/vue3/vue.svg",link:"https://cn.vuejs.org",color:"rgba(173, 216, 590, 0.15)"})),null,16),a(e,p(i({title:"Vue2 官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/study/frontend/framework/vue3/vue.svg",link:"https://v2.cn.vuejs.org",color:"rgba(173, 216, 590, 0.15)"})),null,16)]),h])}const w=l(k,[["render",b],["__file","vue3.html.vue"]]);export{w as default};
