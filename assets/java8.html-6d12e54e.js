import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as p,b as e,n as c,g as u,d as n,e as a,a as r}from"./app-d04cebcd.js";const d={},v=n("h1",{id:"java-8-新特性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java-8-新特性","aria-hidden":"true"},"#"),a(" Java 8 新特性")],-1),m=n("p",null,[a("Java 8 发布于 2014 年，成为 Java 程序员最喜欢且热衷的版本之一，Java 8"),n("br"),a(" 引入了很多新特性，并且很多数据结构的底层实现都发生了变化，接下来我们罗列我们日常开发中常用的新特性来分享一下。")],-1),k=r(`<h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2><p>Java 8 中的接口新增默认方法（default）和静态方法（static）,default 修饰的方法，是普通实例方法，可以用 this 调用，可以被子类继承、重写，而<br> static 修饰的方法，使用上和一般类静态方法一样，但它不能被子类继承，只能用 Interface 调用。这样看来我们的接口和抽象类就越来越像了。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface InterfaceNew {
    static void sm() {
        System.out.println(&quot;interface提供的方式实现&quot;);
    }
    static void sm2() {
        System.out.println(&quot;interface提供的方式实现&quot;);
    }

    default void def() {
        System.out.println(&quot;interface default方法&quot;);
    }
    default void def2() {
        System.out.println(&quot;interface default2方法&quot;);
    }
    //须要实现类重写
    void f();
}

public interface InterfaceNew1 {
    default void def() {
        System.out.println(&quot;InterfaceNew1 default方法&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有一个类既实现了 InterfaceNew 接口又实现了 InterfaceNew1接口，它们都有def()，并且 InterfaceNew 接口和<br> InterfaceNew1接口没有继承关系的话，这时就必须重写def()。不然的话，编译的时候就会报错。</p><h2 id="functional-interface-函数式接口" tabindex="-1"><a class="header-anchor" href="#functional-interface-函数式接口" aria-hidden="true">#</a> functional interface 函数式接口</h2><p>函数式接口（Functional Interface）是 Java 8 中引入的一种特殊的接口，由 <code>@FunctionalInterface</code> 注解修饰，它只有一个抽象方法。函数式接口可以用于<br> Lambda 表达式和方法引用，使得代码更加简洁和易读。</p><blockquote><p>值得注意的是只要符合函数式接口的定义就是函数式接口，与是否有 <code>@FunctionalInterface</code> 注解无关，注解只是在编译时起到强制规范定义的作用。</p></blockquote><h2 id="lambda-表达式" tabindex="-1"><a class="header-anchor" href="#lambda-表达式" aria-hidden="true">#</a> Lambda 表达式</h2><p>说完函数式接口就不得不提到 Lambda 这位重量级选手了，Lambda 表达式是 Java 8 中引入的一种新的语法，它允许你以更简洁的方式编写匿名函数。Lambda<br> 表达式可以用于函数式接口，使得代码更加简洁和易读。</p><ol><li>Runnable 接口</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 之前
new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println(&quot;The runable now is using!&quot;);
            }
}).start();

// Lambda
new Thread(() -&gt; System.out.println(&quot;It&#39;s a lambda function!&quot;)).start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Comparator 接口</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 之前
List&lt;Integer&gt; strings = Arrays.asList(1, 2, 3);

Collections.sort(strings, new Comparator&lt;Integer&gt;() {
@Override
public int compare(Integer o1, Integer o2) {
    return o1 - o2;}
});

// Lambda
Collections.sort(strings, (Integer o1, Integer o2) -&gt; o1 - o2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>方法调用<br> Java 8 允许使用 :: 关键字来传递方法或者构造函数引用，无论如何，表达式返回的类型必须是 functional-interface ，下面用<br> Mybatis Plus 的 Wrapper 来展示。</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>LambdaUpdateWrapper&lt;TUser&gt; updateWrapper = Wrappers.lambdaUpdate(TUser.class)
        .eq(TUser::getUsername, username)
        .set(TUser::getRealName, userBasicInfo.getRealName())
        .set(TUser::getIdType, userBasicInfo.getIdType())
        .set(TUser::getIdCard, userBasicInfo.getIdCard());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optional" tabindex="-1"><a class="header-anchor" href="#optional" aria-hidden="true">#</a> Optional</h2><p>Java 8中的 Optional 类可以在以下情况下使用：</p><ul><li>当你不确定一个值是否存在时，可以使用 Optional 来封装这个值，避免在运行时出现 NullPointerException 异常。</li><li>当你需要返回一个可能为空的值时，可以使用 Optional 来代替空指针。这样，你可以避免在代码中使用 null 值，并且可以更加优雅地处理可能为空的情况。</li><li>当你需要对一个可能为空的值进行操作时，可以使用 Optional 提供的 map、filter 等方法来避免空指针异常的出现。</li></ul><p>无论何时何地，Optional 类可以帮助你更好地处理可能为空的值，使得你的代码更加健壮、优雅。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建一个 Optional</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional1 <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional2 <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional3 <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 判断一个 Optional 是否为空</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>optional<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Optional is not empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Optional is empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// get()：如果该 Optional 不为空则返回该对象，否则抛出 NullPointerException 异常。</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> value <span class="token operator">=</span> optional<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出hello</span>

<span class="token comment">// orElse()：如果该 Optional 不为空则返回该对象，否则返回指定的默认值。</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> value <span class="token operator">=</span> optional<span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token string">&quot;fallback value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出fallback value</span>

<span class="token comment">// orElseGet()：如果该 Optional 不为空则返回该对象，否则调用指定的 Supplier 获取默认值。</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> value <span class="token operator">=</span> optional<span class="token punctuation">.</span><span class="token function">orElseGet</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;fallback value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出fallback value</span>

<span class="token comment">// map()：如果有值，则对其执行调用映射函数得到返回值。如果返回值不为 null，则创建包含映射返回值的 Optional 作为 map 方法返回值，否则返回空 Optional。</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> value <span class="token operator">=</span> optional<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>str <span class="token operator">-&gt;</span> str<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出HELLO</span>

<span class="token comment">// filter()：如果值存在，并且这个值匹配给定的条件，返回一个 Optional 用以描述这个值，否则返回一个空的 Optional。</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> value <span class="token operator">=</span> optional<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>str <span class="token operator">-&gt;</span> str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;he&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出hello</span>

<span class="token comment">// orElseThrow()：如果该 Optional 不为空则返回对象，否则抛出指定的异常。</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> optional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> value <span class="token operator">=</span> optional<span class="token punctuation">.</span><span class="token function">orElseThrow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;fallback value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 抛出RuntimeException</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="date-time-api" tabindex="-1"><a class="header-anchor" href="#date-time-api" aria-hidden="true">#</a> Date/Time API</h2><p>随着 JDK 1.5 走来的 java.util.Date 、java.util.Calendar 、java.util.GregoiranCalendar 和 java.text.SimpleDateFormat 相信大家已经烂熟于心了，其中的弊端也是十分头疼：</p><ol><li>非线程安全：java.util.Date 并不是线程安全的。开发者在使用这个类时必须自己处理多线程并发问题。</li><li>设计不佳 ：一方面日期和日期格式化分布在多个包中。另一方面，java.util.Date 的默认日期，年竟然是从 1900 开始，月从 1 开始，日从 0 开始，没有统一性。而且 Date 类也缺少直接操作日期的相关方法。</li><li>时区处理困难：因为设计不佳，开发人员不得不编写大量代码来处理时区问题。</li></ol><h3 id="本地时间" tabindex="-1"><a class="header-anchor" href="#本地时间" aria-hidden="true">#</a> 本地时间</h3><p>Java 8 为处理本地的日期时间提供了三个类 LocalDate 、LocalTime 和 LocalDateTime。分别用于处理 本地日期、本地时间 和 本地日期时间。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 返回当前的日期时间，默认使用的是操作系统的时区。
LocalDateTime currentTime = LocalDateTime.now();

// 时间切换
LocalDateTime currentTime = LocalDateTime.now();
LocalDate date1 = currentTime.toLocalDate();
LocalTime time1 = currentTime.toLocalTime();

// 当前月份
Month month = currentTime.getMonth();
// 当前月中的第几天
int day = currentTime.getDayOfMonth();
// 当前秒数
int seconds = currentTime.getSecond();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时区时间" tabindex="-1"><a class="header-anchor" href="#时区时间" aria-hidden="true">#</a> 时区时间</h3><p>ZonedDateTime 和 LocalDateTime 类似，几乎有着相同的 API。从某些方面说，ZonedLocalTime 如果不传递时区信息，那么它会默认使用操作系统的时区，这样，结果其实和 LocalDateTime 是类似的。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 返回当前的日期时间
ZonedDateTime now = ZonedDateTime.now();
ZonedDateTime datetime = ZonedDateTime.parse(&quot;2012-10-10T21:58:00+08:00&quot;);

// 切换本地时间
LocalDate date = now.toLocalDate();
LocalTime time = now.toLocalTime();

// 获取当前时区
ZoneId currentZone = ZoneId.systemDefault();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式化" tabindex="-1"><a class="header-anchor" href="#格式化" aria-hidden="true">#</a> 格式化</h3><p>Java 8 重新创建了一个 java.time.format 包，新增 DateTimeFormatter、DateTimeFormatterBuilder、FormatStyle 用于格式化日期时间。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 格式化本地时间
DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy/MM/dd H:m:s&quot;);
String text = now.format(formatter);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function b(g,f){const t=s("Mermaid"),l=s("VPCard");return o(),p("div",null,[v,m,e(t,{id:"mermaid-6",code:"eJzLzcxLyU0s4FJQKMrPL9HQ8EosS1SwUHg2bcPzzp3PGpZragKlFBQ880pSi9ISk1PBPP+Cksz8vMQcMMcnMTcpJVHhxcIVL/bte7qnHyz4tH3vs6kbgLxnfUuf9i8Giz2btvPZ5qlP90x9PmUFWCC4pCg1MVfBMcCTCwAgbzgM"}),e(l,c(u({title:"oracle JDK 8 介绍",desc:"点击跳转官网查看详细内容",logo:"/icon/oracle.svg",link:"https://www.oracle.com/java/technologies/javase/8-whats-new.html",color:"rgba(173, 216, 590, 0.15)"})),null,16),k])}const q=i(d,[["render",b],["__file","java8.html.vue"]]);export{q as default};
