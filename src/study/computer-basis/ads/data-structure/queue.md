---
star: true
category: 数据结构
tag: 
  - queue
---

# 队列
## 基本概念
队列简称队，也是一种操作受限的线性表，只允许在表的一端进行插入，而在表的另一端进行删除。向队列中插入元素称为入队或进队；删除元素称为出队或离队。特性是最早进队的也是最早出队的，即先进先出（FIFO， First In First Out）。

![队列示意图](/assets/images/study/computer-basis/ads/data-structure/queue/queue.jpg "队列示意图")

- 队头（Front）：允许删除的一端，又称队首。
- 队尾（Rear）：允许插入的一端。
- 空队列：不包含任何元素的空表。

## 基础操作
- InitQueue：初始化队列，构造一个空队列。
- QueueEmpty：判队列空。
- EnQueue：入队。
- DeQueue：出队。
- GetHead：读队头元素。

## 队列的顺序存储

### 循环队列

## 队列的链式存储

## 双端队列