---
title: AI 学习导读
article: false
timeline: false
---

从理解概念到搭建应用，这里按四条路径整理 AI 知识。首页和时间轴按发布时间排列；左侧目录按学习顺序排列。

## 基础与原理

刚开始接触大模型，可以先读[大模型常见术语解释](/ai/llm/ai-model-terms.html)，区分参数量、Token、上下文、生成速度与费用。想继续了解神经网络如何学习，再看[深度学习入门](/ai/llm/deep-learning.html)。

## 框架与工具

[PyTorch](/ai/llm/pytorch.html)记录张量、数据集和神经网络的实践；[Hugging Face](/ai/llm/hugging-face.html)介绍预训练模型、分词器与数据处理。它们是工具教程，不是大模型概念的重复解释。

## 推理与部署

先用[本地模型该用哪套运行时](/ai/llm/llm-serving-runtimes.html)按硬件和并发需求选工具。遇到多卡与多机问题，再读[大模型并行的几种切法](/ai/llm/llm-parallelism.html)。调用服务失败时，可参考[AI 接口常见错误码](/ai/application/ai-api-error-codes.html)，分清认证、限流和上下游故障。

## 应用与实践

[提示工程：原则与案例](/ai/application/prompt-engineering.html)讨论如何组织输入、约束输出和处理不可信内容；[RAG 与 LLM Wiki：两种 AI 知识库方式怎么选](/ai/application/rag-and-llm-wiki.html)讨论如何利用外部资料。[蓝牙 AI 客服方案](/ai/application/bluetooth-phone-ai-reception.html)则是语音与设备集成的具体场景。

不必按目录从头读完：查概念去基础，写代码看工具，跑模型看部署，解决业务问题看实践。
