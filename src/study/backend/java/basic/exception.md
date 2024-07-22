---
star: true
category: Java 异常
tag: 
  - Exception
  - Error
---

# Java 异常

```mindmap
root((Java 异常))
    Throwable
    Error
    Exception
    受检异常
    非受检异常
    
```

## Java 异常简介
Java 异常是 Java 提供的一种识别及响应错误的一致性机制。Java 异常机制可以使程序中异常处理代码和正常业务代码分离，保证程序代码更加优雅，并提高程序健壮性。

### Throwable
Throwable 是 Java 语言中所有错误与异常的超类，其中包含两个子类：Error（错误）和 Exception（异常），它们通常用于指示发生了异常情况。Throwable 包含了其线程创建时线程执行堆栈的快照，它提供了 printStackTrace() 等接口用于获取堆栈跟踪数据等信息。

### Error
Error 类及其子类是程序中无法处理的错误，表示运行应用程序中出现了严重的错误。

特点：此类错误一般表示代码运行时 JVM 出现问题。通常有 Virtual MachineError（虚拟机运行错误）、NoClassDefFoundError（类定义错误）等。比如 OutOfMemoryError：内存不足错误；StackOverflowError：栈溢出错误。此类错误发生时，JVM 将终止线程。

这些错误是不受检异常，非代码性错误。因此，当此类错误发生时，应用程序不应该去处理此类错误。按照 Java 惯例，我们是不应该实现任何新的 Error 子类的！

### Exception

