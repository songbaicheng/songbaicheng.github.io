---
category: 大数据
tag: 
  - Hadoop
  - big data
---

# Apache Hadoop
## 简介
Hadoop 是一个开源的分布式计算和存储框架，由 Apache 基金会开发和维护。
Hadoop 为庞大的计算机集群提供可靠的、可伸缩的应用层计算和存储支持，它允许使用简单的编程模型跨计算机群集分布式处理大型数据集，并且支持在单台计算机到几千台计算机之间进行扩展。
Hadoop 使用 Java 开发，所以可以在多种不同硬件平台的计算机上部署和使用。其核心部件包括分布式文件系统 (Hadoop DFS，HDFS) 和 分布式计算框架（MapReduce）。

```card
title: Apache Hadoop 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/big-data/hadoop/hadoop.png
link: https://hadoop.apache.org
color: rgba(173, 216, 590, 0.15)
```

## 基础概念
HDFS（分布式文件系统）
- Namenode（名称节点）
  - 功能：Namenode是HDFS的核心，它管理文件系统的元数据，例如文件和目录的结构、文件块的位置等。
  - 职责：负责客户端请求的处理，如打开、关闭、重命名文件和目录等。它还决定文件块（block）存储在哪些Datanode上。
- Datanode（数据节点）
  - 功能：Datanode负责实际的数据存储，存储HDFS中的文件块。 
  - 职责：定期向Namenode报告它们存储的块信息，并处理来自客户端的读写请求。
- Secondary Namenode（次级名称节点）
  - 功能：辅助Namenode管理元数据。
  - 职责：定期与Namenode同步，以减轻Namenode的工作负担，但它并不是Namenode的热备份。如果Namenode故障，Secondary Namenode无法立即接管工作。

MapReduce（分布式计算框架）
> JobTracker是MapReduce 1.x中的单点故障。在YARN中，它的功能被ResourceManager和ApplicationMaster替代。

- JobTracker
  - 功能：负责协调和管理MapReduce作业的执行。
  - 职责：将作业分成多个任务（tasks），并将这些任务分配给集群中的TaskTracker节点。
- TaskTracker
  - 功能：负责执行JobTracker分配的具体任务。
  - 职责：报告任务执行的进展情况，并处理任务失败的情况。

YARN（资源管理和作业调度）
> Hadoop 2.x及以上版本引入了YARN来改进资源管理和作业调度

- ResourceManager
  - 功能：集群的资源管理和调度。
  - 职责：管理所有节点的资源，分配资源给不同的应用。
- NodeManager
  - 功能：负责管理单个节点上的资源和任务。
  - 职责：报告节点的资源使用情况，管理节点上的容器（containers）并监控任务执行。
- ApplicationMaster
  - 功能：负责应用程序的管理。
  - 职责：为每个应用程序（如MapReduce作业）启动一个ApplicationMaster，它负责申请资源并监控任务的执行。

## HDFS 重点知识
### 文件块大小
Hadoop 集群中的文件存储都是以块（block）的形式存储在 HDFS 中的，在 2.7.3 之前，HDFS 文件块大小默认为 64MB，之后默认为 128MB，可以通过参数 `dfs.blocksize` 进行修改。

### 文件块大小选取原则
核心原则是**最小化寻址开销，减少网络传输。**
1. 减少磁盘寻道时间：HDFS的设计是为了支持大数据操作，合适的 block 大小有助于减少硬盘寻道时间（平衡了硬盘寻道时间、IO时间），提高系统吞吐量。
2. 减少NameNode内存消耗：NameNode 需要在内存 FSImage 文件中记录 DataNode 中数据块信息，若 block size 太小，那么需要维护的数据块信息会更多。而 HDFS 只有一个 NameNode 节点，内存是极其有限的。
3. 影响map端失败时重启时间：若map端任务出现崩溃，那么在重新启动拉起任务时会重新加载数据，而数据块的大小直接影响了加載数据的时间，例如数据块（block）越大，数据加载时间就会越长，进而该map任务的恢复时间越长。
4. 考虑网络传输问题：在数据读写过程中，需要进行网络传输。如果block块过大，会导致网络传输的时间边长，也会因网络不稳定等因素造成程序卡顿、超时、无响应等。如果block块过小，会频繁的进行文件传输，初始化的map端对象会变多，资源占用变高、jvm增高、网络占用变多。

### 读写流程
1. 客户端发起请求：
- 客户端向NameNode发起写文件请求，请求中包含文件名、文件大小等信息。
2. NameNode检查与响应：
- NameNode检查文件是否已存在，以及其父目录是否存在。
- 如果文件不存在且满足其他条件（如磁盘空间等），NameNode会接受请求并返回一个确认信息。
3. 文件块分配：
- NameNode会将文件划分为多个数据块（默认大小为128MB，但可配置）。
- 对于每个数据块，NameNode会选择一个或多个DataNode进行存储，确保数据的冗余和容错性（默认每个数据块有3个副本）。
4. 数据写入：
- 客户端根据NameNode的指示，将数据块写入指定的DataNode。
- 数据写入通常是流水线式的，即客户端将数据写入第一个DataNode，第一个DataNode将数据转发给第二个DataNode，依此类推，直到所有数据块都存储完成。
5. 记录映射关系：
- NameNode会记录下文件与数据块的映射关系，以便于后续的读取操作。

## MapReduce 重点知识
### Map Task

### Reduce Task

### 切片解析

