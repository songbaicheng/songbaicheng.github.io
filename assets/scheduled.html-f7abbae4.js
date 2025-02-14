import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as o,b as n,d as l,e,w as i,a as u}from"./app-8eda1cf8.js";const m={},d=u('<h1 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h1><h2 id="关于定时任务的使用场景" tabindex="-1"><a class="header-anchor" href="#关于定时任务的使用场景" aria-hidden="true">#</a> 关于定时任务的使用场景</h2><p>定时任务，定时任务，顾名思义，就是指定时执行某些特定操作或任务的功能。工作中的业务难免要定时任务打交道，网络上常见的定时任务场景有以下几种：</p><ul><li>数据备份：定时备份数据库、文件等数据，以防数据丢失或损坏。</li><li>数据统计：定时统计业务数据、用户行为数据等。</li><li>清理任务：定时清理缓存、日志、垃圾文件等。</li><li>自动化任务：定时执行自动化测试、自动化发布等任务。</li><li>资源管理：定时检查并释放资源，如数据库连接、内存等。</li><li>系统监控：定时检查系统运行状况，如 CPU 占用率、内存使用情况、磁盘空间等。</li></ul><h2 id="工作中遇到的定时任务场景" tabindex="-1"><a class="header-anchor" href="#工作中遇到的定时任务场景" aria-hidden="true">#</a> 工作中遇到的定时任务场景</h2><p>有一说一，一些高端的场景我倒是没有遇到过，但是思想和实现我感觉应该也是同样的基调，无非是放在哪里用是了。以下是工作中我遇到的定时任务场景。</p><h3 id="定期清理审批单" tabindex="-1"><a class="header-anchor" href="#定期清理审批单" aria-hidden="true">#</a> 定期清理审批单</h3><p>招录组织实施系统，其中有个环节是要求考生提交个人信息进行审核，审核的规则是这样的：每个审核人在审核时会从库里捞十个未审核的考生材料出来进行审核，被审核的考生材料会被标记为审核中，每份考生的材料同一时间只能被一位审核人审核。当时这样设计的初衷想想大概就是为了能加快审核进度，并且一次性加载十份材料也可以提升审批下一位时的体验，可是这样也有弊端，比如说有些审核人拉取完十位考生后不能进行后面审核，这几份考生的材料就会无法被其他审核人获取到从而导致无人审批，正因如此，为了解决有些材料一直无人审批的情况添加了一个定时任务，当一份材料被审核人抽取到转为审核中的时候，同时保存转换状态的时间，创建一个定时任务每过五分钟就遍历一下表中当前批次下已经在审核中状态超过半个小时的材料并重新将其置为未审核的状态，方便其他审核人去拿到这些可能存在不能及时审批隐患的材料。</p><p>其实现在想想这个逻辑还是存在不少问题的，比如说如果审核人正在审批一份超过30分钟或者已经被重新置为未审核的材料，此时审批人再去点击审批结果的时候发现审批已经失效，则会浪费多余的审批时间，这对于每次考试数十万考生的审批量无疑是个大问题。不过当时那已经是一个老项目了，也没有人提出重构的需求，放在现在如果仔细想想如果重新设计这个请求的话，应该不会采用这种方式一次获取十份材料的方式，像现在类似oss和一些高性能的架构的出现，已经不用太过担心体验和性能问题，这个定时任务的场景其实也正好能暴露时间轮的问题，并不是每份材料到了30分钟就会被重新标记为未审核，当然现在的时间轮算法估计已经足够精确，就算有误差也是可以忽略不计的。</p><h3 id="定期获取价格文件" tabindex="-1"><a class="header-anchor" href="#定期获取价格文件" aria-hidden="true">#</a> 定期获取价格文件</h3><p>接收价格的前置项目，我们和彭博约定在每天的四点请求获取每日的币种价格，彭博收到请求后将处理后的数据存放到公共的 ftp 服务器上，这里定时任务的需求就很明确了，为了保证一定可以拿到彭博处理的数据，我们会在四点五十去ftp获取价格文件，获取到价格后通过 MQ 推送到其他后台程序，当然就算是延后50分钟也不能保证每次都可以成功获取到每日价格文件，所以我们在每日的流水表中增加价格处理状态的字段，如果是获取不到文件则标记为 E 状态，每晚八点如果是今日获取价格文件的状态为 E 的重新执行一次获取价格文件，如果是其他错误状态则需要第二天人工排查问题。</p><h3 id="日终任务" tabindex="-1"><a class="header-anchor" href="#日终任务" aria-hidden="true">#</a> 日终任务</h3>',12),v=n("ol",null,[n("li",null,"首先定义执行事件的异步线程池。")],-1),b=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`package cn.sdpjw.account.config;

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

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),p=n("ol",{start:"2"},[n("li",null,"定义触发事件。")],-1),A=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`package cn.sdpjw.account.observer.event;

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
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("ol",{start:"3"},[n("li",null,"创建定时任务，这里使用 xxl-job 定时任务调度框架。")],-1),E=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`package cn.sdpjw.account.job;

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
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("ol",{start:"4"},[n("li",null,[l("创建 Listener 实现具体处理逻辑，使用 "),n("code",null,'@Async("eventTaskExecutor")'),l(" 注解实现线程池异步执行任务。")])],-1),B=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`package cn.sdpjw.account.observer.listener;

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
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(S,C){const a=s("RouterLink"),c=s("CodeDemo");return r(),o("div",null,[d,n("p",null,[l("公司 ERP 平台作为中介对接了第三方的支付机构作为支付渠道，需要每日最后与各个渠道确认每个客户的可用余额留档方便对账，考虑到用户体量而且要调用第三方接口查询数据，此次任务采用异步线程池实现方式，为了区分各个支付渠道解耦，并采用 Spring Event 实现观察者模式来实现，想了解可参考我的 "),e(a,{to:"/study/design-pattern/observer.html"},{default:i(()=>[l("观察者模式")]),_:1}),l(" 文章。")]),v,e(c,{id:"code-demo-75",type:"normal",title:"%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BA%BF%E7%A8%8B%E6%B1%A0",code:"eJyVU11PE0EU/SuTPrVNsy2ID9SPAIUXHxQtvu3LMAxl6HZmnZ0tICEhKiKCYhTEoAZJQIgJBAwxoUX9MXZ32if/gjPdNvRLkZtNNjNzz7lnzr0zG7oF8zCUDNkQZWEGA0QNZ8yenDIgQsylwkCMjpPMNZOalORsxgVgPGM4Nic0M85hDk8xntVZAk8LA1LKBBSEUWMAQ6pglwOlqtVcXl01Fp1UMg1XEEujkMs5Vtr6OYczAxZDWcV718UuPi/YETA0jZErGE9jnifoouyRCY7h2DBjVh13EYDk8H1KRFV4PBo1KYiCvkHsIE5sfaMkKC9+8Q43S6dLIF11AwzlFRLIwk+5v+wff6osvJDfD+VxMcD2u2KC8SRwGM2MQoImMM0EJymlTeAk6E5098S7EvFe0NWT7O7Rh9G4SfuanDSp7Y5aBAFkQccJatbv1JQIZrV0oCKQryPaqq6+r8roP1H6EeNYG5UmDzG4AbquKgv+yuJ/mPd29mrL9aMOdDk43cB2JfEvNnn2xnv6tfJuy3u24R2eVhZXOxA+0MORgmrKiZjRAhP/zSkPlrwfC/7Gt8rGSQuzpboCshjb/RbJY919Rd2rmYPzPv0GwlTNu9o3Q1jbPgKdbN16MxQJEmvdaRlP0AYIR3SDqhpUcCxcTgHFU6B9VMONLYk1OhprlhwD9bE10kOpO7cH07EqZfvjun4z3ORjJHaupR7xOPCXX8viR3nwVq7v/j5bSUHLwvyeS51hpi45A8rb+3KnINeOy0eP5dp+YLp8f+K/3PWX9srbK6Vi0Xu+raCl4q63uKqa4a++KhV25OaTyvyWV/j8a/5Re+XONhit5cORSK3zcyZVn0lDc38AzVQAPA=="},{default:i(()=>[b]),_:1}),p,e(c,{id:"code-demo-85",type:"normal",title:"%E5%AE%9A%E4%B9%89%20Event",code:"eJyVkktrU0EUx7/KkFUbdJLcpIbGB42miBJwUXV1N3OnpzeTTGYuM3NTtXQfcKFgoQiKKCp1IW58gKXfJo/6LTw3N2nTm3TRYRbD+Z/n78xe7iHrsVwtFzHeYSEQrqjdjtq7lHGuY+WoDiyYHhgKPVDupq98JbqRNm7RFXXhntNNCdwZrQSvpwIGTUOk7ga6Q++Dc2AWzFvLzY/1ljNCheeCNiG1UWLbMawLu9p0KNfKwTNH61EkBWdOaLWZ7biNs1KhsZARTIoXLJBwnnWiOtEF2tScyQZzWTF2QtKmsGnSQj7vK5InGw2w3IgoKVkjo8Mv4+P+6c+vo/6f4asf44Ojwcnbf5/eD/6+HBz/TgPqsWtpUyNWqzBggrdAhalyzwCWrRGv6FUKpWJhnZSqtUo1EfMFX22k5PCRssLHjI6vojjAyQmXzFpS7zEhk/nuMskUhwkLgoBAbaOagURwSgldfFkyD4fsJYMSPEi7h50R6zCKkx2hmMQFqZDg90D/p2AsZnvyoEFuk+trpfVyxfNKlWK5WPW8G8W1cnPCLEmVcktOnowPfg2/v57S6h+efjyaSTjtfN2E+q2Fn3WHQNZ0tp5sqeHJm+Hnb7ie0bsPlxWZ7Z3w2BikMf0DU6+U71KyK4+CNjaCG40Nh2tXaxfdlxVeTehP+sRj4wjMSpp+FVua2V1LWLo0K+7hMjgXgucqYsjFwROnfV/hze3/B+vri2M="},{default:i(()=>[A]),_:1}),h,e(c,{id:"code-demo-95",type:"normal",title:"%E7%9B%91%E5%90%AC%E8%80%85%E8%A7%A6%E5%8F%91",code:"eJzNVltrG0cU/iuDnmTXjJWQh+LExbq5UUjsYklQg0CMViNp7NXMdmdWlmoMLrTETQspuCWNobQOJOlDSRsovcRpf0yJZOupf6FndlfXXcmqSxMPYjU7c86Zc/m+s7MbuUUaJLIUsYixTaoUGRzLsrW1g4lhCIcrvCVK1wu8wFndErbS+zVHCWFiQ9gUHqZJDcUEx0mY5hUzQXogO2qrLOqEcUy5U5f4PdKqU66SNcI5NdOwNkUTBJlq4bQ+zBacGXFv4wIqKcLMVlYRRfXxUwwwrmjVJm5wm2zVSRCRGSxNURQlSe0GtTFtwAk43oATScmkCWISbtC0Xp2irpWZQc/zPOuJXcTQ+aoOFBKvMpOeU1FXLlOeIGWIeh2SVyKS6gczcK5mU1K+UzZm0LCptASHSdJd3PBfQ7SERXkPXNLhjFdB+QOHSoVTYoebgpT7acvb5oa3N6sh34twS5N9ktIH+rqUOpMTEK7leoUCyWBpRB0Tk5VIiWDaNKgJjll6B6f1W65ljVsGhWbT1MT1OAoEK5uARuCZAN81nN9vmrdcXvs6pqiXxDbYV9QGx8zKtS2c1c+BiLCrWFo2pKRikzrdEfY2mAc+NAHhlmUywzWd9Jam60k4hgoFruvaQgZHCBGm4eIsq/SiRo4cbklb0MGaw9FBVYRjDydRi2AmcKKlaNy2SWvdUZajwCAlQ6lzxRSrU3xbGMRMQaGnbubgLUygIuw6Aez5IqvuK8Q8JusGdZu5SOzvSB2EEWSazwxIOUhwJSFz3gxvZlbzifh6MZMq5uLvurYW5+cLHM2jlRSVhs0snZYl1Hnw+PTkoP3sqPPgl1cnJ+17x6fPTzy5uKNqwl5CUvBqiTCjRnnV20lCihRdQldjV68tXoktvg2zpSsxvTm/WOArLkzgv1/IArecEsABGSaREqXXUwA1tKvdQjAWF9GwB51Pf+/8AM+nZ8efd776qXv3vicG9W/Aub10VBgnJoKOjBLxXPJmOltcy99JpDfQMroSi8XcoLXaSq/2o1YGxELAtwHHpqgEMY1IGMynmAh+NFAr7DsyxcSk1o3o5J7+b8yFflKCxid9efySumjTY97H2NnPTzoHv3Z++6770WH7/o+nX37/6o+H3UfftD953H5x2BMG+Li+et0oWogAKUa+lIXInO+/h6iGYGU0LhSd0+ByLcIY+cBAY1U5mxg0U47O+ZnRQ3PuRiAX7wTj9snZ1+sRHxmObUMm3PnyYB1zsTNykimqcI+oCAiu/XK//fSzWfLjMeOv/SfwgxT08+zTp/PwRefrw+7+0fAxvNrDVtYxDCqlHwF4NwkquErVqHCi5d/GkvotGryhQa8pruaL0G20clKUIfsTwu172X308dmz487BF+173/pxuzz/++XR7l4hshDu97BVaKcoqrkvKhWoKIQUu96b3whX7++/tTzWMUbQokdo0S+WthkztjDm0oLv7HDMerAKivZu1ZjJNaHSdUu1oqEezwUCm1SQ4ZYbWpBQ+1iyD8eq3RvBvohdwsqae9WNcrqDQi/BUVVjcsJ5C8McCxy7N3iFaYAez+8G6VFz2KZD+P9Kj5v5THEzH1+biR2uk+eyI9Tt2dkRqn552BFM2Gskx6XDbffwz7C2/hqa+owd3XNwho7+n/r55e7mb6qVv3G0+n/wi+z9A9Cbz5I="},{default:i(()=>[E]),_:1}),g,e(c,{id:"code-demo-105",type:"normal",title:"%E5%88%9B%E5%BB%BA%20Listener",code:"eJydVltrG0cU/iuDnlYmjJ1gKFFjY1l2Wpe0aWv7ISAIo9mxPPbuzHZmVrYwfiy4lNIUB5LQhtCASx7a5qUXiMm/sWz3X/TM7Eram2Q7g9DO5Zzv3M/MQe0z0iO1Ri0idJd0GaICaz/a2cOEUhkLg2VHM9VjCgdcGyaY+rgt2oKHkVSmTO3LkHCBmYhDjb8k/ZAJ09omQrBgFfaAdxInEHLTx6sBo0ZJwWkzOfgAlhXCg36zB/+kE7BlEhBB2RQcLgzrKmK4FPgRvx8vE7k23prCOPIN64EuuChy1e5OYbfMnLJrGrCeUE/Biw0P8Jq/CZ8KKhkxMYyPjgUXXazYNzHTBn8VM9VPxXyd7F0XQEdSaFZASDbHEIEMO3IXs33DFPAGW/M7eN3+j0mk6mIdKQDdUiRke1LtYiohCvvg1ygKOHXBeDBOwimMmm4zPw6shpB60iShbeq+oFcwgoJMmn7EcEsCmUgCOOLZgWLZz2KCrTJW2ahYEhwSs42XeXeFUR6STDTcqeEhww8kJcEKMUXW/OEGrAoELsotGdikARV01bF1U1ZvbdWl5YyhMgzBCnA0UAijATeZ4Udr9zeXmw8fr6083mh+4rBmZ2baAs2gpRWmqeKRld5A58+Pz06fD/58ef7s5OL0aPDj24unb87ev/jv9cuzd9+fnf5z8fNPgye/D168SZibsdmWqoG0FN0O4RAp0U1OWoqBxQ10Z+7O/Oztudm76PZHjfm79nBmti2WXMbAdxSZtojiDmQGogHRGqWlW6ybYcog8EXAbEPSqCKj7lVW7yI6sKYjGEvDWCdLyJweqDuUmmkYqF/VQ6ZA3Kj+Ebtht0hFu+z32jXXqjaI3l3dZzQ2UrVr9ZTkIbQyxf2hdolve5L7SIqMx5xjvEp3IYdet06zEHYEsgsNdkuC6Iunfw/+eHL512/nR/9m8+T81cnl29eDb08G744bB4ft2q0EB3eZKfnGxsur11OP2sG3kFe+ajDXaWi8q8DskTfnPnkckJOzxQ6osZzdnxLhB+xKGRmTWrFSMLXlnTfkMJnCJ5kkBWfHDJrkryHBiHApItDOylli1UC5CBw9u/zVFmWOj46Vyxg9eH88+O4HqPDzX14NOaAks0ns8mSCc6zseyXHLFYreQuNul9WGxeIsa+qIStLoUJOJZ3z0AISbC/TSZtKkb4Ttuhlmi5mYWTcfj6EucaNmCsxoHerhfwpFnLPy/JW3aFoeMOOCtmOLamQVzK+bCZqVLu4lNQVDwCQnHwTj1RQ5JS3Y/ic0Mw4cuhBnARfSC95k2DqGnzKDdv5OybnxwLcetz5nCkKVWn5SjbZqkqncFwCMqpfNDjBT328UNGxMchW/RQ0tdtLNSriHyJojHQbQrJPmbsWUZKuRYn2QcNFbIOZ488vr5+tmPh+OQ8qyXEn5oHPlJc2++LARhE4bkkVrfnVHt7IUtQn4UT5DlqJVOqyE7CK7aQZGs8m4/hlBSFJX6AAu6kdRb2Ofd6De6xI267dnpuD626iPBdz15ezjWcCca64vdxqEouLQannjxc3utqxJj3YgsQrO3lixgxFg1j41Q7/B8NeDLU="},{default:i(()=>[B]),_:1})])}const w=t(m,[["render",f],["__file","scheduled.html.vue"]]);export{w as default};
