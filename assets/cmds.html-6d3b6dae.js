const a=JSON.parse(`{"key":"v-46f59636","path":"/work-task/design/cmds.html","title":"重构接收价格前置项目","lang":"zh-CN","frontmatter":{"star":true,"category":"工作任务","tag":["Java","Spring Boot"],"description":"重构接收价格前置项目 引言 没想到，重构这个项目的原因居然是公司开始不再使用 Tomcat 部署项目，想把之前的 war 包启动的项目都换成 jar 包部署。之前的前置项目大部分都都是“远古时期”流传下来的“毒瘤”，纯 Java 项目，各种 Thread 满天飞，规范什么的就更别提了，为了追赶上线进度，我们引用 tomcat-embed 模块实现 Java 内置 Tomcat 启动，核心代码如下： public class Main { public static void main(String[] args) throws Exception { String webappDirLocation = \\"src/main/webapp\\"; Tomcat tomcat = new Tomcat(); tomcat.setPort(8080); tomcat.addWebapp(\\"/\\", new File(webappDirLocation).getAbsolutePath()); tomcat.start(); tomcat.getServer().await(); } }","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/work-task/design/cmds.html"}],["meta",{"property":"og:site_name","content":"Baicheng's Blog"}],["meta",{"property":"og:title","content":"重构接收价格前置项目"}],["meta",{"property":"og:description","content":"重构接收价格前置项目 引言 没想到，重构这个项目的原因居然是公司开始不再使用 Tomcat 部署项目，想把之前的 war 包启动的项目都换成 jar 包部署。之前的前置项目大部分都都是“远古时期”流传下来的“毒瘤”，纯 Java 项目，各种 Thread 满天飞，规范什么的就更别提了，为了追赶上线进度，我们引用 tomcat-embed 模块实现 Java 内置 Tomcat 启动，核心代码如下： public class Main { public static void main(String[] args) throws Exception { String webappDirLocation = \\"src/main/webapp\\"; Tomcat tomcat = new Tomcat(); tomcat.setPort(8080); tomcat.addWebapp(\\"/\\", new File(webappDirLocation).getAbsolutePath()); tomcat.start(); tomcat.getServer().await(); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-14T10:46:15.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:modified_time","content":"2023-09-14T10:46:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"重构接收价格前置项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-14T10:46:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"重构思路","slug":"重构思路","link":"#重构思路","children":[{"level":3,"title":"框架选型","slug":"框架选型","link":"#框架选型","children":[]},{"level":3,"title":"业务梳理","slug":"业务梳理","link":"#业务梳理","children":[]}]},{"level":2,"title":"方案设计","slug":"方案设计","link":"#方案设计","children":[{"level":3,"title":"线程池方案","slug":"线程池方案","link":"#线程池方案","children":[]},{"level":3,"title":"价格的接收与筛选","slug":"价格的接收与筛选","link":"#价格的接收与筛选","children":[]},{"level":3,"title":"价格的处理与转发","slug":"价格的处理与转发","link":"#价格的处理与转发","children":[]}]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[{"level":3,"title":"线程池","slug":"线程池","link":"#线程池","children":[]},{"level":3,"title":"价格处理与转发","slug":"价格处理与转发","link":"#价格处理与转发","children":[]}]}],"git":{"createdTime":1685602492000,"updatedTime":1694688375000,"contributors":[{"name":"songbaicheng","email":"2524218694@qq.com","commits":8}]},"readingTime":{"minutes":5.89,"words":1768},"filePathRelative":"work-task/design/cmds.md","localizedDate":"2023年6月1日","excerpt":"<h1> 重构接收价格前置项目</h1>\\n<h2> 引言</h2>\\n<p>没想到，重构这个项目的原因居然是公司开始不再使用 Tomcat 部署项目，想把之前的 war 包启动的项目都换成 jar 包部署。之前的前置项目大部分都都是“远古时期”流传下来的“毒瘤”，纯 Java 项目，各种 Thread 满天飞，规范什么的就更别提了，为了追赶上线进度，我们引用 tomcat-embed 模块实现 Java 内置 Tomcat 启动，核心代码如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Main</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">Exception</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">String</span> webappDirLocation <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"src/main/webapp\\"</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Tomcat</span> tomcat <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Tomcat</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        tomcat<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setPort</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">8080</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        tomcat<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addWebapp</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">File</span><span class=\\"token punctuation\\">(</span>webappDirLocation<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getAbsolutePath</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        tomcat<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        tomcat<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getServer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">await</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{a as data};
