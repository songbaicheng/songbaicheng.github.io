---
category: 工作任务
tag: 
  - scheduled
  - Java
---

# 定时任务
## 关于定时任务的使用场景
定时任务，定时任务，顾名思义，就是指定时执行某些特定操作或任务的功能。工作中的业务难免要定时任务打交道，网络上常见的定时任务场景有以下几种：

- 数据备份：定时备份数据库、文件等数据，以防数据丢失或损坏。
- 数据统计：定时统计业务数据、用户行为数据等。
- 清理任务：定时清理缓存、日志、垃圾文件等。
- 自动化任务：定时执行自动化测试、自动化发布等任务。
- 资源管理：定时检查并释放资源，如数据库连接、内存等。
- 系统监控：定时检查系统运行状况，如 CPU 占用率、内存使用情况、磁盘空间等。

## 工作中遇到的定时任务场景
有一说一，一些高端的场景我倒是没有遇到过，但是思想和实现我感觉应该也是同样的基调，无非是放在哪里用是了。以下是工作中我遇到的定时任务场景。

### 定期清理审批单
招录组织实施系统，其中有个环节是要求考生提交个人信息进行审核，审核的规则是这样的：每个审核人在审核时会从库里捞十个未审核的考生材料出来进行审核，被审核的考生材料会被标记为审核中，每份考生的材料同一时间只能被一位审核人审核。当时这样设计的初衷想想大概就是为了能加快审核进度，并且一次性加载十份材料也可以提升审批下一位时的体验，可是这样也有弊端，比如说有些审核人拉取完十位考生后不能进行后面审核，这几份考生的材料就会无法被其他审核人获取到从而导致无人审批，正因如此，为了解决有些材料一直无人审批的情况添加了一个定时任务，当一份材料被审核人抽取到转为审核中的时候，同时保存转换状态的时间，创建一个定时任务每过五分钟就遍历一下表中当前批次下已经在审核中状态超过半个小时的材料并重新将其置为未审核的状态，方便其他审核人去拿到这些可能存在不能及时审批隐患的材料。

其实现在想想这个逻辑还是存在不少问题的，比如说如果审核人正在审批一份超过30分钟或者已经被重新置为未审核的材料，此时审批人再去点击审批结果的时候发现审批已经失效，则会浪费多余的审批时间，这对于每次考试数十万考生的审批量无疑是个大问题。不过当时那已经是一个老项目了，也没有人提出重构的需求，放在现在如果仔细想想如果重新设计这个请求的话，应该不会采用这种方式一次获取十份材料的方式，像现在类似oss和一些高性能的架构的出现，已经不用太过担心体验和性能问题，这个定时任务的场景其实也正好能暴露时间轮的问题，并不是每份材料到了30分钟就会被重新标记为未审核，当然现在的时间轮算法估计已经足够精确，就算有误差也是可以忽略不计的。

### 定期获取价格文件
接收价格的前置项目，我们和彭博约定在每天的四点请求获取每日的币种价格，彭博收到请求后将处理后的数据存放到公共的 ftp 服务器上，这里定时任务的需求就很明确了，为了保证一定可以拿到彭博处理的数据，我们会在四点五十去ftp获取价格文件，获取到价格后通过 MQ 推送到其他后台程序，当然就算是延后50分钟也不能保证每次都可以成功获取到每日价格文件，所以我们在每日的流水表中增加价格处理状态的字段，如果是获取不到文件则标记为 E 状态，每晚八点如果是今日获取价格文件的状态为 E 的重新执行一次获取价格文件，如果是其他错误状态则需要第二天人工排查问题。

### 日终任务
公司 ERP 平台作为中介对接了第三方的支付机构作为支付渠道，需要每日最后与各个渠道确认每个客户的可用余额留档方便对账，考虑到用户体量而且要调用第三方接口查询数据，此次任务采用异步线程池实现方式，为了区分各个支付渠道解耦，并采用 Spring Event 实现观察者模式来实现，想了解可参考我的 [观察者模式](/study/design-pattern/observer.html) 文章。

1. 首先定义执行事件的异步线程池。
::: normal-demo 自定义线程池
```Java
package cn.sdpjw.account.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @Description: 自定义 Spring Event 线程池配置类
 * @Author: songbaicheng
 * @Create: 2024/10/9 14:24
 **/
@Configuration
public class EventExecutorConfiguration {

    /**
     * 线程池配置
     */
    int corePoolSize = 15;
    /**
     * 线程池最大线程数
     */
    int maxPoolSize = 30;
    /**
     * 线程池缓冲队列容量
     */
    int queueCapacity = 100;
    /**
     * 线程池缓冲队列等待时间
     */
    long keepAliveTime = 90;

    @Bean(name = "eventTaskExecutor")
    public ExecutorService eventTaskExecutor() {
        return new ThreadPoolExecutor(corePoolSize, maxPoolSize, keepAliveTime, TimeUnit.SECONDS, new ArrayBlockingQueue<>(queueCapacity),
                // 拒绝策略，CallerRunsPolicy 表示由调用线程直接执行任务，以减缓提交的速度。
                new ThreadPoolExecutor.CallerRunsPolicy());
    }
}

```
:::

2. 定义触发事件。
::: normal-demo 定义 Event
```Java
package cn.sdpjw.account.observer.event;

import cn.sdpjw.account.entity.ElectronicAccount;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.context.ApplicationEvent;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

/**
 * @Description: 日终账户可用余额事件
 * @Author: songbaicheng
 * @Create: 2024/10/9 17:47
 **/
@Getter
@Setter
@ToString
public class AvailableBalanceEvent extends ApplicationEvent implements Serializable {

    private static final long serialVersionUID = -5193422140307226053L;

    /**
     * 电子账户列表
     */
    private List<ElectronicAccount> electronicAccountList;

    /**
     * 当天日期
     */
    private LocalDate currentDate;

    public AvailableBalanceEvent(Object source, List<ElectronicAccount> electronicAccountList, LocalDate currentDate) {
        super(source);
        this.electronicAccountList = electronicAccountList;
        this.currentDate = currentDate;
    }
}
```
:::

3. 创建定时任务，这里使用 xxl-job 定时任务调度框架。
::: normal-demo 监听者触发
```Java
package cn.sdpjw.account.job;

import cn.hutool.core.collection.CollUtil;
import cn.sdpjw.account.domain.enums.PaymentChannelEnum;
import cn.sdpjw.account.entity.ElectronicAccount;
import cn.sdpjw.account.entity.ElectronicAccountDailyStatement;
import cn.sdpjw.account.integration.YiFuBaoIntegration;
import cn.sdpjw.account.observer.event.AvailableBalanceEvent;
import cn.sdpjw.account.service.ElectronicAccountDailyStatementService;
import cn.sdpjw.account.service.ElectronicAccountService;
import cn.sdpjw.account.util.FileUtil;
import cn.sdpjw.account.util.IdUtil;
import cn.sdpjw.common.base.basic.ThreadMdcUtil;
import cn.sdpjw.common.base.response.CommonResponse;
import cn.sdpjw.open.domain.suning.request.DownloadStatementUrlRequest;
import cn.sdpjw.open.domain.suning.response.DownloadStatementUrlResponse;
import cn.sdpjw.oss.enums.OssFileEnum;
import cn.sdpjw.oss.service.OssService;
import com.alibaba.excel.support.ExcelTypeEnum;
import com.xxl.job.core.handler.annotation.XxlJob;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static cn.sdpjw.account.common.constants.Constant.YIFUBAO_ID_TAG;

/**
 * @Description: 日终定时任务类
 * @Author: songbaicheng
 * @Create: 2024/10/8 20:10
 **/
@Slf4j
@Component
public class EODJob {

    // 定时任务批次执行数量
    private static final int BATCHES_NUMBER = 1000;

    @Resource
    private OssService ossService;
    @Resource
    private ApplicationContext applicationContext;
    @Resource
    private YiFuBaoIntegration yiFuBaoIntegration;
    @Resource
    private ElectronicAccountService electronicAccountService;
    @Resource
    private ElectronicAccountDailyStatementService electronicAccountDailyStatementService;

    /**
     * 日终账户渠道可用余额入库
     */
    @XxlJob("availableBalance")
    public void availableBalance() {
        ThreadMdcUtil.setTraceId();
        List<ElectronicAccount> electronicAccountList;
        LocalDate currentDate = LocalDate.now();
        log.info("开始日终账户渠道可用余额入库任务……");

        // 智易通
        long yiFuBaoSuccessAccount = electronicAccountService.getSuccessAccountByChannelCount(PaymentChannelEnum.YI_FU_BAO.getCode());
        log.info("智易通预计成功账户数量：{}", yiFuBaoSuccessAccount);
        for (int offset = 0; offset < yiFuBaoSuccessAccount; offset += BATCHES_NUMBER) {
            electronicAccountList = electronicAccountService.getSuccessAccountByChannel(PaymentChannelEnum.YI_FU_BAO.getCode(), BATCHES_NUMBER, offset);
            if (CollUtil.isNotEmpty(electronicAccountList)) {
                log.info("智易通批次执行账户数量：{}", electronicAccountList.size());
                applicationContext.publishEvent(new AvailableBalanceEvent(this, electronicAccountList, currentDate));
            }
        }

        // 智汇通
        long huiYuanSuccessAccount = electronicAccountService.getSuccessAccountByChannelCount(PaymentChannelEnum.HUI_YUAN.getCode());
        log.info("智汇通预计成功账户数量：{}", huiYuanSuccessAccount);
        for (int offset = 0; offset < huiYuanSuccessAccount; offset += BATCHES_NUMBER) {
            electronicAccountList = electronicAccountService.getSuccessAccountByChannel(PaymentChannelEnum.HUI_YUAN.getCode(), BATCHES_NUMBER, offset);
            if (CollUtil.isNotEmpty(electronicAccountList)) {
                applicationContext.publishEvent(new AvailableBalanceEvent(this, electronicAccountList, currentDate));
            }
        }

        // 智链通
        long yiBaoSuccessAccount = electronicAccountService.getSuccessAccountByChannelCount(PaymentChannelEnum.YI_BAO.getCode());
        log.info("智链通预计成功账户数量：{}", yiBaoSuccessAccount);
        for (int offset = 0; offset < yiBaoSuccessAccount; offset += BATCHES_NUMBER) {
            electronicAccountList = electronicAccountService.getSuccessAccountByChannel(PaymentChannelEnum.YI_BAO.getCode(), BATCHES_NUMBER, offset);
            if (CollUtil.isNotEmpty(electronicAccountList)) {
                applicationContext.publishEvent(new AvailableBalanceEvent(this, electronicAccountList, currentDate));
            }
        }
    }
}
```
:::

4. 创建 Listener 实现具体处理逻辑，使用 ```@Async("eventTaskExecutor")``` 注解实现线程池异步执行任务。
::: normal-demo 创建 Listener
```Java
package cn.sdpjw.account.observer.listener;

import cn.sdpjw.account.domain.enums.PaymentChannelEnum;
import cn.sdpjw.account.entity.ElectronicAccount;
import cn.sdpjw.account.entity.ElectronicAccountDailyAvailableBalance;
import cn.sdpjw.account.integration.YiFuBaoIntegration;
import cn.sdpjw.account.observer.event.AvailableBalanceEvent;
import cn.sdpjw.account.service.ElectronicAccountDailyAvailableBalanceService;
import cn.sdpjw.account.util.IdUtil;
import cn.sdpjw.open.domain.suning.request.QueryBalanceRequest;
import cn.sdpjw.open.domain.suning.response.QueryBalanceResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

import static cn.sdpjw.account.common.constants.Constant.YIFUBAO_ID_TAG;

/**
 * @Description: 易付宝日终可用余额事件监听器
 * @Author: songbaicheng
 * @Create: 2024/10/9 17:49
 **/
@Slf4j
@Component
public class YiFuBaoAvailableBalanceListener implements ApplicationListener<AvailableBalanceEvent> {

    @Resource
    private YiFuBaoIntegration yiFuBaoIntegration;
    @Resource
    private ElectronicAccountDailyAvailableBalanceService electronicAccountDailyAvailableBalanceService;

    @Async("eventTaskExecutor")
    @Override
    public void onApplicationEvent(AvailableBalanceEvent event) {
        log.info("电子账户可用余额查询入库:{}", event.getElectronicAccountList());
        if (PaymentChannelEnum.isYiFuBao(event.getElectronicAccountList().get(0).getPaymentChannel())) {
            availableBalanceHandle(event.getElectronicAccountList(), event.getCurrentDate());
        }
    }

    /**
     * 可用余额查询入库
     *
     * @param electronicAccountList 电子账户列表
     * @param currentDate           当前日期
     */
    private void availableBalanceHandle(List<ElectronicAccount> electronicAccountList, LocalDate currentDate) {

        List<ElectronicAccountDailyAvailableBalance> electronicAccountDailyAvailableBalanceList = new java.util.ArrayList<>(Collections.emptyList());
        LocalDateTime executionTime = LocalDateTime.now();
        QueryBalanceResponse response;

        for (ElectronicAccount electronicAccount : electronicAccountList) {
            QueryBalanceRequest request = new QueryBalanceRequest();
            request.setQuerySerialNo(IdUtil.createRequestNo(YIFUBAO_ID_TAG));
            request.setSubMerchantNo(electronicAccount.getAccountNo());
            try {
                response = yiFuBaoIntegration.queryAccountBalance(request);
            } catch (Exception e) {
                continue;
            }
            electronicAccountDailyAvailableBalanceList.add(ElectronicAccountDailyAvailableBalance.builder()
                    .traderCorpId(electronicAccount.getTraderCorpId())
                    .paymentChannel(electronicAccount.getPaymentChannel())
                    .availableBalanceAmt(new BigDecimal(response.getUseAmt()).divide(new BigDecimal("100")))
                    .queryDate(currentDate)
                    .executionTime(executionTime)
                    .build());
        }

        electronicAccountDailyAvailableBalanceService.saveBatch(electronicAccountDailyAvailableBalanceList);
    }
}
```
:::