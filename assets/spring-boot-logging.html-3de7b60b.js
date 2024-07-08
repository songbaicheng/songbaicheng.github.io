import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as u,d as a,n as p,g as d,w as l,a as n,b as s,e as i}from"./app-e8efb839.js";const g="/assets/images/study/backend/java/spring/spring-boot-logging/spring-boot-log-format.png",m={},v=n("h1",{id:"spring-boot-logging",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-boot-logging","aria-hidden":"true"},"#"),s(" Spring Boot Logging")],-1),k=n("h2",{id:"关于-spring-日志",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于-spring-日志","aria-hidden":"true"},"#"),s(" 关于 Spring 日志")],-1),b=n("p",null,"在 Spring Boot 的官方文档的核心功能部分介绍了 Spring 对日志功能的支持，Spring 并没有自己的日志框架实现，而是使用 SLF4J（Simple Logging Facade for Java）作为日志门面，在底层使用 Commons Logging 作为抽象层去识别和对接一些常见的日志框架，如 Logback、Log4j2 等。Spring Boot 默认集成了 Logback 作为日志框架并支持我们在配置文件通过简单的配置就可以开箱即用，如果想了解更多细节可以点击下面卡片跳转官网查看。",-1),h=i(`<h2 id="简单方案" tabindex="-1"><a class="header-anchor" href="#简单方案" aria-hidden="true">#</a> 简单方案</h2><h3 id="极速版" tabindex="-1"><a class="header-anchor" href="#极速版" aria-hidden="true">#</a> 极速版</h3><p>Spring 默认配置了控制台输出，所以我们可以在配置文件添加以下配置选择文件输出。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">root</span><span class="token punctuation">:</span> INFO
    <span class="token key atrule">com.example</span><span class="token punctuation">:</span> DEBUG

  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> /var/log/myapp.log
    <span class="token key atrule">totalSizeCap</span><span class="token punctuation">:</span> 10MB
    <span class="token key atrule">historySize</span><span class="token punctuation">:</span> <span class="token number">7</span>
    <span class="token key atrule">maxFileSize</span><span class="token punctuation">:</span> 1MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+'" alt="默认日志格式" tabindex="0" loading="lazy"><figcaption>Spring Boot 默认日志格式</figcaption></figure><ul><li>日期和时间：毫秒精度且易于排序。</li><li>日志级别：TRACE, DEBUG, INFO, WARN, ERROR, FATAL，要知道 Logback 没有 FATAL 级别，它被映射到 ERROR 里。</li><li>线程名称：用方括号括起来（可能会被截断以用于控制台输出）。</li><li>记录器名称：这通常是源类名称（通常是缩写）。</li><li>日志消息：对应你代码中答应的日志信息。</li></ul><h3 id="常规版" tabindex="-1"><a class="header-anchor" href="#常规版" aria-hidden="true">#</a> 常规版</h3><p>在我工作中正常服务器的日志使用的话，通常是搭配 pom.xml 来构建多环境打包的方案，使用 logback.xml 搭配一些输出类型进行输出日志文件，常用的输出类型有以下几种：</p><table><thead><tr><th style="text-align:center;">输出类型</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;">ConsoleAppender</td><td>将日志输出到控制台</td></tr><tr><td style="text-align:center;">FileAppender</td><td>将日志输出到单个文件</td></tr><tr><td style="text-align:center;">RollingFileAppender</td><td>支持滚动的文件输出，根据条件生成新的日志文件</td></tr><tr><td style="text-align:center;">SizeAndTimeBasedRollingPolicy</td><td>基于时间和文件大小的滚动策略，根据时间和大小规则生成新的日志文件</td></tr><tr><td style="text-align:center;">TimeBasedRollingPolicy</td><td>基于时间的滚动策略，根据时间周期生成新的日志文件</td></tr><tr><td style="text-align:center;">DailyRollingFileAppender</td><td>按照每天滚动的策略，生成带有日期的日志文件</td></tr><tr><td style="text-align:center;">自定义Appender</td><td>用户根据需求编写的自定义输出类型</td></tr></tbody></table><p>下面是一个通用的 logback.xml ，其配置是按照日期和文件大小进行输出的。</p>',10),y=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("configuration")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token comment"},"<!-- 定义日志输出的根目录 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("property")]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("LOG_HOME"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/Users/songbaicheng/logs/cloud-mall/mall-web"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`

    `),n("span",{class:"token comment"},"<!-- 定义日志文件的名称 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("property")]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("LOG_NAME"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mall-web"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`

    `),n("span",{class:"token comment"},"<!-- 控制台输出 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("appender")]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("CONSOLE"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ch.qos.logback.core.ConsoleAppender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("encoder")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pattern")]),n("span",{class:"token punctuation"},">")]),s("%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{36} - %msg%n"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("pattern")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("encoder")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("appender")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token comment"},"<!-- 按文件大小滚动的文件输出 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("appender")]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("FILE"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ch.qos.logback.core.rolling.RollingFileAppender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("rollingPolicy")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("fileNamePattern")]),n("span",{class:"token punctuation"},">")]),s("${LOG_HOME}/%d{yyyy-MM-dd}/${LOG_NAME}.%i.log"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("fileNamePattern")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("maxFileSize")]),n("span",{class:"token punctuation"},">")]),s("10MB"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("maxFileSize")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("totalSizeCap")]),n("span",{class:"token punctuation"},">")]),s("100MB"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("totalSizeCap")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("maxHistory")]),n("span",{class:"token punctuation"},">")]),s("30"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("maxHistory")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("rollingPolicy")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("encoder")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pattern")]),n("span",{class:"token punctuation"},">")]),s("%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("pattern")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("encoder")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("appender")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token comment"},"<!-- 日志输出级别 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("root")]),s(),n("span",{class:"token attr-name"},"level"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("appender-ref")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("CONSOLE"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("appender-ref")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("FILE"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("root")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("configuration")]),n("span",{class:"token punctuation"},">")]),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=i(`<h2 id="操作日志场景" tabindex="-1"><a class="header-anchor" href="#操作日志场景" aria-hidden="true">#</a> 操作日志场景</h2><p>在真实的业务场景中，日志可以分为<strong>业务日志</strong>和<strong>操作日志</strong>两种.</p><p><strong>系统日志</strong>是指的是程序执行过程中的关键步骤，根据实际场景输出的 <strong>debug、info、warn、error</strong> 等不同级别的程序执行记录信息，这些一般是给程序员或运维看的，一般在出现异常问题的时候，可以通过系统日志中记录的关键参数信息和异常提示，快速排除故障。</p><p><strong>操作日志</strong>是用户实际业务操作行为的记录，这些信息一般存储在数据库里，如什么时间哪个用户点了某个菜单、修改了哪个配置等这类业务操作行为，这些日志信息是给普通用户或系统管理员看到。</p><p>首先先列举一个反面案例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@RestController
@Slf4j
@BusLog(name = &quot;人员管理&quot;)
@RequestMapping(&quot;/person&quot;)
public class PersonController {

    @Autowired
    private IPersonService personService;
    @Autowired
    private IBusLogService busLogService;


    @PostMapping
    public Person add(@RequestBody Person person) {
       try{
           //添加信息信息
        Person result = this.personService.registe(person);
        //保存业务日志
        this.saveLog(person);
        log.info(&quot;//增加person执行完成&quot;);        
       }catch(Exception e){
           //保存异常操作日志
           this.saveExceptionLog(e);       
       }
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种通过硬编码实现的业务操作日志管理功能，最大的问题就是业务操作日志收集与业务逻辑耦合严重，和代码重复，新开发的接口在完成业务逻辑后要织入一段业务操作日志保存的逻辑.</p><p>为了解决这个问题，我们可以通过 AOP 的方式进行统一处理操作日志，将业务操作日志的收集与业务逻辑解耦，这样就可以在业务逻辑中专注于业务逻辑的开发，而不用再关注业务操作日志的收集。</p><ol><li>定义日志注解</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface ILog {

} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>定义日志切面</li></ol>`,11),S=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`@Aspect
public class ILogPrintAspect {

    @Pointcut("@within(com.sbc.log.annotation.ILog) || @annotation(com.sbc.log.annotation.ILog)")
    public void pointcut() {
    }

    @Around("pointcut()")
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        long startTime = SystemClock.now();
        MethodSignature methodSignature = (MethodSignature) pjp.getSignature();
        Logger log = LoggerFactory.getLogger(methodSignature.getDeclaringType());
        String beginTime = DateUtil.now();
        Object result = null;
        try {
            result = pjp.proceed();
        } finally {
            Method targetMethod = pjp.getTarget().getClass().getDeclaredMethod(methodSignature.getName(), methodSignature.getMethod().getParameterTypes());
            ILog logAnnotation = Optional.ofNullable(targetMethod.getAnnotation(ILog.class)).orElse(pjp.getTarget().getClass().getAnnotation(ILog.class));
            if (logAnnotation != null) {
                ILogPrintDTO logPrint = new ILogPrintDTO();
                logPrint.setBeginTime(beginTime);
                if (logAnnotation.input()) {
                    logPrint.setInputParams(buildInput(pjp));
                }
                if (logAnnotation.output()) {
                    logPrint.setOutputParams(result);
                }
                String methodType = "", requestURI = "";
                try {
                    ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
                    assert servletRequestAttributes != null;
                    methodType = servletRequestAttributes.getRequest().getMethod();
                    requestURI = servletRequestAttributes.getRequest().getRequestURI();
                } catch (Exception ignored) {
                }
                log.info("[{}] {}, executeTime: {}ms, info: {}", methodType, requestURI, SystemClock.now() - startTime, JSON.toJSONString(logPrint));
            }
            
            // 操作数据插入数据库
            // ......
        }
        return result;
    }

    /**
     * 构建输入参数
     *
     * @param pjp 切入点
     * @return 输入参数
     */
    private Object[] buildInput(ProceedingJoinPoint pjp) {
        Object[] args = pjp.getArgs();
        Object[] printArgs = new Object[args.length];
        for (int i = 0; i < args.length; i++) {
            if ((args[i] instanceof HttpServletRequest) || args[i] instanceof HttpServletResponse) {
                continue;
            }
            if (args[i] instanceof byte[]) {
                printArgs[i] = "byte array";
            } else if (args[i] instanceof MultipartFile) {
                printArgs[i] = "file";
            } else {
                printArgs[i] = args[i];
            }
        }
        return printArgs;
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("p",null,"使用该注解在目标方法上，就可以实现操作日志的自动收集，方法内部只需要关心业务逻辑的开发即可。",-1);function x(R,q){const o=t("VPCard"),e=t("CodeDemo");return r(),u("div",null,[v,k,b,a(o,p(d({title:"Spring Security 官网文档",desc:"点击跳转官网查看详细内容",logo:"/assets/common-icon/spring-initializr.svg",link:"https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#features.logging",color:"rgba(173, 216, 590, 0.15)"})),null,16),h,a(e,{id:"code-demo-129",type:"normal",title:"logback.xml",code:"eJytVF1v0zAU/SsmIo+JhyZ4qEKlrmIUaW0nCk8UITdx0wjHLnY6Vqq8IY0hYEgIJpUXHkBFQpr6NGmbgD+ztPwM7HyIpFPpHmYpiXJ9fM6918ceabs+0UqaZTPa9dwBR4HHaLlN2xTIYV0zDBAdjc9P9meH36Lfh39+fYj2Tufjl7MvJ/PPR9HPj8AwJDwG9znrYx4MAUU+vt3Wtpp3n9Sa9TttDewgMlAh+FBgLqBg1O0gz+5h6kLCXAFtwgaO4SNCoHoZz3FHopcnMvu0d352LBOJ3r+dT6YrsmhUClksVZi9m0SvjqODaVJnjhX1+5g6mGes1Waj1dxSpDZBQsiI3TOfMWHKajrIfmrajGOzyqhgBFfSxW0tpYspMbWZDOZCSf4oCDCnZd0ZDeUw6nXDcUCtVvL9khBmq9UKgW7cJHgHE/BID3ocI+cx0KWwi/lo/VYIDKD7wtWpBTOynCws6lowK22hFW/2kx5HXyfR9GB2No5ef1cbHwdX9mfz3srmcEaIR13zfvLd9JY1KgVuM+LZw0tRtrwXuEKdB56PN5DATiqRMBTIY4GulG7IvLfTbl0fZdYNYWEbQphMKT+Fpu4pdQsuLl9g99Guqk3lVL6xVt+wpMP/RRbAAQsQURNV1JfoGF6IXSSveSJgfFheX4uZs9/8lhc6eEUezFkvc+OVezB/55zKo/kj5zjOWABiXWkGj3ZZ0TQZo8FxF8gnf2bVqf8fMDFvhlLtY0GcmQUv3pNa+BeiFdiR"},{default:l(()=>[y]),_:1}),f,a(e,{id:"code-demo-169",type:"normal",title:"%E5%AE%9A%E4%B9%89%E5%88%87%E9%9D%A2",code:"eJyNVs1u20YQfpWtTqSj0j0nDWDVThAbjWXEysnSgaJW1KarXXY5tC04ugQt2ksQoEZvRW+9Fr02Rfs0ldrHyAx3RVIiaXshQPvzzc/OfjPDm85JeBl2HncOemnCIxiqJBtLEbFIhmnKjr/W8ZkRCuwpuxmqoWI4Ds407kYZeMPOwZWAmVBepOdBOo4CqeMgVEpDCEKrgHT47O1bdlBu3okddnxrxLlyqcWEJRt7PjlBp8vCl57RmZqgJyVoV0d//Ib8Dy3yzOiI84lQ8QlK5FdhyZvEZzAz+iplA/oLx5JvbNGQWsUshdDAQMw5e8rOFynw+aHU0TeB0lee/6QEv+Qw05NzEasQMsPZfGf9lHk7EJ88CGIOxc6WQgxMzA06EaOsXTwPI9BmQTJ2w9uxQidHHF8SXzAeLBLUWFV5DrTPxjwWyl3pKAT+GoSs3cfFz/A0k4BAlUlZOQazqIaKRgGlayU24Fsql2wqVChlTdIGhmGk0X+3sGpwPch3PZ/mh8RRO7XX5BMLbwrEaTjH+3d3X4KOnFCu6Cw0CARuKF6ovOoxDWIovUKvIC361k9oEspAT08xMMQcr+o+KS4FPNIR5Anm+4E2z2TKvbuv1yK845uYMm/btc/sSxU5s3uTPLePBn26UT6np+VXW2dbj1Ymgz0PUg5fbQjkFVRqEql5FwgsNnjXRu92jRwTNn+c1BtnQk7yDQpbLQyuONxvX2fwcAf6Odh5YMn9QMMuzyzxiFYY5GFn2Olijnyb8RRevzp2Ww0KG1KrUMzNpeTwymrpAdoZZ8BTlrYdYNlpE/KZ2zrUCvg1vNBywg2RrwZtZAQNJCU30G7e0bFFeitAbToqDtnU2CRvi9KtED9YqVugVKPiJYtCiGbMe3Yd8Tz3GdYTjfWnkUoNnKC+J9RUY9O6uFmO2M2yy/g1x97FKX8e48Y87TKC0JzIUoanSpxuvQ2xz8s21WUn5/3TADT9WSJSEuSsriXOjp/bq/19tr59/+/fv6x//mP9/vf1h59W3/9m56uPtzVskI9KtS+nhmPhVa5BOBeKZr6/t+eQe2z963ervz7+/88tWlp9eIfGNkcF5CChhKTmwFY//oC4/979WR46S00a9t3ngRGX2PNcf7sYsUptaf1KqDxxIYd1m9LLlfEerhr6J+LQIH5NWTBVWndA4oHkKobZqCI21YZ5ZFcg/Isn+PdlbslBcePRoxrlqNB5hLoQI2QQckFFXE/ZC4BkO/vzz7L7kGmiVYqfJw3EjrBUCJXxu3lE/jQYGS+AX4wa9RZBIhGqjIRFR024qNXIJePYP9uMvESKCeQIPBey+Q41W1NEtlm5X9750B6ReiIUGspcwF9n+Qlbvqkp"},{default:l(()=>[S]),_:1}),A])}const I=c(m,[["render",x],["__file","spring-boot-logging.html.vue"]]);export{I as default};
