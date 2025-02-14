---
category: AI
tag:
  - PyTorch
---

# PyTorch

Pytorch 是一个开源的机器学习库，主要用于深度学习和自然语言处理。它提供了丰富的API和工具来构建、训练和部署神经网络模型。

## 安装

使用 PyTorch 之前必须有 Python 环境，为了多个 Python 环境适应不同框架，建议使用 Anaconda 来安装 Python，类似于 NVM 一样管理本地的
Python 环境。

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

## 常用库函数

### DataSet & DataLoader

::: normal-demo 定义自己的数据集。

```python
from PIL import Image
from torch.utils.data import Dataset
import os


class MyDataset(Dataset):
    """
    Custom dataset class for loading images and labels from a directory.
    """

    def __init__(self, root_dir, label_name):
        """
        Constructor for MyDataset class.
        :param root_dir: 图片库地址
        :param label_name: 图片标签对应名称
        """
        self.root_dir = root_dir
        self.label_name = label_name
        self.path = str(os.path.join(self.root_dir, self.label_name))
        self.images = [f for f in os.listdir(self.path) if f.endswith(('jpg', 'png'))]

    def __getitem__(self, index):
        """
        Returns an image at the given index.
        :param index: int 图片对应下标
        :return: tuple (image, label)
        """
        try:
            img_name = self.images[index]
            img_item_path = os.path.join(self.path, img_name)
            image = Image.open(img_item_path)
            label = self.label_name  # 假设每个文件夹是一个标签
            return image, label
        except IndexError:
            print(f"Error: Index {index} is out of bounds. Valid range is 0 to {len(self.images) - 1}")
            return None, None

    def __len__(self):
        """
        Returns the number of images in the dataset.
        :return: int 图片数量
        """
        return len(self.images)


# 数据集路径
dataset_dir = 'images/HearthStone'

# 定义数据集
druid_dataset = MyDataset(dataset_dir, 'Druid')
shaman_dataset = MyDataset(dataset_dir, 'Shaman')

# 获取不同数据集的内容
druid_dataset.__getitem__(10)[0].show()
print(druid_dataset.__getitem__(0)[1])
print(druid_dataset.__len__())
shaman_dataset.__getitem__(2)[0].show()
print(shaman_dataset.__len__())
```

:::

::: normal-demo 使用 DataLoader 加载数据。

```python
import torchvision
from torch.utils.data import DataLoader
from torch.utils.tensorboard import SummaryWriter

# Download the CIFAR10 dataset
test_set = torchvision.datasets.CIFAR10(root='./dataset', train=False, transform=torchvision.transforms.ToTensor(),
                                        download=True)

# 展示
test_loader = DataLoader(test_set, batch_size=64, shuffle=False, num_workers=0)
writer = SummaryWriter('runs/cifar10')
for i, (images, labels) in enumerate(test_loader):
    writer.add_images('test_dataloader_set', images, i)
```

:::

### 自定义神经网络

::: normal-demo 定义一个简单的线性加法的神经网络

```python
import torch
from torch import nn


class AddNeuralNetwork(nn.Module):
    def __init__(self, x):
        super().__init__()
        self.x = x

    def forward(self, x):
        return self.x + x


addNeuralNetwork = AddNeuralNetwork(1.0)
print(addNeuralNetwork(torch.tensor(5.0, dtype=torch.float)))

```

:::

### 卷积与池化

卷积：卷积层是深度学习中常用的操作，用于提取图像中的特征。它通过滑动一个小的矩阵（称为过滤器或核）在输入数据上执行点乘和求和的操作来工作。
池化：池化层通常用于减少数据的维度，同时保留最重要的信息。类似于二向箔的概念，将高纬度的数据提取成低纬度数据。

::: normal-demo 定义一个简单的线性加法的神经网络

```python
import torch
import torchvision
from torch.nn import Module, Conv2d, MaxPool2d, Linear, Flatten
from torch.utils.data import DataLoader
from torch.utils.tensorboard import SummaryWriter

# 下载CIFAR10数据集
test_set = torchvision.datasets.CIFAR10(root='./dataset', train=False, transform=torchvision.transforms.ToTensor(),
                                        download=True)

# 创建数据加载器
test_loader = DataLoader(test_set, batch_size=100)


# 定义优化后的网络
class Net(Module):
    def __init__(self):
        super().__init__()
        # 第一层卷积，保持输入尺寸
        self.conv1 = Conv2d(in_channels=3, out_channels=32, kernel_size=3, stride=1, padding=1)
        # 第二层卷积，池化减小尺寸
        self.conv2 = Conv2d(in_channels=32, out_channels=64, kernel_size=3, stride=1, padding=1)
        # 池化层，减少图像大小
        self.pool = MaxPool2d(kernel_size=2, stride=2, padding=0)
        # 全连接层，用于分类
        self.fc1 = Linear(64 * 8 * 8, 512)  # 假设输入为32x32，经过两次池化后，大小为8x8
        self.fc2 = Linear(512, 10)  # CIFAR-10有10个类别
        self.flatten = Flatten()  # 将特征图展平为一维

    def forward(self, x):
        # 前向传播
        x = self.pool(torch.relu(self.conv1(x)))  # 第一卷积层 + 激活 + 池化
        x = self.pool(torch.relu(self.conv2(x)))  # 第二卷积层 + 激活 + 池化
        x = self.flatten(x)  # 展平
        x = torch.relu(self.fc1(x))  # 全连接层 + 激活
        x = self.fc2(x)  # 输出层
        return x


# 初始化网络和TensorBoard
net = Net()
writer = SummaryWriter('runs/test')
step = 0

# 记录输入和输出图像以及网络的预测
for data in test_loader:
    images, labels = data
    outputs = net(images)

    # 将输入图像记录到TensorBoard
    writer.add_images("net-input", images, step)

    # 记录标签的统计信息：例如标签的最大值或最小值
    writer.add_scalar("net-output-label-max", labels.max().item(), step)
    writer.add_scalar("net-output-label-min", labels.min().item(), step)

    # 记录预测的标签（最大值预测的类别）
    _, predicted = torch.max(outputs, 1)
    writer.add_scalar("net-predicted-label-max", predicted.max().item(), step)

    step += 1

# 关闭TensorBoard的writer
writer.close()


```

:::