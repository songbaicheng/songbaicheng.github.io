---
star: true
category: 数据结构
tag: 
  - stack
---

# 栈
> 所有的测试代码都在博客[首页](/README.md)中的 java-study-demo 中找到。

```mindmap
root(栈)
    顺序栈
    链栈
    共享栈
```

## 基本概念
栈（Stack）是只允许在一端进行插入或删除操作的线性表。

![栈的示意图](/assets/images/study/computer-basis/ads/data-structure/stack/stack.jpg "栈的示意图")

- 栈顶：线性表允许进行插入和删除的那一端。
- 栈底：固定的，不允许进行插入和删除的那一端。
- 空栈：不含任何元素空表。

如上图所示，a1为栈底元素，a5为栈顶元素。根据规则，进栈次序依次为a1,a2,a3,a4,a5，而出栈依次为a5,a4,a3,a2,a1，由此可见栈的操作特性可以明显囊括为先进后出（Last In First Out，LIFO）。

> 栈的数学性质：n个不同元素进栈，出栈元素不同排列的个数为 1/(n+1)乘2n中选n个数的排列，也被称为卡特兰（Catalan）数。

## 基本操作
- InitStack：初始化一个空栈。
- StackEmpty：判断一个栈是否为空。
- Push：进栈。
- Pop：出栈。
- GetTop：读取栈顶元素。
- DestroyStack：销毁栈。

## 栈的顺序存储
采用顺序存储的栈成为顺序栈，利用一组地址连续的存储单元存放自栈底到栈顶的数据元素，同时附设一个指针指示当前栈顶元素的位置。

::: normal-demo Java 实现顺序栈
```java

```
:::