import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c as d,e as l,b as e,d as s,a as c}from"./app-3c9963c4.js";const t={},v=e("h1",{id:"java-异常",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-异常","aria-hidden":"true"},"#"),s(" Java 异常")],-1),o=c(`<h2 id="java-异常简介" tabindex="-1"><a class="header-anchor" href="#java-异常简介" aria-hidden="true">#</a> Java 异常简介</h2><p>Java 异常是 Java 提供的一种识别及响应错误的一致性机制。Java 异常机制可以使程序中异常处理代码和正常业务代码分离，保证程序代码更加优雅，并提高程序健壮性。</p><h3 id="throwable" tabindex="-1"><a class="header-anchor" href="#throwable" aria-hidden="true">#</a> Throwable</h3><p>Throwable 是 Java 语言中所有错误与异常的超类，其中包含两个子类：Error（错误）和 Exception（异常），它们通常用于指示发生了异常情况。Throwable 包含了其线程创建时线程执行堆栈的快照，它提供了 printStackTrace() 等接口用于获取堆栈跟踪数据等信息。</p><h3 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> Error</h3><p>Error 类及其子类是程序中无法处理的错误，表示运行应用程序中出现了严重的错误。此类错误一般表示代码运行时 JVM 出现问题。通常有 Virtual MachineError（虚拟机运行错误）、NoClassDefFoundError（类定义错误、 OutOfMemoryError：内存不足错误、StackOverflowError：栈溢出等错误。此类错误发生时，JVM 将终止线程。</p><p>这些错误是不受检异常，非代码性错误。因此，当此类错误发生时，应用程序不应该去处理此类错误。按照 Java 惯例，我们是不应该实现任何新的 Error 子类的！</p><h3 id="exception" tabindex="-1"><a class="header-anchor" href="#exception" aria-hidden="true">#</a> Exception</h3><p>程序本身可以捕获并且可以处理的异常。Exception 这种异常又分为两类：运行时异常和编译时异常。</p><ul><li>运行时异常：RuntimeException 类及其子类，表示 JVM 在运行期间可能出现的异常。</li><li>编译时异常：Exception 中除 RuntimeException 及其子类之外的异常。</li></ul><h2 id="常见异常处理方式" tabindex="-1"><a class="header-anchor" href="#常见异常处理方式" aria-hidden="true">#</a> 常见异常处理方式</h2><h3 id="直接抛出异常" tabindex="-1"><a class="header-anchor" href="#直接抛出异常" aria-hidden="true">#</a> 直接抛出异常</h3><p>通常，应该捕获那些知道如何处理的异常，将不知道如何处理的异常继续传递下去。传递异常可以在方法签名处使用 throws 关键字声明可能会抛出的异常。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private static void readFile(String filePath) throws IOException {
    File file = new File(filePath);
    String result;
    BufferedReader reader = new BufferedReader(new FileReader(file));
    while((result = reader.readLine())!=null) {
        System.out.println(result);
    }
    reader.close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装异常再抛出" tabindex="-1"><a class="header-anchor" href="#封装异常再抛出" aria-hidden="true">#</a> 封装异常再抛出</h3><p>有时我们会从 catch 中抛出一个异常，目的是为了改变异常的类型。多用于在多系统集成时，当某个子系统故障，异常类型可能有多种，可以用统一的异常类型向外暴露，不需暴露太多内部异常细节。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private static void readFile(String filePath) throws MyException {
    try {
        // code
    } catch (IOException e) {
        MyException ex = new MyException(&quot;read file failed.&quot;);
        ex.initCause(e);
        throw ex;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="捕获异常" tabindex="-1"><a class="header-anchor" href="#捕获异常" aria-hidden="true">#</a> 捕获异常</h3><p>在一个 try-catch 语句块中可以捕获多个异常类型，并对不同类型的异常做出不同的处理</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private static void readFile(String filePath) {
    try {
        // code
    } catch (FileNotFoundException | UnknownHostException e) {
        // handle FileNotFoundException or UnknownHostException
    } catch (IOException e){
        // handle IOException
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a> 自定义异常</h3><p>习惯上，定义一个异常类应包含两个构造函数，一个无参构造函数和一个带有详细描述信息的构造函数（Throwable 的 toString 方法会打印这些详细信息，调试时很有用）</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MyException extends Exception {
    public MyException(){ }
    public MyException(String msg){
        super(msg);
    }
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="try-catch-finally" tabindex="-1"><a class="header-anchor" href="#try-catch-finally" aria-hidden="true">#</a> try-catch-finally</h3><p>当方法中发生异常，异常处之后的代码不会再执行，如果之前获取了一些本地资源需要释放，则需要在方法正常结束时和 catch 语句中都调用释放本地资源的代码，显得代码比较繁琐，finally 语句可以解决这个问题。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private static void readFile(String filePath) throws MyException {
    File file = new File(filePath);
    String result;
    BufferedReader reader = null;
    try {
        reader = new BufferedReader(new FileReader(file));
        while((result = reader.readLine())!=null) {
        System.out.println(result);
    }
    } catch (IOException e) {
        System.out.println(&quot;readFile method catch block.&quot;);
        MyException ex = new MyException(&quot;read file failed.&quot;);
        ex.initCause(e);
        throw ex;
    } finally {
        System.out.println(&quot;readFile method finally block.&quot;);
        if (null != reader) {
            try {
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用该方法时，读取文件时若发生异常，代码会进入 catch 代码块，之后进入 finally 代码块；若读取文件时未发生异常，则会跳过 catch 代码块直接进入 finally 代码块，所以无论代码中是否发生异常，fianlly 中的代码都会执行。</p><h3 id="try-with-resource" tabindex="-1"><a class="header-anchor" href="#try-with-resource" aria-hidden="true">#</a> try-with-resource</h3><p>上面例子中，finally 中的 close 方法也可能抛出 IOException, 从而覆盖了原始异常。JAVA 7 提供了更优雅的方式来实现资源的自动释放，自动释放的资源需要是实现了 AutoCloseable 接口的类。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private  static void tryWithResourceTest(){
    try (Scanner scanner = new Scanner(new FileInputStream(&quot;c:/abc&quot;),&quot;UTF-8&quot;)){
        // code
    } catch (IOException e){
        // handle exception
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>try 代码块退出时，会自动调用 scanner.close 方法，和把 scanner.close 方法放在 finally 代码块中不同的是，若 scanner.close 抛出异常，则会被抑制，抛出的仍然为原始异常。被抑制的异常会由 addSusppressed 方法添加到原来的异常，如果想要获取被抑制的异常列表，可以调用 getSuppressed 方法来获取。</p>`,31);function u(h,m){const i=n("Mermaid");return r(),d("div",null,[v,l(i,{id:"mermaid-3",code:"eJzLzcxLyU0s4FJQKMrPL9HQ8EosS1R4uqfp6Y4dmppAURAIySjKL09MykmF8l2LivKLYOyK5NSCksz8PCj/af/0Z4sbIAZAhV7OnYdFlAsALfMtFA=="}),o])}const x=a(t,[["render",u],["__file","exception.html.vue"]]);export{x as default};
