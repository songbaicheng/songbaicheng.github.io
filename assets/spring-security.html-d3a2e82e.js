import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,d as c,n as i,g as l,a as n,b as s,e as u}from"./app-55832c4d.js";const r="/assets/images/study/backend/java/spring-boot/spring-security/spring-security-process.png",d={},k=n("h1",{id:"spring-security",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-security","aria-hidden":"true"},"#"),s(" Spring Security")],-1),v=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),m=n("p",null,"目前提到安全框架，Shiro 和 Spring Security 算得上是分庭抗争了，并且 Shiro 主打的是简单、轻量，但却没有 Spring Security 灵活，在 Spring Security 支持 OAuth2 之后更加贴合当前社会需求，并且我们如果使用 Spring 框架的话，学习 Spring Security 更是如鱼得水，并且是重中之重。如果想要更加深入的了解 Spring Security ，请预览下面官方文档的链接进行研读。",-1),b=u('<p>官方的解释是 Spring Security 是一个提供身份验证、授权和防止常见攻击的框架，正如它说的那样，其核心功能就是 <strong><em>认证</em></strong> 和 <strong><em>授权</em></strong>。</p><ul><li>认证（Authentication）：系统确认一个用户的身份是否真实、合法。</li><li>授权（Authorization）：系统对用户进行的访问控制，即通过了认证后用户对资源的访问限制。</li></ul><p>Spring Security 的重点是对所有进入系统的请求进行拦截，校验其是否可以访问其所期望的资源。而 Spring Security 对于 Web 资源的保护都是通过 Filter 进行保护的，而这些 Filter 都是通过注入到 Spring 容器中的 SecurityFilterChain 过滤器链来实现的，</p><figure><img src="'+r+`" alt="Spring Security 流程图" tabindex="0" loading="lazy"><figcaption>Spring Security 流程图</figcaption></figure><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h3 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h3><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">implementation</span> <span class="token string">&#39;org.springframework.boot:spring-boot-starter-security&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单配置启动" tabindex="-1"><a class="header-anchor" href="#简单配置启动" aria-hidden="true">#</a> 简单配置启动</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">security</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> user <span class="token comment"># 用户名</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> songbaicheng <span class="token comment"># 密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目启动后随便访问一个路径就会跳转到自带的 /login 窗口进行登录。如果不指定用户名和密码，用户名默认是 <code>user</code>，密码会在项目启动的时候生成一个 UUID 在控制台打印出来。</p><h3 id="配置登录用户" tabindex="-1"><a class="header-anchor" href="#配置登录用户" aria-hidden="true">#</a> 配置登录用户</h3><p>Spring Security 提供了基于内存和持久化两种添加用户的方式，工作中常用的当然是选择持久化的方式居多，外加基于持久化的方式加 ORM 框架新增总共三种方式实现，进行下面几种测试点的时候，一定要注意只能同时存在一种添加用户的方式，如果存在的方式过多则会存在异常。</p><h4 id="基于内存添加用户" tabindex="-1"><a class="header-anchor" href="#基于内存添加用户" aria-hidden="true">#</a> 基于内存添加用户</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">InMemoryUserDetailsManager</span> inMemoryUserDetailsManager <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">UserDetails</span> userDetails1 <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">withUsername</span><span class="token punctuation">(</span><span class="token string">&quot;songbaicheng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;{noop}songbaicheng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;role1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserDetails</span> userDetails2 <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">withUsername</span><span class="token punctuation">(</span><span class="token string">&quot;songbaicheng1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;{noop}songbaicheng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;role2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserDetails</span> userDetails3 <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">withUsername</span><span class="token punctuation">(</span><span class="token string">&quot;songbaicheng2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;{noop}songbaicheng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;role3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryUserDetailsManager</span><span class="token punctuation">(</span>userDetails1<span class="token punctuation">,</span> userDetails2<span class="token punctuation">,</span> userDetails3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于-jdbc-添加用户" tabindex="-1"><a class="header-anchor" href="#基于-jdbc-添加用户" aria-hidden="true">#</a> 基于 JDBC 添加用户</h4><p>首先需要引入数据库持久化依赖</p><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">implementation</span> <span class="token string">&#39;mysql:mysql-connector-java:8.0.25&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建对应数据库并配置连接，具体的建表语句官方已经帮我们放在下面路径中的依赖包里了,其中的语法可能并不支持所有数据库，如果你使用 MySQL 数据库可以使用以下语句。</p><blockquote><p>/spring-security-core-6.1.0.jar!/org/springframework/security/core/userdetails/jdbc/users.ddl</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> users<span class="token punctuation">(</span>
  username <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  enabled <span class="token keyword">boolean</span> <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> authorities <span class="token punctuation">(</span>
  username <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  authority <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  <span class="token keyword">constraint</span> fk_authorities_users <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span> <span class="token keyword">references</span> users<span class="token punctuation">(</span>username<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">unique</span> <span class="token keyword">index</span> ix_auth_username <span class="token keyword">on</span> authorities <span class="token punctuation">(</span>username<span class="token punctuation">,</span>authority<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/<span class="token punctuation">[</span>database<span class="token punctuation">-</span>name<span class="token punctuation">]</span> <span class="token comment"># 数据库地址</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver <span class="token comment"># 驱动</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>username<span class="token punctuation">]</span> <span class="token comment"># 账号</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>password<span class="token punctuation">]</span> <span class="token comment"># 密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后添加配置类并配置 JdbcUserDetailsManager，启动项目后 admin 用户就自动添加到数据库当中了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">JdbcUserDetailsManager</span> <span class="token function">jdbcUserDetailsManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">JdbcUserDetailsManager</span> jdbcUserDetailsManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JdbcUserDetailsManager</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>jdbcUserDetailsManager<span class="token punctuation">.</span><span class="token function">userExists</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            jdbcUserDetailsManager<span class="token punctuation">.</span><span class="token function">createUser</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">withUsername</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;{noop}songbaicheng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;role4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> jdbcUserDetailsManager<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于-orm-添加用户" tabindex="-1"><a class="header-anchor" href="#基于-orm-添加用户" aria-hidden="true">#</a> 基于 ORM 添加用户</h4><p>该方法需要根据自己的业务定义自己的 UserDetails 和重写 UserDetailsService 类中的 loadUserByUsername 方法，下面只是一个 demo 演示，将数据库中的用户数据验证并赋值到自定义的 UserDetails 中返回。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Builder</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityUser</span> <span class="token keyword">implements</span> <span class="token class-name">UserDetails</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> authority<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> enabled<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">GrantedAuthority</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAuthorities</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAccountNonExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAccountNonLocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isCredentialsNonExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityService</span> <span class="token keyword">implements</span> <span class="token class-name">UserDetailsService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">IAuthoritiesMapper</span> iAuthoritiesMapper<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">IUsersMapper</span> iUsersMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserDetails</span> <span class="token function">loadUserByUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UsernameNotFoundException</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> realUsername <span class="token operator">=</span> iAuthoritiesMapper<span class="token punctuation">.</span><span class="token function">getUsernameById</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>realUsername<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UsernameNotFoundException</span><span class="token punctuation">(</span><span class="token string">&quot;用户不存在！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token class-name">SecurityUser</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span>realUsername<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span>iUsersMapper<span class="token punctuation">.</span><span class="token function">getPasswordById</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置授权" tabindex="-1"><a class="header-anchor" href="#配置授权" aria-hidden="true">#</a> 配置授权</h3><p>通过对路由的匹配并对其指定相应的授权规则，可以创建多条授权规则，建议根据从细到粗的粒度来进行匹配。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">web</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token class-name">AbstractHttpConfigurer</span><span class="token operator">::</span><span class="token function">disable</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">authorizeHttpRequests</span><span class="token punctuation">(</span><span class="token punctuation">(</span>authorize<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> authorize
                    <span class="token punctuation">.</span><span class="token function">requestMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oauth2" tabindex="-1"><a class="header-anchor" href="#oauth2" aria-hidden="true">#</a> OAuth2</h2><p>OAuth 2.0（开放授权 2.0）是一种授权框架，用于允许用户授权第三方应用程序访问其在另一个应用程序（如社交媒体、电子邮件服务或云存储服务）上的受保护资源，而无需向第三方应用程序共享其凭据（例如用户名和密码）。其主要职责就是实现一个三方互信的功能，目前网站上支持的第三方登录就是 OAuth 协议的实现。OAuth 2.0 的核心概念包括以下角色：</p><ul><li>资源所有者（Resource Owner）：资源所有者是指控制受保护资源的用户，例如网站用户或移动应用程序用户。</li><li>客户端（Client）：客户端是请求访问受保护资源的第三方应用程序，它通过 OAuth 2.0 协议与身份和授权服务器进行交互。</li><li>身份和授权服务器（Authorization Server）：身份和授权服务器负责验证资源所有者的身份，并根据资源所有者的授权向客户端颁发访问令牌。</li><li>受保护资源服务器（Resource Server）：受保护资源服务器托管受保护的用户数据或服务，只有在经过授权的情况下才能访问。</li></ul><p>OAuth 2.0 的工作流程如下：</p><ol><li>客户端向资源所有者请求授权，以访问其受保护资源。这可以通过重定向资源所有者到身份和授权服务器的授权页面来实现。</li><li>资源所有者向身份和授权服务器提供其凭据（例如用户名和密码），并授权客户端访问受保护资源。</li><li>身份和授权服务器验证资源所有者的身份，并生成一个访问令牌（Access Token）。</li><li>身份和授权服务器将访问令牌颁发给客户端。</li><li>客户端使用访问令牌向受保护资源服务器发起请求，并在请求中提供访问令牌作为身份验证凭据。</li></ol><p>OAuth 2.0 的优势在于它根据受保护资源服务器验证访问令牌的有效性，并根据访问令牌决定是否授权客户端访问受保护资源，使得用户可以授予对其受保护资源的有限访问权限，而无需共享其凭据。这提供了更好的安全性和用户隐私保护。此外，OAuth 2.0 支持多种授权流程，如授权码授权流程、隐式授权流程、密码授权流程和客户端凭据授权流程，以满足不同应用场景的需求。</p>`,38);function g(y,h){const a=e("VPCard");return p(),o("div",null,[k,v,m,c(a,i(l({title:"Spring Security 官网文档",desc:"点击跳转官网查看详细内容",logo:"/assets/common-icon/spring-initializr.svg",link:"https://spring.io/projects/spring-security",color:"rgba(173, 216, 590, 0.15)"})),null,16),b])}const S=t(d,[["render",g],["__file","spring-security.html.vue"]]);export{S as default};