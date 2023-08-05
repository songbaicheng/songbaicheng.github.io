const e=JSON.parse(`{"key":"v-760032d5","path":"/study/frontend/basic/typescript.html","title":"TypeScript + ES6+","lang":"zh-CN","frontmatter":{"category":"前端","tag":["TypeScript"],"description":"TypeScript + ES6+ 前言 TypeScript 与 JavaScript 有着不同寻常的关系。TypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层：TypeScript 的类型系统,所以很多人都说 TS 是 JS 的超集。更多的细节详见官网，话不多说，我们直接开始准备工作。 所有的测试代码都在博客首页中的 typescript-study-demo 中找到。","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/study/frontend/basic/typescript.html"}],["meta",{"property":"og:site_name","content":"Baicheng's Blog"}],["meta",{"property":"og:title","content":"TypeScript + ES6+"}],["meta",{"property":"og:description","content":"TypeScript + ES6+ 前言 TypeScript 与 JavaScript 有着不同寻常的关系。TypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层：TypeScript 的类型系统,所以很多人都说 TS 是 JS 的超集。更多的细节详见官网，话不多说，我们直接开始准备工作。 所有的测试代码都在博客首页中的 typescript-study-demo 中找到。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-05T07:34:45.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:modified_time","content":"2023-08-05T07:34:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TypeScript + ES6+\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-05T07:34:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"安装 TypeScript","slug":"安装-typescript","link":"#安装-typescript","children":[]},{"level":3,"title":"编译 TS 文件","slug":"编译-ts-文件","link":"#编译-ts-文件","children":[]},{"level":3,"title":"命名空间","slug":"命名空间","link":"#命名空间","children":[]}]},{"level":2,"title":"基本类型","slug":"基本类型","link":"#基本类型","children":[{"level":3,"title":"数字类型","slug":"数字类型","link":"#数字类型","children":[]},{"level":3,"title":"字符类型","slug":"字符类型","link":"#字符类型","children":[]},{"level":3,"title":"布尔类型","slug":"布尔类型","link":"#布尔类型","children":[]},{"level":3,"title":"数组类型","slug":"数组类型","link":"#数组类型","children":[]},{"level":3,"title":"元组","slug":"元组","link":"#元组","children":[]},{"level":3,"title":"枚举","slug":"枚举","link":"#枚举","children":[]},{"level":3,"title":"void","slug":"void","link":"#void","children":[]},{"level":3,"title":"null","slug":"null","link":"#null","children":[]},{"level":3,"title":"undefined","slug":"undefined","link":"#undefined","children":[]},{"level":3,"title":"never","slug":"never","link":"#never","children":[]},{"level":3,"title":"any & unknown","slug":"any-unknown","link":"#any-unknown","children":[]},{"level":3,"title":"Object & object & {}","slug":"object-object","link":"#object-object","children":[]}]},{"level":2,"title":"接口 interface","slug":"接口-interface","link":"#接口-interface","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[{"level":3,"title":"联合类型","slug":"联合类型","link":"#联合类型","children":[]},{"level":3,"title":"交叉类型","slug":"交叉类型","link":"#交叉类型","children":[]},{"level":3,"title":"类型断言","slug":"类型断言","link":"#类型断言","children":[]}]},{"level":2,"title":"Class类","slug":"class类","link":"#class类","children":[]},{"level":2,"title":"枚举类","slug":"枚举类","link":"#枚举类","children":[{"level":3,"title":"常规枚举","slug":"常规枚举","link":"#常规枚举","children":[]},{"level":3,"title":"递增枚举 & 自定义枚举","slug":"递增枚举-自定义枚举","link":"#递增枚举-自定义枚举","children":[]},{"level":3,"title":"字符串枚举","slug":"字符串枚举","link":"#字符串枚举","children":[]},{"level":3,"title":"异构枚举","slug":"异构枚举","link":"#异构枚举","children":[]},{"level":3,"title":"反向映射","slug":"反向映射","link":"#反向映射","children":[]}]},{"level":2,"title":"Symbol","slug":"symbol","link":"#symbol","children":[{"level":3,"title":"迭代器","slug":"迭代器","link":"#迭代器","children":[]}]},{"level":2,"title":"泛型","slug":"泛型","link":"#泛型","children":[]},{"level":2,"title":"tsconfig.config 文件","slug":"tsconfig-config-文件","link":"#tsconfig-config-文件","children":[]},{"level":2,"title":"声明文件 d.ts","slug":"声明文件-d-ts","link":"#声明文件-d-ts","children":[]},{"level":2,"title":"Mixins 混入","slug":"mixins-混入","link":"#mixins-混入","children":[{"level":3,"title":"对象混入","slug":"对象混入","link":"#对象混入","children":[]},{"level":3,"title":"类混入","slug":"类混入","link":"#类混入","children":[]}]},{"level":2,"title":"装饰器 Decorator","slug":"装饰器-decorator","link":"#装饰器-decorator","children":[]}],"git":{"createdTime":1691220885000,"updatedTime":1691220885000,"contributors":[{"name":"songbaicheng","email":"2524218694@qq.com","commits":1}]},"readingTime":{"minutes":8.32,"words":2496},"filePathRelative":"study/frontend/basic/typescript.md","localizedDate":"2023年8月5日","excerpt":"<h1> TypeScript + ES6+</h1>\\n<h2> 前言</h2>\\n<p>TypeScript 与 JavaScript 有着不同寻常的关系。TypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层：TypeScript 的类型系统,所以很多人都说 TS 是 JS 的超集。更多的细节详见官网，话不多说，我们直接开始准备工作。</p>\\n<blockquote>\\n<p>所有的测试代码都在博客<a href=\\"/\\" target=\\"blank\\">首页</a>中的 typescript-study-demo 中找到。</p>\\n</blockquote>\\n","autoDesc":true}`);export{e as data};
