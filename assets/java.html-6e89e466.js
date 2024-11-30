const e=JSON.parse(`{"key":"v-8ddcda3a","path":"/work-task/problems/java.html","title":"Java 中遇到的问题","lang":"zh-CN","frontmatter":{"category":"开发问题","tag":["Java"],"description":"Java 中遇到的问题 访问不信任证书网站 记录一次在项目访问公网域名 Minio 服务提示以下报错： PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/work-task/problems/java.html"}],["meta",{"property":"og:site_name","content":"Baicheng's Blog"}],["meta",{"property":"og:title","content":"Java 中遇到的问题"}],["meta",{"property":"og:description","content":"Java 中遇到的问题 访问不信任证书网站 记录一次在项目访问公网域名 Minio 服务提示以下报错： PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-29T13:12:00.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2024-11-29T13:12:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 中遇到的问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-29T13:12:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"访问不信任证书网站","slug":"访问不信任证书网站","link":"#访问不信任证书网站","children":[{"level":3,"title":"1. 禁用 SSL 证书验证","slug":"_1-禁用-ssl-证书验证","link":"#_1-禁用-ssl-证书验证","children":[]}]},{"level":2,"title":"2. 添加证书到 JVM 信任库","slug":"_2-添加证书到-jvm-信任库","link":"#_2-添加证书到-jvm-信任库","children":[]},{"level":2,"title":"3. 代码忽略证书验证（不推荐用于生产环境）","slug":"_3-代码忽略证书验证-不推荐用于生产环境","link":"#_3-代码忽略证书验证-不推荐用于生产环境","children":[]}],"git":{"createdTime":1732885920000,"updatedTime":1732885920000,"contributors":[{"name":"songbaicheng","email":"songbaicheng@sdpjw.com","commits":1}]},"readingTime":{"minutes":1.7,"words":510},"filePathRelative":"work-task/problems/java.md","localizedDate":"2024年11月29日","excerpt":"<h1> Java 中遇到的问题</h1>\\n<h2> 访问不信任证书网站</h2>\\n<p>记录一次在项目访问公网域名 Minio 服务提示以下报错：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token constant\\">PKIX</span> path building failed<span class=\\"token operator\\">:</span> <span class=\\"token class-name\\"><span class=\\"token namespace\\">sun<span class=\\"token punctuation\\">.</span>security<span class=\\"token punctuation\\">.</span>provider<span class=\\"token punctuation\\">.</span>certpath<span class=\\"token punctuation\\">.</span></span>SunCertPathBuilderException</span><span class=\\"token operator\\">:</span> unable <span class=\\"token keyword\\">to</span> <span class=\\"token namespace\\">find</span> valid certification path <span class=\\"token keyword\\">to</span> <span class=\\"token namespace\\">requested</span> target\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
