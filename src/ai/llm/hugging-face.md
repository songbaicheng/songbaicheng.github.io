---
category: AI
tag:
  - Hugging Face
---

# Hugging Face
学习 NLP 最优先级要学习的就是 Hugging Face，它提供了可以轻松地下载并且训练先进的预训练模型的 API 和工具。

我们要学习 Transformers 的模型、任务和设计理念，还有就是配置（configuration）、模型（model）、分词器（tokenizer）和流水线（pipeline）这几个最重要的类。

```card
title: Hugging Face 官网
desc: 点击跳转 Hugging Face 查看详细内容
logo: /assets/images/ai/llm/hugging-face/huggingface_logo.svg
link: https://huggingface.co/
color: rgba(173, 216, 590, 0.15)
```

## 快速开始
在开始之前，确保你已经安装了所有必要的库：
```bash
pip install transformers datasets evaluate accelerate
```

你还需要安装喜欢的机器学习框架：
```bash
pip install torch
// 或者
pip install tensorflow
```

## 预处理数据
### 自然语言处理
处理文本数据的主要工具是 Tokenizer。Tokenizer根据一组规则将文本拆分为tokens。然后将这些tokens转换为数字，然后转换为张量，成为模型的输入。

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("google-bert/bert-base-cased")

encoded_input = tokenizer("Do not meddle in the affairs of wizards, for they are subtle and quick to anger.")
print(encoded_input)
```

我们一起来看一下输出的结果：

```json
{'input_ids': [101, 2091, 1136, 1143, 13002, 1107, 1103, 5707, 1104, 16678, 1116, 117, 1111, 1152, 1132, 11515, 1105, 3613, 1106, 4470, 119, 102],
  'token_type_ids': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'attention_mask': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}
```

其中 input_ids 是与句子中每个token对应的索引。attention_mask 指示是否应该关注一个token。token_type_ids 在存在多个序列时标识一个token属于哪个序列。

同样的我们可以解码返回你的输入。

```python
tokenizer.decode(encoded_input['input_ids'])
```

如果是多个句子一样通过上述方法进行处理，并且可以增加 padding 和 truncation 参数进行填充与截断，最后，tokenizer可以返回实际输入到模型的张量。

```python
batch_sentences = [
    "But what about second breakfast?",
    "Don't think he knows about second breakfast, Pip.",
    "What about elevensies?",
]
encoded_inputs = tokenizer(batch_sentences, padding=True, truncation=True， return_tensors="pt")
print(encoded_inputs)
```

### 音频
对于音频任务，您需要feature extractor来准备您的数据集以供模型使用。feature extractor旨在从原始音频数据中提取特征，并将它们转换为张量。

```python
from datasets import load_dataset, Audio
from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base")
dataset = load_dataset("PolyAI/minds14", name="en-US", split="train")

def preprocess_function(examples):
    audio_arrays = [x["array"] for x in examples["audio"]]
    inputs = feature_extractor(
        audio_arrays,
        sampling_rate=16000,
        padding=True,
        max_length=100000,
        truncation=True,
    )
    return inputs

processed_dataset = preprocess_function(dataset[:5])
```
现在样本长度是相同的，并且与指定的最大长度匹配。您现在可以将经过处理的数据集传递给模型了！

### 计算机视觉
图像预处理包括多个步骤将图像转换为模型期望输入的格式。这些步骤包括但不限于调整大小、标准化、颜色通道校正以及将图像转换为张量。

### 多模态
对于文本，使用分词器(Tokenizer)将文本转换为一系列标记(tokens)，并创建tokens的数字表示，将它们组合成张量。
对于语音和音频，使用特征提取器(Feature extractor)从音频波形中提取顺序特征并将其转换为张量。
图像输入使用图像处理器(ImageProcessor)将图像转换为张量。
多模态输入，使用处理器(Processor)结合了Tokenizer和ImageProcessor或Processor。

## 微调预训练模型
使用预训练模型有许多显著的好处。它降低了计算成本，减少了碳排放，同时允许您使用最先进的模型，而无需从头开始训练一个。
Transformers 提供了涉及各种任务的成千上万的预训练模型。当您使用预训练模型时，您需要在与任务相关的数据集上训练该模型。这种操作被称为微调。