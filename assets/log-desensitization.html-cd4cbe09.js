const e=JSON.parse('{"key":"v-29368c3c","path":"/work-task/development/log-desensitization.html","title":"切面编程","lang":"en-US","frontmatter":{"description":"切面编程 浅聊AOP 当我第一次接触Spring框架的时候，就告诉我们 IOC（控制反转） 和 AOP（面向切面编程） 这两个最核心的知识点，IOC 作为我们工作中最经常使用的知识点大家肯定是烂熟于心，而一聊到 AOP ，脑海中想到的只有零零散散的面试题，和一些日志、缓存、事务、安全、权限等功能场景，这些场景确实主要在项目搭建阶段就已经搭建完毕了，这也导致我们很少在工作中接触到它。其实学习使用 AOP 是相对简单的，我们需要先知道以下几个核心概念： 切面：一个关注点的模块化，这个关注点可能会横切多个对象。 连接点：程序执行过程中明确的点，如方法调用或异常处理器。 切点：指定一个或多个连接点，切面在这些点上执行它的操作。 通知：切面在特定连接点上执行的操作，有 before、after、around、afterThrowing 和 afterReturning 等类型。 织入：将切面应用到目标对象来创建新的代理对象的过程。","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/work-task/development/log-desensitization.html"}],["meta",{"property":"og:site_name","content":"宋柏成的技术博客"}],["meta",{"property":"og:title","content":"切面编程"}],["meta",{"property":"og:description","content":"切面编程 浅聊AOP 当我第一次接触Spring框架的时候，就告诉我们 IOC（控制反转） 和 AOP（面向切面编程） 这两个最核心的知识点，IOC 作为我们工作中最经常使用的知识点大家肯定是烂熟于心，而一聊到 AOP ，脑海中想到的只有零零散散的面试题，和一些日志、缓存、事务、安全、权限等功能场景，这些场景确实主要在项目搭建阶段就已经搭建完毕了，这也导致我们很少在工作中接触到它。其实学习使用 AOP 是相对简单的，我们需要先知道以下几个核心概念： 切面：一个关注点的模块化，这个关注点可能会横切多个对象。 连接点：程序执行过程中明确的点，如方法调用或异常处理器。 切点：指定一个或多个连接点，切面在这些点上执行它的操作。 通知：切面在特定连接点上执行的操作，有 before、after、around、afterThrowing 和 afterReturning 等类型。 织入：将切面应用到目标对象来创建新的代理对象的过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-01T07:00:06.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:modified_time","content":"2023-06-01T07:00:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"切面编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-01T07:00:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"浅聊AOP","slug":"浅聊aop","link":"#浅聊aop","children":[]},{"level":2,"title":"工作中使用到 AOP 的例子","slug":"工作中使用到-aop-的例子","link":"#工作中使用到-aop-的例子","children":[{"level":3,"title":"返回对象脱敏","slug":"返回对象脱敏","link":"#返回对象脱敏","children":[]}]}],"git":{"createdTime":1685602492000,"updatedTime":1685602806000,"contributors":[{"name":"songbaicheng","email":"2524218694@qq.com","commits":2}]},"readingTime":{"minutes":3.74,"words":1121},"filePathRelative":"work-task/development/log-desensitization.md","localizedDate":"June 1, 2023","excerpt":"<h1> 切面编程</h1>\\n<h2> 浅聊AOP</h2>\\n<p>当我第一次接触Spring框架的时候，就告诉我们 IOC（控制反转） 和 AOP（面向切面编程） 这两个最核心的知识点，IOC 作为我们工作中最经常使用的知识点大家肯定是烂熟于心，而一聊到 AOP ，脑海中想到的只有零零散散的面试题，和一些日志、缓存、事务、安全、权限等功能场景，这些场景确实主要在项目搭建阶段就已经搭建完毕了，这也导致我们很少在工作中接触到它。其实学习使用 AOP 是相对简单的，我们需要先知道以下几个核心概念：</p>\\n<ul>\\n<li>切面：一个关注点的模块化，这个关注点可能会横切多个对象。</li>\\n<li>连接点：程序执行过程中明确的点，如方法调用或异常处理器。</li>\\n<li>切点：指定一个或多个连接点，切面在这些点上执行它的操作。</li>\\n<li>通知：切面在特定连接点上执行的操作，有 before、after、around、afterThrowing 和 afterReturning 等类型。</li>\\n<li>织入：将切面应用到目标对象来创建新的代理对象的过程。</li>\\n</ul>","autoDesc":true}');export{e as data};
