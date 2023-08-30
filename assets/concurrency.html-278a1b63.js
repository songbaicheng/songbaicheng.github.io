const e=JSON.parse(`{"key":"v-c0d83b4c","path":"/study/backend/java/basic/concurrency.html","title":"并发","lang":"zh-CN","frontmatter":{"star":true,"category":"Java 基础","tag":["concurrency","Java"],"description":"并发 Java 并发机制基础 提到 Java 的编译过程，我们都会想到 .java 文件到 .class 字节码文件再到汇编指令到 CPU 内执行，而 Java 的并发机制正是依赖了 JVM 的实现和 CPU 的指令，让我们从 volatile 和 synchronized 这两个关键字来配合理解一下并发的原理。 volatile 都说 volatile 是轻量的 synchronized，是因为它在多线程处理中过程中保证了共享变量的可见性，即一个线程在修改一个共享变量时，另一个线程可以读到这个变量值。所以在 volatile 使用恰当的情况下不会引起线程上下文的切换和调度，相比于 synchronized 成本更低。","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/study/backend/java/basic/concurrency.html"}],["meta",{"property":"og:site_name","content":"Baicheng's Blog"}],["meta",{"property":"og:title","content":"并发"}],["meta",{"property":"og:description","content":"并发 Java 并发机制基础 提到 Java 的编译过程，我们都会想到 .java 文件到 .class 字节码文件再到汇编指令到 CPU 内执行，而 Java 的并发机制正是依赖了 JVM 的实现和 CPU 的指令，让我们从 volatile 和 synchronized 这两个关键字来配合理解一下并发的原理。 volatile 都说 volatile 是轻量的 synchronized，是因为它在多线程处理中过程中保证了共享变量的可见性，即一个线程在修改一个共享变量时，另一个线程可以读到这个变量值。所以在 volatile 使用恰当的情况下不会引起线程上下文的切换和调度，相比于 synchronized 成本更低。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-30T15:01:29.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:tag","content":"concurrency"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2023-08-30T15:01:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-30T15:01:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"Java 并发机制基础","slug":"java-并发机制基础","link":"#java-并发机制基础","children":[{"level":3,"title":"volatile","slug":"volatile","link":"#volatile","children":[]},{"level":3,"title":"synchronized","slug":"synchronized","link":"#synchronized","children":[]},{"level":3,"title":"原子操作","slug":"原子操作","link":"#原子操作","children":[]},{"level":3,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]}]},{"level":2,"title":"Java 内存模型","slug":"java-内存模型","link":"#java-内存模型","children":[{"level":3,"title":"内存模型的抽象结构","slug":"内存模型的抽象结构","link":"#内存模型的抽象结构","children":[]},{"level":3,"title":"指令重排","slug":"指令重排","link":"#指令重排","children":[]}]}],"git":{"createdTime":1686217317000,"updatedTime":1693407689000,"contributors":[{"name":"songbaicheng","email":"2524218694@qq.com","commits":8}]},"readingTime":{"minutes":8.4,"words":2521},"filePathRelative":"study/backend/java/basic/concurrency.md","localizedDate":"2023年6月8日","excerpt":"<h1> 并发</h1>\\n<h2> Java 并发机制基础</h2>\\n<p>提到 Java 的编译过程，我们都会想到 .java 文件到 .class 字节码文件再到汇编指令到 CPU 内执行，而 Java 的并发机制正是依赖了 JVM 的实现和 CPU 的指令，让我们从 volatile 和 synchronized 这两个关键字来配合理解一下并发的原理。</p>\\n<h3> volatile</h3>\\n<p>都说 volatile 是轻量的 synchronized，是因为它在多线程处理中过程中保证了共享变量的可见性，即一个线程在修改一个共享变量时，另一个线程可以读到这个变量值。所以在 volatile 使用恰当的情况下不会引起线程上下文的切换和调度，相比于 synchronized 成本更低。</p>","autoDesc":true}`);export{e as data};
