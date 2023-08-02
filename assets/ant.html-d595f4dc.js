const t=JSON.parse(`{"key":"v-deff7d26","path":"/work-task/development/ant.html","title":"打包工具-Ant","lang":"zh-CN","frontmatter":{"category":"工作任务","tag":["ant"],"description":"打包工具-Ant 对ant的理解 Apache Ant，在我看来称他为时代弃子也不为过，我现在都还依稀记得当时学习ant时看到的一篇文章里有那么一句话：使用 ant 作为构建工具对程序员来说是一种挑战。 对我来说，认识到ant还是因为刚步入社会的公司里总有些老旧的纯 Java 项目依然苟延残喘，第一次看见项目目录里的 build.xml 的我那时候还没有认识到问题的严重性，直到自己负责这些项目打包上线的时候，我才发现不知不觉，我已经和它打了两年的交道了。说句题外话，其实相对于我这个年龄段的程序员来说，xml文件就已经逐渐被 yml 所取代了，虽然 xml 在公司项目中更容易维护，但是体积过大和比较繁琐的标签和属性确实让人头大，不过对我来说，拥抱 yaml 的原因只有优雅二字而已。言归正传，想学会ant最主要的就是学会读懂构建脚本，先列举一个简单的Java项目打 jar 包的例子：","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/work-task/development/ant.html"}],["meta",{"property":"og:site_name","content":"Baicheng's Blog"}],["meta",{"property":"og:title","content":"打包工具-Ant"}],["meta",{"property":"og:description","content":"打包工具-Ant 对ant的理解 Apache Ant，在我看来称他为时代弃子也不为过，我现在都还依稀记得当时学习ant时看到的一篇文章里有那么一句话：使用 ant 作为构建工具对程序员来说是一种挑战。 对我来说，认识到ant还是因为刚步入社会的公司里总有些老旧的纯 Java 项目依然苟延残喘，第一次看见项目目录里的 build.xml 的我那时候还没有认识到问题的严重性，直到自己负责这些项目打包上线的时候，我才发现不知不觉，我已经和它打了两年的交道了。说句题外话，其实相对于我这个年龄段的程序员来说，xml文件就已经逐渐被 yml 所取代了，虽然 xml 在公司项目中更容易维护，但是体积过大和比较繁琐的标签和属性确实让人头大，不过对我来说，拥抱 yaml 的原因只有优雅二字而已。言归正传，想学会ant最主要的就是学会读懂构建脚本，先列举一个简单的Java项目打 jar 包的例子："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-06T09:18:15.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:tag","content":"ant"}],["meta",{"property":"article:modified_time","content":"2023-06-06T09:18:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打包工具-Ant\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-06T09:18:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"对ant的理解","slug":"对ant的理解","link":"#对ant的理解","children":[]},{"level":2,"title":"工作中遇到的Ant打包需求","slug":"工作中遇到的ant打包需求","link":"#工作中遇到的ant打包需求","children":[{"level":3,"title":"构建war包和jar包中的Manifest文件添加打包Git分支明细","slug":"构建war包和jar包中的manifest文件添加打包git分支明细","link":"#构建war包和jar包中的manifest文件添加打包git分支明细","children":[]}]}],"git":{"createdTime":1685602492000,"updatedTime":1686043095000,"contributors":[{"name":"songbaicheng","email":"2524218694@qq.com","commits":2}]},"readingTime":{"minutes":2.44,"words":733},"filePathRelative":"work-task/development/ant.md","localizedDate":"2023年6月1日","excerpt":"<h1> 打包工具-Ant</h1>\\n<h2> 对ant的理解</h2>\\n<p>Apache Ant，在我看来称他为时代弃子也不为过，我现在都还依稀记得当时学习ant时看到的一篇文章里有那么一句话：使用 ant 作为构建工具对程序员来说是一种挑战。</p>\\n<p>对我来说，认识到ant还是因为刚步入社会的公司里总有些老旧的纯 Java 项目依然苟延残喘，第一次看见项目目录里的 build.xml 的我那时候还没有认识到问题的严重性，直到自己负责这些项目打包上线的时候，我才发现不知不觉，我已经和它打了两年的交道了。说句题外话，其实相对于我这个年龄段的程序员来说，xml文件就已经逐渐被 yml 所取代了，虽然 xml 在公司项目中更容易维护，但是体积过大和比较繁琐的标签和属性确实让人头大，不过对我来说，拥抱 yaml 的原因只有优雅二字而已。言归正传，想学会ant最主要的就是学会读懂构建脚本，先列举一个简单的Java项目打 jar 包的例子：</p>","autoDesc":true}`);export{t as data};
