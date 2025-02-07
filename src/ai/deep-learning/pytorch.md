---
category: AI
tag: 
  - PyTorch
---

# PyTorch
Pytorch 是一个开源的机器学习库，主要用于深度学习和自然语言处理。它提供了丰富的API和工具来构建、训练和部署神经网络模型。

## 安装
使用 PyTorch 之前必须有 Python 环境，为了多个 Python 环境适应不同框架，建议使用 Anaconda 来安装 Python，类似于 NVM 一样管理本地的 Python 环境。

比如这次我们要使用 PyTorch 2.6.0 版本，在 Anaconda 中新建一个环境安装 Python 3.12 与 PyTorch 。

```card
title: Pytorch 官网
desc: 点击跳转 Pytorch 查看详细内容
logo: /assets/images/ai/deep-learning/pytorch/logo-icon.svg
link: https://pytorch.org/
color: rgba(173, 216, 590, 0.15)
```

安装下载的时候如果 pip 速度太低可能会超时，可以尝试使用清华镜像源。
```Python
pip3 install torch torchvision torchaudio -i https://mirrors.aliyun.com/pypi/simple/
```

