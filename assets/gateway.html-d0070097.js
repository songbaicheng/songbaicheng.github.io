import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,d as r,n as c,g as l,a,b as n,e as i}from"./app-c51ab234.js";const d={},u=a("h1",{id:"gateway",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#gateway","aria-hidden":"true"},"#"),n(" Gateway")],-1),k=a("h2",{id:"浅聊微服务网关",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#浅聊微服务网关","aria-hidden":"true"},"#"),n(" 浅聊微服务网关")],-1),g=a("p",null,"网关是一个通用的概念，它在计算机网络中指的是在不同网络之间进行连接、转发和控制流量的设备或软件。而微服务网关我们通用的理解是统一对外暴露可共享的服务 API 的功能，一般这些微服务网关都与服务注册中心相配合使用，这里我们要谈的 Spring Cloud Gateway 是基于 Spring Boot 和 Spring WebFlux 构建的网关框架。它提供了一种简单、轻量级的方式来处理路由、过滤和负载均衡。Spring Cloud Gateway 还支持动态路由、断路器、限流等功能，并与 Spring Cloud 生态系统无缝集成，具体详情见其官网文档。",-1),v=i(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h3 id="项目依赖" tabindex="-1"><a class="header-anchor" href="#项目依赖" aria-hidden="true">#</a> 项目依赖</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>cloud<span class="token operator">-</span>starter<span class="token operator">-</span>gateway<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>cloud<span class="token operator">-</span>starter<span class="token operator">-</span>loadbalancer<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的网关实例配置" tabindex="-1"><a class="header-anchor" href="#简单的网关实例配置" aria-hidden="true">#</a> 简单的网关实例配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">locator</span><span class="token punctuation">:</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 启用了服务发现功能</span>
          <span class="token key atrule">lower-case-service-id</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 将服务ID转换为小写形式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加以上配置的网关服务就可以发现服务注册中心的其他服务并进行相应的定位和路由设置，在请求该网关服务后加上实例名称和接口即可实现点对点通讯。</p>`,6);function m(h,b){const s=t("VPCard");return o(),p("div",null,[u,k,g,r(s,c(l({title:"Gateway 官网文档",desc:"点击跳转官网查看详细内容",logo:"/assets/common-icon/spring-initializr.svg",link:"https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#gateway-starter",color:"rgba(173, 216, 590, 0.15)"})),null,16),v])}const f=e(d,[["render",m],["__file","gateway.html.vue"]]);export{f as default};