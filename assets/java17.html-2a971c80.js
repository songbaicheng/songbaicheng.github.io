import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as t,d,a as e,b as u,e as l}from"./app-157c556e.js";const r={},o=e("h1",{id:"java-17-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-17-新特性","aria-hidden":"true"},"#"),u(" Java 17 新特性")],-1),v=e("p",null,"Java 17 是继",-1),c=l(`<h2 id="文本块" tabindex="-1"><a class="header-anchor" href="#文本块" aria-hidden="true">#</a> 文本块</h2><p>在 17 版本之前定义 JSON 字符串方式如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void lowVersion() {
    String text = &quot;{\\n&quot; +
        &quot;  \\&quot;name\\&quot;: \\&quot;小黑说Java\\&quot;,\\n&quot; +
        &quot;  \\&quot;age\\&quot;: 18,\\n&quot; +
        &quot;  \\&quot;address\\&quot;: \\&quot;北京市西城区\\&quot;\\n&quot; +
        &quot;}&quot;;
    System.out.println(text);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 17 版本之后，可以使用文本块来定义 JSON 字符串，通过三个双引号可以定义一个文本块，并且结束的三个双引号不能和开始的在同一行。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private void highVersion() {
    String text = &quot;&quot;&quot;
            {
              &quot;name&quot;: &quot;小黑说Java&quot;,
              &quot;age&quot;: 18,
              &quot;address&quot;: &quot;北京市西城区&quot;
            }
            &quot;&quot;&quot;;
    System.out.println(text);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch-表达式" tabindex="-1"><a class="header-anchor" href="#switch-表达式" aria-hidden="true">#</a> switch 表达式</h2><p>在 17 版本之前，switch 语句中只能使用 break 来终止，否则会继续执行下一个 case 语句。在 17 版本之后，switch 语句中可以使用 yield 来返回一个值，并且不需要 break 来终止，并且支持箭头函数写法。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private static void withYield(Fruit fruit) {
    String text = switch (fruit) {
        case APPLE, PEAR -&gt; {
            System.out.println(&quot;给的水果是: &quot; + fruit);
            yield &quot;普通水果&quot;;
        }
        case MANGO, AVOCADO -&gt; &quot;进口水果&quot;;
        default -&gt; &quot;未知水果&quot;;
    };
    System.out.println(text);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(q,b){const i=a("Mermaid");return s(),t("div",null,[o,v,d(i,{id:"mermaid-6",code:"eJzLzcxLyU0s4FJQKMrPL9HQ8EosS1QwNFd4Nm3D886dzxqWa2oC5RSA/PZnc9Y8nTsdzCsuzyxJzlB4sXDFi337nu7p5wIA+lIfAg=="}),c])}const g=n(r,[["render",m],["__file","java17.html.vue"]]);export{g as default};
