import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as t,d as l,a as i,b as d,e as r}from"./app-5b4cd076.js";const v={},u=i("h1",{id:"java-11-新特性",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#java-11-新特性","aria-hidden":"true"},"#"),d(" Java 11 新特性")],-1),c=i("p",null,"Java 11 是继 Java 8 之后的第一个 LTS 长期支持功能版本。",-1),o=r(`<h2 id="标准httpclient" tabindex="-1"><a class="header-anchor" href="#标准httpclient" aria-hidden="true">#</a> 标准HttpClient</h2><p>Java 9 中引入了增强的 HttpClient API 作为实验性功能。在 Java 11 中，现在 HttpClient 是一个标准。建议使用 Apache Http Client API 等其他 HTTP Client API 代替。它的功能非常丰富，现在基于 Java 的应用程序可以在不使用任何外部依赖的情况下发出 HTTP 请求。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class APITester {
   public static void main(String[] args) {
      HttpClient httpClient = HttpClient.newBuilder()
         .version(HttpClient.Version.HTTP_2)
         .connectTimeout(Duration.ofSeconds(10))
         .build(); 
         try {
            HttpRequest request = HttpRequest.newBuilder()
            .GET()
            .uri(URI.create(&quot;https://www.baidu.com&quot;))
            .build();                              
            HttpResponse&lt;String&gt; response = httpClient.send(request,
            HttpResponse.BodyHandlers.ofString()); 

         System.out.println(&quot;Status code: &quot; + response.statusCode());                            
         System.out.println(&quot;Headers: &quot; + response.headers().allValues(&quot;content-type&quot;));
         System.out.println(&quot;Body: &quot; + response.body());
      } catch (IOException | InterruptedException e) {
         e.printStackTrace();
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="免编译启动" tabindex="-1"><a class="header-anchor" href="#免编译启动" aria-hidden="true">#</a> 免编译启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">java</span> Test.java
Hello World<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增强-string-的-api" tabindex="-1"><a class="header-anchor" href="#增强-string-的-api" aria-hidden="true">#</a> 增强 String 的 API</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String.repeat(int) ： 重复给定次数的字符串。返回连接的字符串。
String.isBlank() ：检查字符串是否为空或只有空格。
String.strip() ： 删除前导和尾随空格。
String.stripLeading() ： 删除前导空格。
String.stripTrailing() ： 删除尾随空格。
String.lines() ： 返回多行字符串的行流。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合转换为数组" tabindex="-1"><a class="header-anchor" href="#集合转换为数组" aria-hidden="true">#</a> 集合转换为数组</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.util.Arrays;
import java.util.List;

public class APITester {
   public static void main(String[] args) {		
      List&lt;String&gt; namesList = Arrays.asList(&quot;Joe&quot;, &quot;Julie&quot;);
      
      // Old way
      String[] names = namesList.toArray(new String[namesList.size()]);
      
      // New way
      names = namesList.toArray(String[]::new);
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="predicate-接口" tabindex="-1"><a class="header-anchor" href="#predicate-接口" aria-hidden="true">#</a> Predicate 接口</h2><p>Java 11 向 Predicate 接口引入了新方法 not() 来否定类似于 negate 方法的现有谓词。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class APITester {
   public static void main(String[] args) {		
      List&lt;String&gt; tutorialsList = Arrays.asList(&quot;Java&quot;, &quot;\\n&quot;, &quot;HTML&quot;, &quot; &quot;);

      List&lt;String&gt; tutorials = tutorialsList.stream()
         .filter(Predicate.not(String::isBlank))
         .collect(Collectors.toList());

      tutorials.forEach(tutorial -&gt; System.out.println(tutorial));
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="var-变量" tabindex="-1"><a class="header-anchor" href="#var-变量" aria-hidden="true">#</a> var 变量</h2><p>Java 11 允许在 lambda 表达式中使用 var，它可用于将修饰符应用于局部变量。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@interface NonNull {}

public class APITester {
   public static void main(String[] args) {		
      List&lt;String&gt; tutorialsList = Arrays.asList(&quot;Java&quot;, &quot;HTML&quot;);

      String tutorials = tutorialsList.stream()
         .map((@NonNull var tutorial) -&gt; tutorial.toUpperCase())
         .collect(Collectors.joining(&quot;, &quot;));

      System.out.println(tutorials);
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function m(b,p){const e=a("Mermaid");return s(),t("div",null,[u,c,l(e,{id:"mermaid-6",code:"eJzLzcxLyU0s4FJQKMrPL9HQ8EosS1QwNFR4Nm3D886dzxqWa2oC5RQUni1of9re5lFSUuCck5maVwIWfNra+3zPtBfrJz6dsP5p1wqI2KJ5T/fsCi4pysxLfz6rxTHAEyz8cnbb0wkdL/aueda76MmOXc+mbni+uwUsE1CUmpKZnFiSqvCsb+nT/sVgwbLEIoWn/TNetvdDDN3a83Tp9Ocbd3MBAAfCUVc="}),o])}const q=n(v,[["render",m],["__file","java11.html.vue"]]);export{q as default};
