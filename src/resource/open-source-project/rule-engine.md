---
star: true
category: 开源项目
tag:
  - 规则引擎
  - Java
  - Spring
---

# LiteFlow

```card
title: LiteFlow 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/open-source-project/rule-engine/lite-flow.png
link: https://liteflow.cc
color: rgba(173, 216, 590, 0.15)
```

## 规则引擎的定义
很多人容易把规则引擎和流程引擎的概念混在一起，这里我们先将规则引擎和流程引擎区分开：
- **规则引擎**：通常是嵌入在应用程序组件中的，实现了将业务决策从应用程序代码中分离出来，并使用预定义的语义模块编写业务决策。接受数据输入，解释业务规则，并根据业务规则做出业务决策。
- **流程引擎**：实现了将多个业务参与者之间按照某种预定义的规则进行流转，通常需要涉及到角色与流程的交互。

## LiteFlow 适用于哪些场景
LiteFlow适用于拥有复杂逻辑的业务，比如说价格引擎，下单流程等，这些业务往往都拥有很多步骤，这些步骤完全可以按照业务粒度拆分成一个个独立的组件，进行装配复用变更。使用LiteFlow，你会得到一个灵活度高，扩展性很强的系统。因为组件之间相互独立，也可以避免改一处而动全身的这样的风险。

## 快速开始

::: normal-demo demo
```java
@Component("a")
public class ACmp extends NodeComponent {

	@Override
	public void process() {
		//do your business
	}
}
```
以此类推再分别定义b,c组件：
```java
@Component("b")
public class BCmp extends NodeComponent {

	@Override
	public void process() {
		//do your business
	}
}
@Component("c")
public class CCmp extends NodeComponent {

	@Override
	public void process() {
		//do your business
	}
}
```
在你的SpringBoot的application.properties或者application.yml里添加配置
```yaml
liteflow:
  rule-source: config/flow.el.yml
```
然后在config/flow.el.yml里添加配置：
```yaml
flow:
  nodes:
    node:
      - id: a
        class: com.sbc.liteflow.component.ACmp
      - id: b
        class: com.sbc.liteflow.component.BCmp
      - id: c
        class: com.sbc.liteflow.component.CCmp
      - id: d
        class: com.sbc.liteflow.component.DCmp
  chain:
    - name: test-chain
      value: "THEN(a, b, WHEN(c, d))"

```
:::

![LiteFlow Demo 运行结果](/assets/images/resource/open-source-project/rule-engine/liteflow-demo.png "LiteFlow Demo 运行结果")

## 规则
### 工程内指定多个路径
```yaml
liteflow:
  // 规则文件之间可以用,或者;隔开：
  rule-source: classpath*:config/flow.el.yml,classpath*:config/flow2.el.yml
  // Spring EL表达式进行模糊匹配，加载多个配置文件：
  rule-source: config/**/*.el.xml
  // 绝对路径指定多个路径
  rule-source: /data/lf/flow1.el.xml,/data/lf/flow2.el.xml
```
### 规则配置源
支持本地、ZK、SQL、Redis、Nacos、Etcd、Apollo等多种规则配置源，默认使用本地文件。

## 规则编排
### 串行编排
```yaml
<chain name="chain1">
    THEN(a, b, c, d);
</chain>
```

### 并行编排
```yaml
<chain name="chain1">
    THEN(
        a,
        WHEN(b, THEN(c, d)),
        e
    );
</chain>
```

### 选择编排
```yaml
<chain name="chain1">
SWITCH(a).to(b, c, d);
</chain>
```

### 条件编排
```yaml
<chain name="chain1">
THEN(
IF(x, a),
b
);
</chain> 
```

### 循环编排
```yaml
<chain name="chain1">
FOR(5).DO(THEN(a, b));
</chain>
```

## 组件类型
### 普通组件
普通组件节点需要继承NodeComponent，可用于THEN和WHEN关键字中。
### 选择组件
在实际业务中，往往要通过动态的业务逻辑判断到底接下去该执行哪一个节点，这就引申出了选择节点，选择节点可以用于SWITCH关键字中。
选择节点a需要继承 NodeSwitchComponent。 需要实现方法 processSwitch 方法。
### 布尔组件
布尔组件是以前IF组件，WHILE组件，BREAK组件的统一。他们三个组件有共同特征，都是返回布尔类型，所以将三个组件类型合三为一，成为了布尔组件。
布尔组件的定义，需要继承 NodeBooleanComponent。

## 性能
LiteFlow 绝大部分工作都是在启动时完成，包括解析规则，注册组件，组装元信息。而执行链路时几乎对系统没有额外的消耗。

实际表现中，LiteFlow 执行效率很高，在公司级核心业务上面，50多个业务组件组成的链路，在实际压测中单点达到了 1500 的 TPS（每秒处理事务数），集群达到了 1W 以上的 TPS，也经历过双11，明星顶流带货等大流量的考验。

虽然 LiteFlow 框架本身性能很好，但是整体执行效率却依赖实际业务组件的快慢，如果你的组件有大量的循环数据库请求 IO，或者有 bad sql，又或者有大量的 rpc 同步调用，那实际 TPS 也不会很高。