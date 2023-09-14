---
star: true
category: 工作任务
tag: 
  - Java
  - Spring Boot
---

# 重构接收价格前置项目
## 引言
没想到，重构这个项目的原因居然是公司开始不再使用 Tomcat 部署项目，想把之前的 war 包启动的项目都换成 jar 包部署。之前的前置项目大部分都都是“远古时期”流传下来的“毒瘤”，纯 Java 项目，各种 Thread 满天飞，规范什么的就更别提了，为了追赶上线进度，我们引用 tomcat-embed 模块实现 Java 内置 Tomcat 启动，核心代码如下：

```java
public class Main {
    public static void main(String[] args) throws Exception {
        String webappDirLocation = "src/main/webapp";
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(8080);
        tomcat.addWebapp("/", new File(webappDirLocation).getAbsolutePath());
        tomcat.start();
        tomcat.getServer().await();
    }
}
```

虽然这样可以脱离 Tomcat 部署，但是肯定不是长远之计，所以重构的任务就落到了我的身上，其实在我看来这些老项目还是应该尽早维护，趁着了解业务的人都还在和项目并不复杂的时候，尽早规范统一起来才是正途。虽然这些前置项目平时都不是我负责，但是多多少少上线和联调的时候也都接触过，并说不上陌生，而且业务也不负责，话不多说直接开始。

## 重构思路
### 框架选型
价格接收转发前置项目，这是一个接收交易所价格并转发给多个后台的纯后台项目，几乎没有什么逻辑处理，就是是充当透传的作用，因为数据压力不大，所以我们采用双活的 Spring Boot 来选择重构部署。由于只是转发价格，并不作存储作用，所以我们并不会牵扯到数据持久化的问题，不会用到数据库。往后台项目推送价格有使用 MQ 交互的，也有用 Socket 通信的，MQ 这里我们只能使用公司在用的 IBM MQ，Socket 我们就继续原来使用了 Java 原生的 Socket 类实现。置于其他的知识点就放在下面一一介绍了。

### 业务梳理
业务流程就是在工作日时将所需要的产品价格从交易所获取并转发给报价平台、K线平台和日终价格三个后台项目。

与交易所建立通讯之后，通过接口会一直受到价格，并且连接建立之后并不会主动断开，除非遇到网络等特殊情况，如果发生断联则触发重连策略。而所收到的价格并不是随时并且全部都发送，因为有些产品的价格是我们不需要的，但是又不确定对方发送的产品价格是固定的，所以我们将自己定义的工作日和所需产品价格。而所需数据的后台项目有新有旧，所以对接价格的接口实现还需要和后台一致。

```flow
start=>start: 启动项目
one=>operation: 尝试与交易所建立连接
isConn=>condition: 是否建立连接
isSend=>condition: 价格是否需要发送
transfer=>operation: 对接后台准备发送
sub=>subroutine: 后台程序

start->one
one(right)->isConn
isConn(yes, right)->isSend
isConn(no, top)->one
isSend(yes, right)->transfer
transfer(right)->sub
```

## 方案设计
### 线程池方案
项目中需要使用多个线程监听价格队列的变化，所以我们统一使用 Spring 的 ```ThreadPoolTaskExecutor``` 来创建线程池进行管理，根据系统需求规定好核心线程数、最大线程数、任务队列长度和线程最大空闲时间等关键参数，作为 Bean 注入到 Spring 容器后，通过实现 ```ApplicationRunner``` 中的 ```run``` 方法在项目启动的时候从容器中拿到线程池来 execute 各个业务线程。

因为业务线程有依赖关系，需要考虑到线程的启动顺序，比如说价格发送线程必须在价格接收线程启动完成后再启动，我们这里采用 Java 提供的 ```CountDownLatch``` 线程计数器来解决，当每条价格发送线程启动后执行计数器减一的操作，在计数器为零再放行价格接收线程开启。

### 价格的接收与筛选
从交易所获取的价格虽然密集的，但是好在并不会频繁更新，而且由于我们只需要工作日接收价格并且只关心我们在意的币种，所以我们将工作日和需求币种维护到 yaml 中，如果是接收的价格并没有在我们的需求范围内则直接抛弃。
 
集成交易所的 sdk 后，通过唯一的身份.cfg文件与交易所建立 Socket 长链接，交易所返回的价格存储到本地阻塞队列中，因为要求价格的实时性，所以当主队列价格超过20条时清空队列。

### 价格的处理与转发
本项目唯一麻烦的点就是价格的处理与转发，因为需要往多个后台进行实时转发，并且每个后台对价格的格式、种类和接收方式也有要求，所以为了解耦，我们借助 Spring 的 Event 事件来处理每个平台价格的转发，也就是观察者模式。

首先，为了解决实时性，我们用 while 一直从总价格队列中 take 拿取价格到我们针对每个平台初始化的多个阻塞队列来区分价格，并将这些队列注册到 Spring 容器中，通过新建线程来监听容器每个后台价格队列的变化，当总价格队列根据价格类型和币种存储将价格分发到后台队列中时，线程监听到价格并将价格借助 Event 的参数传递发布出去，监听每个 Event 的观察者收到参数后对报文进行封装并发送。


## 代码实现
> 因为代码都在内网，这里采用伪代码的方式进行展示。

### 线程池
::: normal-demo 线程池代码
```java
// application.yaml
tread-pool:
  core-pool-size: 9
  max-pool-size: 10
  queue-capacity: 10
```
```java
// ThreadPoolConfig
@Getter
@Setter
@Configuration
@ConfigurationProperties("tread-pool")
public class ThreadPoolConfig {
  /**
   * 核心线程数
   */
  private int corePoolSize;
    /**
   * 核心线程数
   */
  private int maxPoolSize;
  /**
   * 任务队列长度
   */
  private int queueCapacity;
  /**
   * 线程最大空闲时间
   */
  private int keepAliveSeconds;
}
```
```java
// AppConfig
@Configuration
public class AppConfig {
  
  @Resource
  private ThreadPoolConfig threadPoolConfig;

  @Bean
  public ThreadPoolExecutor appThreadPool() {
    ThreadPooolTaskExexutor threadPooolTaskExexutor = new ThreadPooolTaskExexutor();
    threadPooolTaskExexutor.setCorePoolSize(threadPoolConfig.getCorePoolSize());
    threadPooolTaskExexutor.setMaxPoolSize(threadPoolConfig.getMaxPoolSize());
    threadPooolTaskExexutor.setQueueCapacity(threadPoolConfig.getQueueCapacity());
    threadPooolTaskExexutor.setThreadNamePrefix("appThreadPool-");
    threadPooolTaskExexutor.initialize();
    return threadPooolTaskExexutor;
  }

  @Bean("pricesQueue")
  public LinkedBlockingQueue<CmdsPriceDto> pricesQueue() {
    return new LinkedBlockingQueue<>();
  }
  
  …………
}
```
```java
// applicationRunner
@Component
@RequiredArgsConstructor
public class applicationRunner implements ApplicationRunner {

  private final ThreadPoolExecutor appThreadPool;
  private final CountDownLatch countDownLatch;

  @Override
  public void run(ApplicationArguments args) throws InterruptedException, ConfigError {
    // 启动价格发送线程
    appThreadPool.execute();
    // 等待价格处理线程发送完成
    countDownLatch.await;
    // 连接交易所线程启动

  }
}
```
:::

::: normal-demo 价格处理与转发
```java
// event
@Getter
public class PriceEvent extends ApplicationEvent {

  private final List<CmdsPriceDto> cmsPriceDtos;

  public priceEvent(Object source, List<CmdsPriceDto> cmdsPriceDtos) {
    super(source);
    this.cmdsPriceDtos = cmdsPriceDtos;
  }
}
```
```java
@Component
public class PriceListener implements ApplicationListener<PriceEvent> {

  @Overide
  public void onApplicationEvent(PriceEvent enent) {
    // 处理价格并发送
  }
}
```
```java
```
:::