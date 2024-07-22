import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as d,d as l,a as e,b as t,e as r}from"./app-b3b9e12e.js";const u={},v=e("h1",{id:"java-17-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-17-新特性","aria-hidden":"true"},"#"),t(" Java 17 新特性")],-1),c=e("p",null,"Java 17 是Java平台的一个重要版本，于2021年9月14日正式发布，与Java 8相比，Java 17带来了更多的新特性和改进，尤其是在性能和安全性方面。",-1),o=r(`<h2 id="文本块" tabindex="-1"><a class="header-anchor" href="#文本块" aria-hidden="true">#</a> 文本块</h2><p>在 17 版本之前定义 JSON 字符串方式如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void lowVersion() {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> Record</h2><p>Record类的主要特点是它只包含一些只读的成员变量（这些变量在Record类中被自动声明为final）以及一个或多个构造函数。Record类的目标是简化创建不可变类的过程，并解决Java中语义模型不一致的问题，有以下特点</p><ul><li>不可变性：Record类中的所有成员变量都是final的，这意味着一旦对象被创建，其状态（即数据）就不能被改变。这种特性为开发者带来了许多好处，如更简单的并发编程模型和更好的数据一致性保证。</li><li>简洁的语法：使用Record类，开发者无需手动编写getters、equals()、hashCode()和toString()方法。编译器会自动为Record类生成这些方法，从而减少了代码的冗余，提高了代码的可读性和清晰度。</li><li>不支持继承：Record类是final的，因此不能被其他类继承。这意味着Record类提供了一种简洁的方式来定义不可变的数据结构，同时避免了继承可能带来的复杂性和不确定性。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public record Employee(String name, int age, String department) {
    // 这里不需要编写任何方法，因为Record会自动为我们生成
}

// 使用
Employee alice = new Employee(&quot;Alice&quot;, 25, &quot;HR&quot;);
System.out.println(alice); // 输出类似于 Employee[name=Alice, age=25, department=HR]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="密封类-sealed-class" tabindex="-1"><a class="header-anchor" href="#密封类-sealed-class" aria-hidden="true">#</a> 密封类 sealed class</h2><p>sealed class 允许你限制一个类或接口的子类，只有指定的类或接口才能继承。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public sealed class Fruit permits Apple, Pear {
}
public final class Apple extends Fruit {
}
public final class Pear extends Fruit {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof-模式匹配" tabindex="-1"><a class="header-anchor" href="#instanceof-模式匹配" aria-hidden="true">#</a> instanceof 模式匹配</h2><p>instanceof 模式匹配允许开发者使用 instanceof 运算符来检查一个对象是否属于某个类型，并返回一个布尔值。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private static void oldStyle(Object o) {
    if (o instanceof Furit) {
        Furit furit = (GrapeClass) o;
        System.out.println(&quot;This furit is :&quot; + furit.getName);
    }
}

// 使用后
private static void newStyle(Object o) {
    if (o instanceof Furit furit) {
        System.out.println(&quot;This furit is :&quot; + furit.getName);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function m(b,h){const i=n("Mermaid");return s(),d("div",null,[v,c,l(i,{id:"mermaid-6",code:"eJzLzcxLyU0s4FJQKMrPL9HQ8EosS1QwNFd4Nm3D886dzxqWa2oC5RSA/PZnc9Y8nTsdzCsuzyxJzlB4sXDFi337nu7pBwsGpSbnF6WAmU/Xtz3d0Ph8426F4tTEnNQUheScxOJisFRmXnFJYl5yan6awrMVC4F6n/bsfNnaywUAQ1A7FA=="}),o])}const g=a(u,[["render",m],["__file","java17.html.vue"]]);export{g as default};
