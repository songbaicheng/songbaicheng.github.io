import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as r,a as n,b as p,e as c,d as a}from"./app-809c10a6.js";const o={},l=a('<h1 id="spring-security" tabindex="-1"><a class="header-anchor" href="#spring-security" aria-hidden="true">#</a> Spring Security</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>官方的解释是 Spring Security 是一个提供身份验证、授权和防止常见攻击的框架，正如它说的那样，其核心功能就是 <strong><em>认证</em></strong> 和 <strong><em>授权</em></strong>。</p><ul><li>认证（Authentication）：系统确认一个用户的身份是否真实、合法。</li><li>授权（Authorization）：系统对用户进行的访问控制，即通过了认证后用户对资源的访问限制。</li></ul><p>目前提到安全框架，Shiro 和 Spring Security 算得上是分庭抗争了，并且 Shiro 主打的是简单、轻量，但却没有 Spring Security 灵活，并且我们如果使用 Spring 框架的话，学习 Spring Security 更是如鱼得水，并且是重中之重。如果想要更加深入的了解 Spring Security ，请预览下面官方文档的链接进行研读。</p>',5),d={href:"https://spring.io/projects/spring-security",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h3 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h3><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">implementation</span> <span class="token string">&#39;org.springframework.boot:spring-boot-starter-security&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单配置启动" tabindex="-1"><a class="header-anchor" href="#简单配置启动" aria-hidden="true">#</a> 简单配置启动</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">security</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> user <span class="token comment"># 用户名</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> songbaicheng <span class="token comment"># 密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目启动后随便访问一个路径就会跳转到自带的 /login 窗口进行登录。如果不指定用户名和密码，用户名默认是 <code>user</code>，密码会在项目启动的时候生成一个 UUID 在控制台打印出来。</p>`,7);function g(k,m){const s=t("ExternalLinkIcon");return i(),r("div",null,[l,n("blockquote",null,[n("p",null,[n("a",d,[p("https://spring.io/projects/spring-security"),c(s)])])]),u])}const b=e(o,[["render",g],["__file","spring-security.html.vue"]]);export{b as default};
