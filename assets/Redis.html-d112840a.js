const e=JSON.parse(`{"key":"v-1fbb484d","path":"/study/persistence/Redis.html","title":"Redis","lang":"zh-CN","frontmatter":{"category":"持久化","tag":["Redis","database"],"description":"Redis Redis (Remote Dictionary Server) 是一个开源的内存数据结构存储，用作数据库、缓存和消息代理。它支持多种数据结构，如字符串（strings）、哈希（hashes）、列表（lists）、集合（sets）以及有序集合（sorted sets）。因为具有丰富的功能和高性能，现在几乎主流的 Web 项目都已经绑定了 Redis 作为缓存组件。 特点 内存存储：所有数据都保存在内存中，读写速度非常快，非常适合需要快速响应的场景。 持久化：Redis支持将数据持久化到磁盘，可以通过快照（snapshot）和AOF（Append-Only File）两种方式进行。 高可用性和分布式：通过Redis Sentinel实现高可用，通过Redis Cluster实现数据分布和负载均衡。 丰富的数据类型：支持多种数据结构，便于解决复杂的数据存储和操作问题。 Lua脚本：支持Lua脚本，可以实现复杂的原子操作。 事务支持：支持事务，保证一系列操作的原子性。","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/study/persistence/Redis.html"}],["meta",{"property":"og:site_name","content":"Baicheng's Blog"}],["meta",{"property":"og:title","content":"Redis"}],["meta",{"property":"og:description","content":"Redis Redis (Remote Dictionary Server) 是一个开源的内存数据结构存储，用作数据库、缓存和消息代理。它支持多种数据结构，如字符串（strings）、哈希（hashes）、列表（lists）、集合（sets）以及有序集合（sorted sets）。因为具有丰富的功能和高性能，现在几乎主流的 Web 项目都已经绑定了 Redis 作为缓存组件。 特点 内存存储：所有数据都保存在内存中，读写速度非常快，非常适合需要快速响应的场景。 持久化：Redis支持将数据持久化到磁盘，可以通过快照（snapshot）和AOF（Append-Only File）两种方式进行。 高可用性和分布式：通过Redis Sentinel实现高可用，通过Redis Cluster实现数据分布和负载均衡。 丰富的数据类型：支持多种数据结构，便于解决复杂的数据存储和操作问题。 Lua脚本：支持Lua脚本，可以实现复杂的原子操作。 事务支持：支持事务，保证一系列操作的原子性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-24T10:03:51.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"database"}],["meta",{"property":"article:modified_time","content":"2024-06-24T10:03:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-24T10:03:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":2,"title":"原理分析","slug":"原理分析","link":"#原理分析","children":[{"level":3,"title":"为什么 Redis 那么快","slug":"为什么-redis-那么快","link":"#为什么-redis-那么快","children":[]},{"level":3,"title":"数据一致性问题","slug":"数据一致性问题","link":"#数据一致性问题","children":[]}]},{"level":2,"title":"场景","slug":"场景","link":"#场景","children":[{"level":3,"title":"抽象场景","slug":"抽象场景","link":"#抽象场景","children":[]},{"level":3,"title":"实际场景","slug":"实际场景","link":"#实际场景","children":[]}]},{"level":2,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":2,"title":"布隆过滤器","slug":"布隆过滤器","link":"#布隆过滤器","children":[]}],"git":{"createdTime":1688349708000,"updatedTime":1719223431000,"contributors":[{"name":"songbaicheng","email":"songbaicheng16@163.com","commits":3},{"name":"songbaicheng","email":"2524218694@qq.com","commits":2}]},"readingTime":{"minutes":4.36,"words":1308},"filePathRelative":"study/persistence/Redis.md","localizedDate":"2023年7月3日","excerpt":"<h1> Redis</h1>\\n<p>Redis (Remote Dictionary Server) 是一个开源的内存数据结构存储，用作数据库、缓存和消息代理。它支持多种数据结构，如字符串（strings）、哈希（hashes）、列表（lists）、集合（sets）以及有序集合（sorted sets）。因为具有丰富的功能和高性能，现在几乎主流的 Web 项目都已经绑定了 Redis 作为缓存组件。</p>\\n<h2> 特点</h2>\\n<ol>\\n<li>内存存储：所有数据都保存在内存中，读写速度非常快，非常适合需要快速响应的场景。</li>\\n<li>持久化：Redis支持将数据持久化到磁盘，可以通过快照（snapshot）和AOF（Append-Only File）两种方式进行。</li>\\n<li>高可用性和分布式：通过Redis Sentinel实现高可用，通过Redis Cluster实现数据分布和负载均衡。</li>\\n<li>丰富的数据类型：支持多种数据结构，便于解决复杂的数据存储和操作问题。</li>\\n<li>Lua脚本：支持Lua脚本，可以实现复杂的原子操作。</li>\\n<li>事务支持：支持事务，保证一系列操作的原子性。</li>\\n</ol>","autoDesc":true}`);export{e as data};
