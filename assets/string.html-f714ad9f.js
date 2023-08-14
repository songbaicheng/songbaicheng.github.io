const t=JSON.parse(`{"key":"v-70b824a8","path":"/study/computer-basis/ads/data-structure/string.html","title":"串","lang":"zh-CN","frontmatter":{"star":true,"category":"数据结构","tag":["string"],"description":"串 字符串简称串，计算机上非数值处理的对象基本都是字符串。通常用的搜索引擎、文本编辑程序、问答系统和自然语言翻译等都是以字符串作为处理对象。串是由零个或多个字符组成的有限序列，一般记为 S = 'a1a2a3……an'，其中 S 是串名，单引号内的括起来的字符序列是串的值，其中 ai 可以是字母、数字或者其他字符；串中字符的个数称为串的长度，为 0 时是空串。串中任意多个连续的字符组成的子序列称为该串的子串，包含子串的串称为主串。某个字符在串中的序号称为该字符在串中的位置。子串在主串中的位置以子串在主串的第一个字符位置来表示，当两个串的长度相等且每个对应对应位置的元素都相等时，称这两个串是相等的。由一个或者多个空格组成的串为空格串，其长度为串中空格字符的个数。","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/study/computer-basis/ads/data-structure/string.html"}],["meta",{"property":"og:site_name","content":"Baicheng's Blog"}],["meta",{"property":"og:title","content":"串"}],["meta",{"property":"og:description","content":"串 字符串简称串，计算机上非数值处理的对象基本都是字符串。通常用的搜索引擎、文本编辑程序、问答系统和自然语言翻译等都是以字符串作为处理对象。串是由零个或多个字符组成的有限序列，一般记为 S = 'a1a2a3……an'，其中 S 是串名，单引号内的括起来的字符序列是串的值，其中 ai 可以是字母、数字或者其他字符；串中字符的个数称为串的长度，为 0 时是空串。串中任意多个连续的字符组成的子序列称为该串的子串，包含子串的串称为主串。某个字符在串中的序号称为该字符在串中的位置。子串在主串中的位置以子串在主串的第一个字符位置来表示，当两个串的长度相等且每个对应对应位置的元素都相等时，称这两个串是相等的。由一个或者多个空格组成的串为空格串，其长度为串中空格字符的个数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-06T06:20:14.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:tag","content":"string"}],["meta",{"property":"article:modified_time","content":"2023-08-06T06:20:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"串\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-06T06:20:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"串的存储结构","slug":"串的存储结构","link":"#串的存储结构","children":[{"level":3,"title":"定长顺序存储","slug":"定长顺序存储","link":"#定长顺序存储","children":[]},{"level":3,"title":"堆分配存储","slug":"堆分配存储","link":"#堆分配存储","children":[]},{"level":3,"title":"块链存储","slug":"块链存储","link":"#块链存储","children":[]}]},{"level":2,"title":"串的基本操作","slug":"串的基本操作","link":"#串的基本操作","children":[]}],"git":{"createdTime":1691302814000,"updatedTime":1691302814000,"contributors":[{"name":"songbaicheng","email":"2524218694@qq.com","commits":1}]},"readingTime":{"minutes":1.91,"words":574},"filePathRelative":"study/computer-basis/ads/data-structure/string.md","localizedDate":"2023年8月6日","excerpt":"<h1> 串</h1>\\n<p>字符串简称串，计算机上非数值处理的对象基本都是字符串。通常用的搜索引擎、文本编辑程序、问答系统和自然语言翻译等都是以字符串作为处理对象。串是由零个或多个字符组成的有限序列，一般记为 <code>S = 'a1a2a3……an'</code>，其中 S 是串名，单引号内的括起来的字符序列是串的值，其中 ai 可以是字母、数字或者其他字符；串中字符的个数称为串的长度，为 0 时是空串。串中任意多个连续的字符组成的子序列称为该串的子串，包含子串的串称为主串。某个字符在串中的序号称为该字符在串中的位置。子串在主串中的位置以子串在主串的第一个字符位置来表示，当两个串的长度相等且每个对应对应位置的元素都相等时，称这两个串是相等的。由一个或者多个空格组成的串为空格串，其长度为串中空格字符的个数。</p>","autoDesc":true}`);export{t as data};