---
title: 本地模型该用哪套运行时
date: 2026-09-24T08:40:00+08:00
description: 先按硬件和并发把常见模型运行时分成表，再逐个说明它解决的问题。本机看 llama.cpp、Ollama、LM Studio、GPT4All、llamafile、TextGen、LocalAI
  和 MLX；多请求服务看 vLLM、SGLang、TGI、TensorRT-LLM、LMDeploy 和 Xinference；超大混合专家模型看 KTransformers；多阶段音视频看
  vLLM-Omni 和 SGLang-Omni。
category:
- AI
- 大语言模型
tag:
- AI
- LLM
---

下载一个开源模型，不等于它已经能用。权重只是参数。还要有程序负责读这些参数、分配显存、一次处理一个或很多请求，并把结果按常见接口交出去。这类程序就是模型运行时。

选错运行时，不是慢一点那么简单。桌面软件解决不了几十个人同时提问；为数据中心写的服务，在一台没有 NVIDIA 显卡的笔记本上可能根本起不来。

## 先列出来

下面这张表只回答两件事：它是谁，以及它主要解决哪一种限制。具体取舍放在后面的分节里。

| 框架 | 官方 | 适合的机器 | 主要解决的问题 |
| --- | --- | --- | --- |
| llama.cpp | [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | CPU、消费级显卡、Apple 芯片 | 模型放不进显存时仍能跑 |
| Ollama | [ollama/ollama](https://github.com/ollama/ollama) | 个人电脑、单机服务器 | 用一条命令管模型和本机接口 |
| LM Studio | [lmstudio.ai](https://lmstudio.ai/) | Windows、macOS、Linux 桌面 | 不想管理命令行和依赖 |
| GPT4All | [nomic-ai/gpt4all](https://github.com/nomic-ai/gpt4all) | 普通台式机、笔记本 | 安装后本地聊天，不要求 GPU |
| llamafile | [mozilla-ai/llamafile](https://github.com/mozilla-ai/llamafile) | 多数操作系统和 CPU | 模型和运行时合成一个文件 |
| TextGen | [oobabooga/textgen](https://github.com/oobabooga/textgen) | 本地桌面或浏览器 | 在一个界面里切换多种后端 |
| LocalAI | [mudler/LocalAI](https://github.com/mudler/LocalAI) | 无 GPU 也可，也可接 GPU | 一台服务同时提供多种模型接口 |
| MLX / mlx-lm | [ml-explore/mlx-lm](https://github.com/ml-explore/mlx-lm) | 仅 Apple 芯片 | 直接使用统一内存 |
| vLLM | [vllm-project/vllm](https://github.com/vllm-project/vllm) | NVIDIA、AMD 等加速器 | 很多请求共用显存 |
| SGLang | [sgl-project/sglang](https://github.com/sgl-project/sglang) | 单卡到大规模集群 | 重复前缀和结构化输出 |
| Text Generation Inference | [huggingface/text-generation-inference](https://github.com/huggingface/text-generation-inference) | NVIDIA、AMD、Inferentia | 沿用 Hugging Face 的模型和服务 |
| TensorRT-LLM | [NVIDIA/TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) | 仅 NVIDIA GPU | 吃满 NVIDIA 的专用内核 |
| LMDeploy | [InternLM/lmdeploy](https://github.com/InternLM/lmdeploy) | 主要是 NVIDIA GPU | 量化和服务放在同一条路径 |
| Xinference | [xorbitsai/inference](https://github.com/xorbitsai/inference) | 笔记本、机房、Kubernetes | 用一个入口管理多种模型 |
| KTransformers | [kvcache-ai/ktransformers](https://github.com/kvcache-ai/ktransformers) | 消费级显卡加大内存 | 超大混合专家模型放不下显存 |
| vLLM-Omni | [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni) | 继承 vLLM 的硬件 | 文字、语音、图像、视频分阶段 |
| SGLang-Omni | [sgl-project/sglang-omni](https://github.com/sgl-project/sglang-omni) | 继承 SGLang 的硬件 | 语音和多模态流水线 |

## 为什么会分成这些

模型要能回答，三件事必须同时成立。

权重和计算过程中的临时数据要放得进这台机器的显存或内存。请求进来以后，运行时要决定先算谁、结果缓存在哪里。调用它的程序还要能用一套稳定接口拿到结果，而不是只在某个图形窗口里看见文字。

三件事里缺任何一件，都不能算部署完成。窗口里能聊天，只说明单人试用成立。接口通了，只说明程序能调用。几十个请求同时到达仍能稳定返回，才说明它承担得起服务。

最省事的办法是用 PyTorch 直接加载 Hugging Face 上的原始权重，来一条请求算一条。它能验证模型本身没下错，但每个请求都单独占用一大块显存。请求一多，显存先被占满，后面的请求只能等待。它适合试模型，不适合当服务。

另一条路是把模型压小，放到个人电脑上。这样笔记本和普通显卡能跑起来，但压缩后的格式，以及为了兼容各种 CPU、Apple 芯片和普通显卡做的实现，不是为几百张数据中心显卡同时调度准备的。个人电脑能跑，不能推出生产服务也该用它。

反过来，把数据中心的服务框架装到一台没有对应显卡的电脑上，也不成立。它的加速代码、显存管理和多卡切分，都假设机器里有它支持的加速器。没有这块硬件，功能列表再长也跑不起来。

所以后面按四组来看：本机先跑起来，很多请求共用显卡，模型大到单卡放不下，输出不再只是一段文字。

## llama.cpp

个人电脑上，真正难的是硬件太杂。处理器指令不同，显卡厂商不同，内存往往大于显存。模型大于显存时，不能直接报错退出，而要允许一部分计算留在 CPU 和内存里。

[llama.cpp](https://github.com/ggml-org/llama.cpp) 解决的就是这件事。它用 C/C++ 实现推理，不依赖一整套 Python 深度学习环境，并使用 ggml 张量库。模型通常先转成 GGUF，再做 1.5 到 8 bit 的整数压缩。它明确支持 CPU 与 GPU 混合计算，因此模型放不进显存时仍能跑，只是速度下降。NVIDIA、AMD、Apple、Intel、Vulkan，以及其他多种后端都在它的支持范围内。官方给了命令行，也给了兼容 OpenAI 接口的 `llama serve`。

它的边界也来自这个目标。它是推理引擎和一组命令行工具，不是给不熟悉命令行的人准备的完整桌面产品，也不是为数据中心规模的连续合批设计的。需要精确指定 GGUF、编译某个硬件后端或检查混合计算时，留在这一层。

## Ollama

[Ollama](https://github.com/ollama/ollama) 把 llama.cpp 包成了本机服务。它的文档直接列出 llama.cpp 是其支持的后端。使用者用 `ollama run` 选择和运行模型，本机 API 在 `11434` 端口；官方同时提供 macOS、Windows、Linux 和 Docker 安装方式，以及 Python、JavaScript 库。它还提供模型库、Modelfile 和一键接入多种编程工具。

代价是控制权上移了一层。模型版本、压缩级别和底层参数，首先要服从 Ollama 的模型库和封装。需要精确指定 GGUF 文件或编译某个硬件后端时，直接用 llama.cpp 更清楚。

## LM Studio

[LM Studio](https://lmstudio.ai/) 把本地运行再往桌面收了一步。官方现在的 Bionic 是面向本地开放模型的代理，可以下载模型、对话、处理文档和代码，也提供开发者使用的接口。它的运行时底层同时使用 llama.cpp 和 Apple 的 MLX。适合不想管理命令行和依赖的人。

它不是数据中心里的开源服务框架。要在服务器上按自己的方式扩展调度、切分模型和诊断内核时，图形产品帮不上这个忙。在 Mac 上选择 LM Studio，也不代表底层一定走 MLX。

## GPT4All

[GPT4All](https://github.com/nomic-ai/gpt4all) 把目标压到更低。官方写明它在普通台式机和笔记本上本地运行，不要求 API，也不要求 GPU，并提供 Windows、macOS、Linux 安装包。底层同样绕着 llama.cpp。它适合只想安装后聊天的人。需要自己编译后端、指定混合计算比例或承载并发时，它没有把这些控制交出来。

## llamafile

[llamafile](https://github.com/mozilla-ai/llamafile) 解决的是分发，不是调度。Mozilla.ai 把它和 Cosmopolitan Libc 打包成一个可执行文件，下载后加上执行权限就能在多数操作系统和 CPU 架构上跑，不用先装运行时。它还带 whisperfile，用同一个办法分发语音转写。

模型或功能要跟上游 llama.cpp 的最新实现保持一致时，单文件发布会慢一拍。官方也说明 0.10 之后换了构建系统，新旧 llamafile 不能当成同一个版本。

## TextGen

[TextGen](https://github.com/oobabooga/textgen) 是本地模型圈子里用了很久的桌面和网页界面，仓库早期以 text-generation-webui 被大家记住。它的便携包直接跑 GGUF。完整安装还可以切换 llama.cpp、Transformers、ExLlamaV3 和 TensorRT-LLM，并带 OpenAI、Anthropic 兼容接口、视觉、工具调用和 LoRA 训练。

它是操作界面和后端切换器。真正算得快不快，仍取决于底下选中的那套引擎。

## LocalAI

[LocalAI](https://github.com/mudler/LocalAI) 想替代的是整台本地推理服务，而不是某一个模型格式。官方定位是在没有 GPU 的机器上也能运行文字、视觉、语音、图像和视频模型，并对外提供兼容接口。它自己更像调度不同后端的引擎。

某个模型在某个后端上算得是否够快，要看它实际接到了哪套实现。不能从“什么都能跑”推出“每个模型都有专用优化”。

## MLX

Apple 芯片还要单独看。[MLX](https://github.com/ml-explore/mlx) 是 Apple 机器学习研究团队为 Apple Silicon 写的数组框架，CPU 和 GPU 共用同一块统一内存，数组在两边切换时不必拷贝。[mlx-lm](https://github.com/ml-explore/mlx-lm) 在它上面提供生成、压缩、微调和 `mlx_lm.server`。

这套只活在 Apple 芯片上。同一台 Mac 上，llama.cpp 的 Metal 后端更能换到其他机器；MLX 则把统一内存这件事用得更直接。换到非 Apple 机器上，这条不成立。

## vLLM

服务端的矛盾不一样。每个请求都会产生一大块键值缓存，用来记住已经算过的上下文。如果每个请求都预留它可能用到的最大缓存，显存会提前耗尽，显卡却没有真正算满。请求还长短不一，先来的请求不能一直独占，后来的短请求也不该排到所有长请求结束。

[vLLM](https://github.com/vllm-project/vllm) 把缓存切成块来管理，这个机制是 PagedAttention；同时用连续合批把不同请求拼到同一轮计算里。它可以直接使用 Hugging Face 上的常见模型，提供 OpenAI 兼容接口，并支持张量、流水线、数据和专家并行。压缩格式包括 FP8、INT4、GPTQ、AWQ 和 GGUF 等。官方还列出了前缀缓存、推测解码，以及把预填充和解码拆开的能力。

因此它适合作为生产推理服务。前提是硬件和模型在它的支持矩阵里。它不是把任意 GGUF 放到任意消费级设备上的通用运行器。

## SGLang

[SGLang](https://github.com/sgl-project/sglang) 面对的是同一类服务问题，但把前缀复用放得更重。多个请求只要开头相同，例如同一个系统提示或同一段模板，RadixAttention 就可以复用已经算过的前缀。官方同时列出零开销调度、预填充/解码分离、推测解码、连续合批、分页缓存、结构化输出和多种并行方式。它从单卡覆盖到大规模集群，并被用作强化学习等训练后流程的推演后端。

和 vLLM 的选择，不是谁在所有模型上永远更快。前缀高度重复、结构化输出多，或者目标部署已经围绕 SGLang 的集群和硬件做了优化时，它的优势更直接。模型支持和运维习惯已经在 vLLM 上时，不必为了换一个名字迁移。两边都在快速增加功能，真正的差异要以目标模型、显卡和请求分布实测，而不是用发布说明里的最高数字代替。

## Text Generation Inference

[Text Generation Inference](https://github.com/huggingface/text-generation-inference) 是 Hugging Face 用来跑 Hugging Chat、Inference API 和 Inference Endpoints 的服务端。它用 Rust、Python 和 gRPC，提供连续合批、张量并行、流式输出，以及兼容 OpenAI Chat Completions 的 Messages API。量化覆盖 bitsandbytes、GPTQ、AWQ、Marlin 和 FP8。硬件文档列出 NVIDIA、AMD，以及通过 Optimum Neuron 走 Inferentia。

模型已经放在 Hugging Face 上、又希望服务端和 Hub 的加载方式一致时，它比从零拼一套推理服务少一层转换。模型不在它的优化列表里时，官方只保证用 Transformers 尽力加载，这和专用内核不是一回事。

## TensorRT-LLM

[TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) 把范围收进 NVIDIA GPU。官方提供 PyTorch 上的 Python API，包含注意力、矩阵乘和混合专家的专用内核，也包含预填充/解码分离、大规模专家并行和推测解码。部署可以从单卡到多机，并接到 NVIDIA Dynamo 和 Triton。

机器本来就是 NVIDIA 集群，而且目标是把这批 GPU 的算力吃满时，它是直接对硬件做的优化。换到 AMD、Apple 或纯 CPU 上，这套优化不跟着走。

## LMDeploy

[LMDeploy](https://github.com/InternLM/lmdeploy) 来自上海人工智能实验室体系里的 MMRazor 和 MMDeploy 团队，目标是压缩和部署。它有两个引擎。TurboMind 用持久化批处理、分块键值缓存、动态切分和 CUDA 内核追吞吐。PyTorch 引擎则用纯 Python 降低接入新模型的门槛。官方同时把 4 bit 权重量化当作核心能力，并覆盖 Llama、Qwen、DeepSeek、InternVL 等文字和多模态模型。

模型和量化流程已经在它的支持表里时，它是一条完整的压缩加服务路径。自定义一套 vLLM 或 SGLang 还没有的内核，不是它的目标。

## Xinference

[Xinference](https://github.com/xorbitsai/inference) 站在这些引擎上面。官方要解决的是用同一套接口换掉闭源 API，并在云、机房或笔记本上管理开源文字、语音和多模态模型。它提供网页、命令行和 Python 客户端，也能进 Docker 和 Kubernetes。

它是模型目录和服务入口。文字模型最终仍要落到某个推理后端上。入口统一不代表每个后端的调度能力相同，性能仍按它实际选中的后端计算。

## KTransformers

还有一种服务端问题不是“请求太多”，而是模型比整张消费级显卡还大。[KTransformers](https://github.com/kvcache-ai/ktransformers) 由清华大学 MADSys 实验室等维护，专门做 CPU 与 GPU 混合推理，把混合专家模型里的专家计算分到 CPU，再配合量化，让单张消费级显卡参与运行 DeepSeek 这一级的模型。官方现在把推理和微调都放在 kt-kernel 上，微调还能接到 LLaMA-Factory。

它换来的是能跑，不是数据中心那一套高并发。专家来回在 CPU 和 GPU 之间搬，延迟和吞吐都不会接近全部放进显存的部署。能跑起来之后，还要用延迟判断它是否承担得起服务，不能只看“没有显存不足”。

## vLLM-Omni

前面几套运行时的主线都是一次生成一段文字。全模态模型不是这样。它可能先理解文字、图像或音频，再生成语音、图像、视频或动作。这些阶段的计算形态不同，有的吃算力，有的吃显存带宽，有的必须低延迟，不能硬塞进同一个文字生成循环。

[vLLM-Omni](https://github.com/vllm-project/vllm-omni) 是 vLLM 社区从 2025 年 11 月起单列的框架。它保留 vLLM 的自回归和缓存能力，同时增加扩散 Transformer 等非自回归结构，并把文本、图像、音频、视频和动作放进一条可拆开的流水线。各阶段可以重叠执行，也可以按阶段分配资源。官方列出的用途包括全模态模型、语音合成、扩散生成和机器人动作模型。

普通文字模型没有必要绕到它上面。一个阶段能出结果，也不代表整条流水线已经接通。

## SGLang-Omni

[SGLang-Omni](https://github.com/sgl-project/sglang-omni) 解决的是同类流水线。它自己管理阶段拓扑、阶段生命周期和阶段之间的数据传输，自回归部分则继续交给 SGLang 调度。每个阶段使用适合自己瓶颈的调度器，数据可以通过共享内存或集合通信传递。它当前明确覆盖语音合成、语音识别和统一多模态模型。

它和 vLLM-Omni 的关系，与 SGLang 和 vLLM 的关系相同：先看文字或自回归部分已经落在哪套运行时上，再把多阶段编排留在对应的 Omni 项目里。

## 什么配置用哪套

先看硬件，再看模型放不放得下，最后看有没有并发。

| 配置 | 用这套 | 不要用它的情况 |
| --- | --- | --- |
| 个人电脑，要自己指定 GGUF 和硬件后端 | llama.cpp | 不想碰命令行 |
| 个人电脑，要一条命令和本机 API | Ollama | 要精确控制底层文件和编译参数 |
| 桌面聊天、文档和代理 | LM Studio | 要在服务器上改调度和内核 |
| 普通电脑，只想安装后聊天 | GPT4All | 要混合计算比例或并发 |
| 要把模型发给别人，对方不装环境 | llamafile | 必须紧跟 llama.cpp 最新功能 |
| 一个界面里试用多种本地后端 | TextGen | 把界面本身当成性能保证 |
| 一台本地服务提供文字、语音、图像、视频 | LocalAI | 默认每种模型都有专用加速 |
| Apple 芯片，模型和工具有 MLX 版本 | mlx-lm | 机器不是 Apple 芯片 |
| 多张受支持加速器，请求同时进来 | vLLM 或 SGLang | 还没用真实并发对比过 |
| 模型在 Hugging Face，想沿用 Hub 加载 | Text Generation Inference | 模型只有通用 Transformers 兜底 |
| 全是 NVIDIA GPU，要吃满专用内核 | TensorRT-LLM | AMD、Apple 或纯 CPU |
| 模型和 4 bit 量化已在支持表里 | LMDeploy | 要自己写一套新内核 |
| 要一个入口管理多种模型和后端 | Xinference | 用入口统一代替后端性能测试 |
| 混合专家模型大于单张消费级显卡 | KTransformers | 要求接近全显存部署的延迟 |
| 文字之外还要连续生成语音、图像、视频或动作 | vLLM-Omni 或 SGLang-Omni | 模型只输出文字 |

多请求那一行没有唯一答案。先确认模型、量化和并行方式都能加载，再用真实的并发、前缀重复比例和输出长度做对比。前缀高度重复时优先看 SGLang；现有模型支持和运维习惯已经在 vLLM 上时，不必为了换一个名字迁移。
