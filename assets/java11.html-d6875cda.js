const t=JSON.parse(`{"key":"v-40c6495d","path":"/study/backend/java/basic/new-feature/java11.html","title":"Java 11 新特性","lang":"zh-CN","frontmatter":{"star":true,"category":"Java 基础","tag":["Java 17 新特性","Optional","Lambda 表达式","函数式接口","Stream API"],"description":"Java 11 新特性 Java 11 是继 Java 8 之后的第一个 LTS 长期支持功能版本。 标准HttpClient Java 9 中引入了增强的 HttpClient API 作为实验性功能。在 Java 11 中，现在 HttpClient 是一个标准。建议使用 Apache Http Client API 等其他 HTTP Client API 代替。它的功能非常丰富，现在基于 Java 的应用程序可以在不使用任何外部依赖的情况下发出 HTTP 请求。 import java.io.IOException; import java.net.URI; import java.net.http.HttpClient; import java.net.http.HttpRequest; import java.net.http.HttpResponse; import java.time.Duration; public class APITester { public static void main(String[] args) { HttpClient httpClient = HttpClient.newBuilder() .version(HttpClient.Version.HTTP_2) .connectTimeout(Duration.ofSeconds(10)) .build(); try { HttpRequest request = HttpRequest.newBuilder() .GET() .uri(URI.create(\\"https://www.baidu.com\\")) .build(); HttpResponse&lt;String&gt; response = httpClient.send(request, HttpResponse.BodyHandlers.ofString()); System.out.println(\\"Status code: \\" + response.statusCode()); System.out.println(\\"Headers: \\" + response.headers().allValues(\\"content-type\\")); System.out.println(\\"Body: \\" + response.body()); } catch (IOException | InterruptedException e) { e.printStackTrace(); } } }","head":[["meta",{"property":"og:url","content":"https://github.com/songbaicheng/songbaicheng.github.io/study/backend/java/basic/new-feature/java11.html"}],["meta",{"property":"og:site_name","content":"Baicheng's Blog"}],["meta",{"property":"og:title","content":"Java 11 新特性"}],["meta",{"property":"og:description","content":"Java 11 新特性 Java 11 是继 Java 8 之后的第一个 LTS 长期支持功能版本。 标准HttpClient Java 9 中引入了增强的 HttpClient API 作为实验性功能。在 Java 11 中，现在 HttpClient 是一个标准。建议使用 Apache Http Client API 等其他 HTTP Client API 代替。它的功能非常丰富，现在基于 Java 的应用程序可以在不使用任何外部依赖的情况下发出 HTTP 请求。 import java.io.IOException; import java.net.URI; import java.net.http.HttpClient; import java.net.http.HttpRequest; import java.net.http.HttpResponse; import java.time.Duration; public class APITester { public static void main(String[] args) { HttpClient httpClient = HttpClient.newBuilder() .version(HttpClient.Version.HTTP_2) .connectTimeout(Duration.ofSeconds(10)) .build(); try { HttpRequest request = HttpRequest.newBuilder() .GET() .uri(URI.create(\\"https://www.baidu.com\\")) .build(); HttpResponse&lt;String&gt; response = httpClient.send(request, HttpResponse.BodyHandlers.ofString()); System.out.println(\\"Status code: \\" + response.statusCode()); System.out.println(\\"Headers: \\" + response.headers().allValues(\\"content-type\\")); System.out.println(\\"Body: \\" + response.body()); } catch (IOException | InterruptedException e) { e.printStackTrace(); } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T16:10:17.000Z"}],["meta",{"property":"article:author","content":"songbaicheng"}],["meta",{"property":"article:tag","content":"Java 17 新特性"}],["meta",{"property":"article:tag","content":"Optional"}],["meta",{"property":"article:tag","content":"Lambda 表达式"}],["meta",{"property":"article:tag","content":"函数式接口"}],["meta",{"property":"article:tag","content":"Stream API"}],["meta",{"property":"article:modified_time","content":"2024-07-08T16:10:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 11 新特性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T16:10:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"songbaicheng\\",\\"url\\":\\"https://github.com/songbaicheng\\",\\"email\\":\\"songbaicheng16@163.com\\"}]}"]]},"headers":[{"level":2,"title":"标准HttpClient","slug":"标准httpclient","link":"#标准httpclient","children":[]},{"level":2,"title":"免编译启动","slug":"免编译启动","link":"#免编译启动","children":[]},{"level":2,"title":"增强 String 的 API","slug":"增强-string-的-api","link":"#增强-string-的-api","children":[]},{"level":2,"title":"集合转换为数组","slug":"集合转换为数组","link":"#集合转换为数组","children":[]},{"level":2,"title":"Predicate 接口","slug":"predicate-接口","link":"#predicate-接口","children":[]},{"level":2,"title":"var 变量","slug":"var-变量","link":"#var-变量","children":[]}],"git":{"createdTime":1720455017000,"updatedTime":1720455017000,"contributors":[{"name":"songbaicheng","email":"songbaicheng16@163.com","commits":1}]},"readingTime":{"minutes":1.68,"words":504},"filePathRelative":"study/backend/java/basic/new-feature/java11.md","localizedDate":"2024年7月8日","excerpt":"<h1> Java 11 新特性</h1>\\n<p>Java 11 是继 Java 8 之后的第一个 LTS 长期支持功能版本。</p>\\n<h2> 标准HttpClient</h2>\\n<p>Java 9 中引入了增强的 HttpClient API 作为实验性功能。在 Java 11 中，现在 HttpClient 是一个标准。建议使用 Apache Http Client API 等其他 HTTP Client API 代替。它的功能非常丰富，现在基于 Java 的应用程序可以在不使用任何外部依赖的情况下发出 HTTP 请求。</p>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>import java.io.IOException;\\nimport java.net.URI;\\nimport java.net.http.HttpClient;\\nimport java.net.http.HttpRequest;\\nimport java.net.http.HttpResponse;\\nimport java.time.Duration;\\n\\npublic class APITester {\\n   public static void main(String[] args) {\\n      HttpClient httpClient = HttpClient.newBuilder()\\n         .version(HttpClient.Version.HTTP_2)\\n         .connectTimeout(Duration.ofSeconds(10))\\n         .build(); \\n         try {\\n            HttpRequest request = HttpRequest.newBuilder()\\n            .GET()\\n            .uri(URI.create(\\"https://www.baidu.com\\"))\\n            .build();                              \\n            HttpResponse&lt;String&gt; response = httpClient.send(request,\\n            HttpResponse.BodyHandlers.ofString()); \\n\\n         System.out.println(\\"Status code: \\" + response.statusCode());                            \\n         System.out.println(\\"Headers: \\" + response.headers().allValues(\\"content-type\\"));\\n         System.out.println(\\"Body: \\" + response.body());\\n      } catch (IOException | InterruptedException e) {\\n         e.printStackTrace();\\n      }\\n   }\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
