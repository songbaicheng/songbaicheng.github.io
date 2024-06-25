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
