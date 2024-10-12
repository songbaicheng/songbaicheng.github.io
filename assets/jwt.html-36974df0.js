import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as m,d as a,n as k,g as b,w as e,e as c,a as n,b as s}from"./app-a3d7e1c2.js";const v={},g=c(`<h1 id="json-web-tokens" tabindex="-1"><a class="header-anchor" href="#json-web-tokens" aria-hidden="true">#</a> JSON Web Tokens</h1><h2 id="前世今生" tabindex="-1"><a class="header-anchor" href="#前世今生" aria-hidden="true">#</a> 前世今生</h2><p>当我步入开发的第一个项目就已经用上了 Token 令牌鉴权的方式，可当时并不清楚这个在请求头添加的 Bearer 字符串是什么，在走进<br> Token 之前，我们应该从它的前身 Session 来开始讲起。</p><p>在早期的 Web 服务应用阶段，为了解决 HTTP 协议无状态的特性带来的用户认证和会话管理问题。在没有 Session<br> 之前，服务器无法识别连续的多个请求是否来自同一个用户，因为HTTP协议本身并不维护用户的上下文状态。随着Web应用规模的扩大，尤其是分布式系统和微服务架构的兴起，Session<br> 集中存储在一台服务器上的方式开始暴露出可扩展性和性能瓶颈。此外，跨域请求、CSRF攻击等问题也促使开发者寻找新的解决方案。</p><p>Token作为一种更轻量级、分布式的认证机制，因其无状态、易于跨域、支持分布式部署等特点而迅速普及，逐渐成为现代Web应用特别是API服务的首选认证方式。尤其是<br> JSON Web Token (JWT) 的兴起，它将用户信息加密到 Token 中，服务器无需查询数据库即可验证用户身份，这种特性使得它在微服务架构中特别有用，可以减少服务间通信的成本。</p><p>总的来说，Session 到Token 的转变反映了 Web 应用从中心化向分布式、从单一服务向微服务架构发展的趋势，也体现了安全性、可扩展性和用户体验之间平衡的不断优化。</p><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><p>JWT（JSON Web Token）核心在于它的结构，由三部分组成，这些部分通过点(&#39;.&#39;)分隔，每一部分都是 Base64 URL 编码过的字符串，这三部分分别是：</p><ol><li>Header（头部）: 令牌的类型（通常总是&quot;typ&quot;被设置为&quot;JWT&quot;)和所使用的签名算法（如&quot;alg&quot;被设置为HS256）。例如：</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;alg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HS256&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typ&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JWT&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Payload（有效载荷）: Payload 部分是 JWT 的核心，它包含声明（Claims），这些声明是关于实体（通常是用户）和其他数据的声明。Claims<br> 可以分为三种类型：</li></ol><ul><li>Registered claims（注册声明）: 预定义的，不是强制性的，但建议使用的，如 iss（发行人）、exp（过期时间）、sub（主题）等。</li><li>Public claims（公共声明）: 自定义的，可以添加任何不违反 JWT 标准的数据，但应该避免冲突。</li><li>Private claims（私有声明）: 双方之间约定的声明，不公开也不建议第三方使用。 例如：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sub&quot;</span><span class="token operator">:</span> <span class="token string">&quot;主题内容&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;iss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;发行方&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> <span class="token number">1516239022</span><span class="token punctuation">,</span>
  <span class="token property">&quot;admin&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Signature（签名）: 签名部分是对前两部分（Header和Payload）的加密，用于验证 JWT 的完整性和确保它没有被篡改。签名是使用<br> Header 中指定的算法和一个秘钥（对称或非对称）计算得出的。如果使用的是对称算法（如HMAC<br> SHA256），则同一秘钥用于签名和验证；如果是非对称算法（如RSA），则使用私钥签名，公钥验证。</li></ol>`,14),h=n("h2",{id:"jwt-简单场景案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jwt-简单场景案例","aria-hidden":"true"},"#"),s(" JWT 简单场景案例")],-1),w=n("h3",{id:"引入依赖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#引入依赖","aria-hidden":"true"},"#"),s(" 引入依赖")],-1),S=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependencies")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("io.jsonwebtoken"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("jjwt"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("javax.xml.bind"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("jaxb-api"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("com.sun.xml.bind"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("jaxb-impl"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("com.sun.xml.bind"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("jaxb-core"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependencies")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-gradle line-numbers-mode","data-ext":"gradle"},[n("pre",{class:"language-gradle"},[n("code",null,[s("ext "),n("span",{class:"token punctuation"},"{"),s(`
    jjwtVersion `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'0.9.1'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"dependencies"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"implementation"),s(),n("span",{class:"token string"},"'io.jsonwebtoken:jjwt:$jjwtVersion'"),s(` 
    `),n("span",{class:"token keyword"},"implementation"),s(),n("span",{class:"token string"},"'jakarta.xml.bind:jakarta.xml.bind-api:$jjwtVersion'"),s(`
    `),n("span",{class:"token keyword"},"implementation"),s(),n("span",{class:"token string"},"'com.sun.xml.bind:jaxb-impl:$jjwtVersion'"),s(`
    `),n("span",{class:"token keyword"},"implementation"),s(),n("span",{class:"token string"},"'com.sun.xml.bind:jaxb-core:$jjwtVersion'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("h3",{id:"jwt-工具类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jwt-工具类","aria-hidden":"true"},"#"),s(" JWT 工具类")],-1),y=n("p",null,"这是一个简单的生成 JWT 的工具类，其中需要的参数都以静态参数的方式声明了，当然更建议将这些配置存放在 yaml 配置文件中，并且将密钥生成加密文件保存等更安全的方式，其载荷内的声明内容也可以更加丰富，这里我们只讨论 JWT 校验过程，故不做延伸。",-1),E=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`import com.alibaba.fastjson2.JSON;
import com.sbc.convention.exception.ServiceException;
import com.sbc.convention.pojo.dto.UserInfoDTO;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @description: JWT 工具类
 **/
@Slf4j
public class JWTUtil {

     /**
     * 过期时间
     */
    private static final long EXPIRATION = 86400L;
    /**
     * Token 前缀
     */
    public static final String TOKEN_PREFIX = "Bearer ";
    /**
     * 签发者
     */
    public static final String ISS = "songbaicheng";
    /**
     * 密钥
     */
    public static final String SECRET = "SecretKey039245678901232039487623456783092349288901402967890140939827";

    /**
     * 生成用户 Token
     *
     * @param userInfo 用户信息
     * @return 用户访问 Token
     */
    public static String generateAccessToken(UserInfoDTO userInfo) {
        Map<String, Object> claims = generateClaims(userInfo);
        return TOKEN_PREFIX + generateToken(claims);
    }

    /**
     * 验证用户 Token 的有效性
     *
     * @param jwtToken 用户访问 Token
     * @return 是否有效
     */
    public static boolean validateToken(String jwtToken) {
        if (StringUtils.hasText(jwtToken)) {
            String actualJwtToken = jwtToken.replace(TOKEN_PREFIX, "");
            try {
                Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(actualJwtToken).getBody();
                return validateTokenExpiration(claims);
            } catch (ExpiredJwtException ignored) {
                log.warn("JWT Token 已过期");
            } catch (Exception ex) {
                log.error("JWT Token 解析失败！", ex);
            }
        }
        return false;
    }

    /**
     * 解析用户 Token
     *
     * @param jwtToken 用户访问 Token
     * @return 用户信息
     */
    public static UserInfoDTO parseJwtToken(String jwtToken) {
        if (StringUtils.hasText(jwtToken)) {
            String actualJwtToken = jwtToken.replace(TOKEN_PREFIX, "");
            try {
                Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(actualJwtToken).getBody();
                if (validateTokenExpiration(claims)) {
                    return retrieveUserInfoFromClaims(claims);
                }
            } catch (ExpiredJwtException ignored) {
            } catch (Exception ex) {
                log.error("JWT Token 解析失败！", ex);
                throw new ServiceException("JWT Token 解析失败！");
            }
        }
        return null;
    }

    private static Map<String, Object> generateClaims(UserInfoDTO userInfo) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userInfo.getUserId());
        claims.put("username", userInfo.getUsername());
        claims.put("realName", userInfo.getRealName());
        return claims;
    }

    private static String generateToken(Map<String, Object> claims) {
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setIssuer(ISS)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION * 1000))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    private static boolean validateTokenExpiration(Claims claims) {
        Date expiration = claims.getExpiration();
        return expiration != null && expiration.after(new Date());
    }

    private static UserInfoDTO retrieveUserInfoFromClaims(Claims claims) {
        String subject = claims.getSubject();
        return JSON.parseObject(subject, UserInfoDTO.class);
    }
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=c('<h3 id="校验-token-过滤器" tabindex="-1"><a class="header-anchor" href="#校验-token-过滤器" aria-hidden="true">#</a> 校验 Token 过滤器</h3><p>我们这里并不搭配 Spring Security 等权限框架，我们只需要校验请求头中携带的 Token 是否有效即可，这里有两种实现方式，分别是 AOP 和 Filter 过滤器，我们分别说一下这两种方式的优缺点。</p><ul><li>AOP (面向切面编程)： <ul><li>优点： <ol><li>解耦性好：AOP 能够将横切关注点（如权限校验、日志记录等）从业务逻辑中分离出来，使代码更加清晰和模块化。</li><li>灵活性高：可以灵活地指定切入点（如指定特定方法或类），只在需要的地方执行拦截逻辑。</li><li>可读性强：通过注解的方式定义切面，使得代码意图更为明确，便于阅读和维护。</li></ol></li><li>缺点： <ol><li>性能开销：虽然现代框架已经尽可能减少了 AOP 的性能影响，但在某些高并发场景下，动态代理可能会带来轻微的性能开销。</li><li>作用域限制：AOP主要针对业务逻辑层（如 Service 层），对于进入 Web 容器之前的请求处理（如静态资源、错误页面等）控制能力有限。</li></ol></li></ul></li><li>Filter (过滤器) <ul><li>优点： <ol><li>全面覆盖：Filter 可以拦截所有进出Web容器的请求和响应，包括静态资源、错误页面等，控制层面更广。</li><li>简单易用：相比 AOP，Filter 的配置和实现较为直观，容易上手，符合 Servlet 规范，不依赖特定框架。</li><li>性能高效：作为 Servlet 规范的一部分，Filter 在设计上就考虑了性能问题，对于纯请求过滤处理，性能损耗较低。</li></ol></li><li>缺点： <ol><li>侵入性：Filter 需要在 Web.xml 或使用注解进行配置，对 Web 应用的结构有一定的侵入。</li><li>逻辑分散：随着应用复杂度增加，如果过多地使用Filter，可能会导致过滤逻辑分散在多个 Filter 中，不易管理和维护。</li><li>粒度较粗：Filter 通常针对整个请求/响应链路，难以精确到方法级别，不如 AOP 灵活。</li></ol></li></ul></li></ul><p>根据以上的分析，结合现在大多数都高并发场景的情况，我们更推荐性能更优的 Filter 方式，虽然力度上不如 AOP 加校验注解的方式更灵活，可大部分项目的设计初衷都是除登录等白名单接口外，其余所有接口都应该进行校验。话不多说我们直接开始创建和注入过滤器。</p>',4),J=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`import com.sbc.auth.toolkit.JWTUtil;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.util.StringUtils;

import java.io.IOException;

/**
 * @description: JWT 认证过滤器
 **/
public class JwtAuthenticationFilter implements Filter {

    @Override
    public void init(jakarta.servlet.FilterConfig filterConfig) throws ServletException {
        jakarta.servlet.Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        // 设置响应字符编码为 UTF-8
        httpResponse.setCharacterEncoding("UTF-8");

        String requestURI = httpRequest.getRequestURI();
        if (!requestURI.endsWith("/login")) {
            // 获取请求头 Token
            String token = getJwtFromRequest(httpRequest);
            if (token == null) {
                // 如果没有携带 Token，返回 401 错误
                httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                httpResponse.getWriter().write("未携带 Token");
                return;
            }
            // 如果 Token 无效，也返回 401 错误
            if (!JWTUtil.validateToken(token)) {
                httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                httpResponse.getWriter().write("Token 已失效，请重新登录获取新 Token");
                return;
            }
        }

        chain.doFilter(request, response);
    }


    /**
     * 获取请求头 Token 凭证
     *
     * @param request 请求信息
     * @return Token 令牌
     */
    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`import com.sbc.auth.filter.JwtAuthenticationFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

/**
 * @description: Spring Security 配置类
 **/
@Configuration
public class AuthConfig {

    @Bean
    public FilterRegistrationBean<JwtAuthenticationFilter> jwtFilter() {
        FilterRegistrationBean<JwtAuthenticationFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new JwtAuthenticationFilter());
        registrationBean.addUrlPatterns("/api/*");
        return registrationBean;
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h3",{id:"生成令牌和携带令牌",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#生成令牌和携带令牌","aria-hidden":"true"},"#"),s(" 生成令牌和携带令牌")],-1),C=n("p",null,[s("正如我们过滤器中的规则，除了请求路径结尾为 "),n("code",null,"/login"),s(" 并且匹配 "),n("code",null,"/api/*"),s(" 的请求都会在请求头中校验 "),n("code",null,"Authorization"),s(" 字段携带的 Token，我们的前端请求使用 Axios 配置如下：")],-1),A=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'element-plus'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" axios "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'axios'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" AxiosError"),n("span",{class:"token punctuation"},","),s(" AxiosInstance"),n("span",{class:"token punctuation"},","),s(" AxiosResponse "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'axios'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useAuthStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@/stores/authStore'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" axiosInstance"),n("span",{class:"token operator"},":"),s(" AxiosInstance "),n("span",{class:"token operator"},"="),s(" axios"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  timeout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 设置请求超时时间"),s(`
  headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},"'Content-Type'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'application/json'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 请求拦截器"),s(`
axiosInstance`),n("span",{class:"token punctuation"},"."),s("interceptors"),n("span",{class:"token punctuation"},"."),s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token comment"},"// 为确保 pinia 实例被激活，最简单的方法就是将 useStore() 的调用放在 pinia 安装后才会执行的函数中。"),s(`
    `),n("span",{class:"token comment"},"// https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" authStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useAuthStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" token"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"="),s(" authStore"),n("span",{class:"token punctuation"},"."),s("authState"),n("span",{class:"token punctuation"},"."),s(`token
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("token"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      config`),n("span",{class:"token punctuation"},"."),s("headers"),n("span",{class:"token punctuation"},"."),s("Authorization "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("token"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` config
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token operator"},":"),s(" AxiosError"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 对请求错误做些什么"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 响应拦截器"),s(`
axiosInstance`),n("span",{class:"token punctuation"},"."),s("interceptors"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token operator"},":"),s(" AxiosResponse"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 在这里可以对响应进行处理"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"401"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'用户未登录或已过期！'"),n("span",{class:"token punctuation"},")"),s(`
      window`),n("span",{class:"token punctuation"},"."),s("location"),n("span",{class:"token punctuation"},"."),s("href "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'login'"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` response
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token operator"},":"),s(" AxiosError"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 对响应错误做些什么"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},"."),s("response "),n("span",{class:"token operator"},"&&"),s(" error"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"401"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'用户未登录或已过期！'"),n("span",{class:"token punctuation"},")"),s(`
      window`),n("span",{class:"token punctuation"},"."),s("location"),n("span",{class:"token punctuation"},"."),s("href "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'login'"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(` axiosInstance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,"而在后端的登录逻辑里，我们则是调用 JWT 工具类中的生成方法返回给前端存放在全局事件总线中，这样完整的一套基础的 JWT 校验就完成了。",-1);function O(R,F){const r=o("VPCard"),u=o("CodeTabs"),t=o("CodeDemo");return d(),m("div",null,[g,a(r,k(b({title:"JWT 官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/study/backend/java/spring/spring-security/jwt.svg",link:"https://jwt.io/",color:"rgba(173, 216, 590, 0.15)"})),null,16),h,w,a(u,{id:"71",data:[{id:"Maven"},{id:"Gradle"}]},{title0:e(({value:i,isActive:l})=>[s("Maven")]),title1:e(({value:i,isActive:l})=>[s("Gradle")]),tab0:e(({value:i,isActive:l})=>[S]),tab1:e(({value:i,isActive:l})=>[T]),_:1}),x,y,a(t,{id:"code-demo-85",type:"normal",title:"JWT%20%E5%B7%A5%E5%85%B7%E7%B1%BB",code:"eJztV91qG0cUfpWpLsJKNRNZVmwrTYKdRCFyGjtYCsmFoIxWI2nl1Y6YnZVsgsGGpnWgpW5JcSmhobRuSqExKaG+aKhfppLlq75Cz+zsSrvrley00KvMhb2aOec7P/OdMzOPEonLCaPVZlwgnbUwMY0KqRBcI7Zo2szK4KXiyvIHZSsgY1d0rDOrQy1hMAvTdZ223a8i5R1Dp3l/YqJamzUZrgqG79uUF6wau1laGSkYDEvzXVoRbI1a+IZJjJY9fj2/3jY4rS51RYz1qDBITYAqGnWLCIfTRbPOuCEarZGsyVoVtgYhC8otbJu1bBMX5d+RCON1bLe5YdVrnLRol/E17AjDxEUhJ+/DpzQ+lG+SDlECN4mgI5zR/G1iN+6SdtySmi5bF1OpsoVSaKFKbZ0bbvyX0dKDEuod7vceHx6/+kOupy6WrQXX37LVdiqmoSPdJLYtJaVj6JEEQ3IoRDlSaHD0af/Z8/7e7yd7r/1JQJL/IdAOuI1sQQSg1QyLmJAlq47yD+8VVhdLhZVldBXNz2bT6Q/B1Sh0SaYc9Z58fvxmKwqtHAwhqxyi0sqd/PJH91bztwoPAb2cuE4Jpxw+Ykwc//pn74svB1uPz49fKBZdWKBFvUIMvUGteix27+CTk6/2zw9czN9YzZdc7CLVORV36EZ6JpfJXpqdm8+lpzMzGfiZnZ+bzcy4czPpHHzlMvNyNZvO5JRcNp2byc1n5lynYkJ++ry/s3v89Of+zqFKsb80FFloE6AncrziAxUp/NfR9/3tg5EQeOhwy1scvDw62XsZxosN2Qu2Ti3KgRyLuk5t21XTAsU+tJ2UtHPhYACjryj9KbRSaVJdXJMcheKHrPmIqhtoQwBvZ+TwPA4x5P2honJC4flam3EZPPnls8HBdjCD6Pjbj/vPnvS/3ulvvRiXzmZXeMJjMzZMav+bg97uTwpyYjorjJmUWKgDzbk6DMJLsm8xlESjhrx1t93gBrFL0LO0oXBIWg4PjejCISb0RxXF1SE85rRtEp1qwcROAY3LiWD25RB8I4ouh9qz0V7KJowha7CHWhLbVMi+Cz5ARWiqTJJqWSkudW0t7F0S16m4zqobWtSDAA9COXMPCUgpi1LAH5tIJ0JvIC3mOEHgHoO5U6mTw2R13CXc0soJ2XS9rnb4m+qcp3MUMOTD0/WxyJRzxkPQgxc/9L/b7f34avB6/+832+XElNSPGhn9DHx6iakR05anzdgKUCbO00PehvRxbSaW9MFG4dLA3/Z3xJ9MfJmCM1gfS7QAN+AfN2iH+ntwi7OW13Lj6yZCsX9dSv9LWbhb1eCsiyzaRdE762S8tyoxyzHNaIVF7ktxp13kkPtvJ6YM0bs/XrkW4osSwW1HQMgucFXmyzchOeaarmrJiWoWXHLjFOX8BFVOibkco7rqzYdVvYwqhDNyGrl9qKYxPkmhXHp23BKtOIZZlTV6mj6yasMFES9TsG2HVheFJrdBXu8hqgmSXIOL5xiBQBUPwYobtqAtrDucw6OqZLToXcM0DVtLwpUncP9Ooel0Oh1vGkrxAbxxtNOvHny7eGk6M+XdWeOU4VXXhtY0pNW4HYm9wAQCCnXI0H7IMKGEfUkgtEciYEoAIIYqAaX3oAygFNGFC4FZTGrwhgtuzBlBBOtwQoMcH4vHS9tx6RcKpajm4uKQz291HCjaap7+VNAh7L7iAhG4QSQ2/wG0QEdP"},{default:e(()=>[E]),_:1}),j,a(t,{id:"code-demo-196",type:"normal",title:"JWT%20%E8%AE%A4%E8%AF%81%E8%BF%87%E6%BB%A4%E5%99%A8%E5%88%9B%E5%BB%BA",code:"eJzFVV1rVEcY/ivTvZCzi51todBiCcSmCUkuGkh2CZSFMjk72Z3m7JntzJyNVLyIN6mgbaExEhqswhKKqFERoomaP5Nzdr3yL/jOmTNnZz9ExQvn4nzMvO/zPu/nXC4skg4pXCiwVpsLhXzewnLNxyRSTaw4DzaYwourlapiwfe1MJP6lWwQoQiWVHQCqnDp3UdNpdp4Hh4rZmOZ/hZRqT5GQbZ5KOlAg4sGlm3Bwsa6IC26ycUGjoAfXlF6U1OVIO1Y6BDMOF5Ymr3k07ZiPEyPy6VSLUQlNF2n0hcsPbiAwFnUf9jtH271T7eTk26897+WKpVrYTtaC5iP/IBIiRY31UUIEg0V84lWnWOBogKB0YC2YFuibOeyNoZgTS91qBCsTs1vBtfhrI5YyJQ3GgqjP8PDddZA685PEamm4JsSZTHK/dK2NLRek9GwjNrwTO0NQUJItNaVDyBb5wbLG84pEuZ93tKyqYMD83E+C8lMk7AQ+fqZu+JkJweY6Nd4MSFdM/Z7CnnjEkXLLfNyDCcjaoCyn1Eks62h8oq0WOUy1Myr3suH8T834uOd+MGt3v2D3ovd3p2ts2fHqFqZ+/K7gbRrBdKjIByC+BCX2dDndShhr1YwKgWdloGiKXDrS3V5ATg6vuNG7jCceTalerF15H0x0MM0rMtVpppgqRzwBgvBVNGNsvXqz6P4r93+4VHy+GrcfYoqfIM6hBxSSp8AH+AArTEneCuj4jkMXUqWVqY4hcIoCMY4ZDzig6vJ7f3kyd1k/1ry93H87MBQefPiev90J/73Nvrmq6/R6529/uHhOMBowFcUUZGclF28MvNL9aeL1cr80vLCz7M/jhIeQwN3VwXTzVDEm/oDIprs33M5miyOogiqIqEHkbsJ3TfRcQOEklt3kpt/gM9nz/97j9tpwrPBjTskYHWiaIpiAj6e7c8QKONVfPQk7j42jkGlvd6+kew+6u2dxC9vmvKD30+JZD7S9EqHDs4nWD6ybFMPzUHzae4JvUqT+wHF2w/gvrBCufB0G/q6ZdsVGa2z07vJlk0WyBj2GdDZSbd37bo9hCtHv+Gq60DybKONN9iEiZjZHEpypr9GiaDC2Juygjo985TUISS1gr7XuGC/p9facMx1WTnXLG4SWaGXlOeAFtG5c64RLBXcQ3ba/JAeoEnjJovEkGq0JlNr3rcuCye5mZKeHYPMpckrXHkLGGkxxg=="},{default:e(()=>[J]),_:1}),a(t,{id:"code-demo-199",type:"normal",title:"JWT%20%E8%AE%A4%E8%AF%81%E8%BF%87%E6%BB%A4%E5%99%A8%E6%B3%A8%E5%85%A5",code:"eJyVkb9OwzAQxl/llCnN4OwFqgISQydExebFcd1gSM/R+dKAqo6MvAoSM+J5Kt6COEkHCqlUy4Pt+77f/fEmmqm1isaRXZWOGLRbCZ9poSp+EEtbsCExq/myuRpkqxVbhzft+5nE3uQoF74ki/mS1MrUjp5E5hyL2mTCG1oXhkVnujO59Uwt5sooPA7RDtk8s1CIjluP6E0S0ySRCAlMF8ZrsmWIjmHeEmBudEWWX+D79W339b77+AzaJJU4vXa4tHnVlSCxrLLCatCF8h5Cm10cNiEHNGsaMnbHXvt/J+cDY5rAY83dMR4FbCCFdSqGDpRwAWjqIcwkHjVj2uc69Da/sq8pMAZyxqOjDLVY3FNxq7iRoo9llKrSpomMfru4Ivxj7hVbic2Otj8HCeyq"},{default:e(()=>[f]),_:1}),q,C,a(t,{id:"code-demo-208",type:"normal",title:"Axios%20%E9%85%8D%E7%BD%AE",code:"eJzNVFtPE0EU/isTYmxJcFcTn5rUaIwPPpgY9bEPbMq0HdzOrDOzgtQmBbkGUBK5CFQNXgnGFpRwh/4Yd6fLE3/Bmdnd1pIY9c2mye7OnPOdc77vmyl18ScOZFmKHN6V6kJFh1AOSuCWfQcyZuUhKIMcJUWQgDYsQswvObbLEhkcRVqDiLAoQr+3txSwRLqhVm9RSmhP+H4bM27hLIw+70HmEMzahc7BlIDL4A2XF+5zQttR102mvplpxVsyJYOzEirqKq6T6iwL0uG2kaXQ4jBZymAAOCpC4vIUuHJZ/nqAaYKgdtI8rgX1XbE1EuyMiaUd+T9d2lbhBWj1QcpSQCcDkLhJMFfkPJAzJ1JyBsexUdbiiGCznxEsewOgnMHlbtWkQte4YvqTmNzwl9czuKNlA0k4moWOnIsZFD5yIeOG5CGpcJJyyBzKd4P0NdVA2ILE9PYOmms1r/EaOAgjC/i1N97JdPDui2hUxPbh2dGMqFaatYo/u9BcGRWL++L7gr+5JV7V/c1xxbKmMdkN5G6w+aw5vy7mT/zqegtuKng/5s89F1Oz3tGKmPocrM3IUH/iWCxsentff1RGWr0UOHdYyjR1qvHYhf3MIDRvDhXMrCxySY6gxmOmZJ2hPrUg5caKQ1fZzijwoh2iRZK2HJDuMERSM9qO4+QhxCnAOEU4D54C7Nq2kjyON8I3qbyhQ8NclANJ/dkdS6rxJMtGpLWhKhKKhrSoErH3QklnlHvDBKmuelDIXYqjZK16j9YMqhMQWVGfhli+iDC/vh964nR+OajX/eEV72DVO6x4+5MdwHel+xGD0hT9MMtDWEmBrh+by3856x/M/625wuPXdle8EjUbn8/z/VbXg8by6cSM/6LuHX6U7YdVg8aqtIX/YbQ5N97mtlVFtsBdBtLpNLh6+covbLcuHEOPlEwo+03uiupGc/nQP14Qk4v+7regMSGqb8+OhhN6ZvUbQLiPDBg2CY+bUaAwJ+VJ2CSPwnN3Xpu4mX9TJxzvd+oo8xEbyjbyIViPvDHVM25UsaAXWoyDixdB58p/wc4fDQYH9b3cB3OWa5+7azO4q/wTHSubxQ=="},{default:e(()=>[A]),_:1}),I])}const B=p(v,[["render",O],["__file","jwt.html.vue"]]);export{B as default};
