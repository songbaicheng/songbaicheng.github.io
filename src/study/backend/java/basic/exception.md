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
Error 类及其子类是程序中无法处理的错误，表示运行应用程序中出现了严重的错误。此类错误一般表示代码运行时 JVM 出现问题。通常有 Virtual MachineError（虚拟机运行错误）、NoClassDefFoundError（类定义错误、 OutOfMemoryError：内存不足错误、StackOverflowError：栈溢出等错误。此类错误发生时，JVM 将终止线程。

这些错误是不受检异常，非代码性错误。因此，当此类错误发生时，应用程序不应该去处理此类错误。按照 Java 惯例，我们是不应该实现任何新的 Error 子类的！

### Exception
程序本身可以捕获并且可以处理的异常。Exception 这种异常又分为两类：运行时异常和编译时异常。
- 运行时异常：RuntimeException 类及其子类，表示 JVM 在运行期间可能出现的异常。
- 编译时异常：Exception 中除 RuntimeException 及其子类之外的异常。

## 常见异常处理方式
### 直接抛出异常
通常，应该捕获那些知道如何处理的异常，将不知道如何处理的异常继续传递下去。传递异常可以在方法签名处使用 throws 关键字声明可能会抛出的异常。

```Java
private static void readFile(String filePath) throws IOException {
    File file = new File(filePath);
    String result;
    BufferedReader reader = new BufferedReader(new FileReader(file));
    while((result = reader.readLine())!=null) {
        System.out.println(result);
    }
    reader.close();
}
```

### 封装异常再抛出
有时我们会从 catch 中抛出一个异常，目的是为了改变异常的类型。多用于在多系统集成时，当某个子系统故障，异常类型可能有多种，可以用统一的异常类型向外暴露，不需暴露太多内部异常细节。

```Java
private static void readFile(String filePath) throws MyException {
    try {
        // code
    } catch (IOException e) {
        MyException ex = new MyException("read file failed.");
        ex.initCause(e);
        throw ex;
    }
}
```

### 捕获异常
在一个 try-catch 语句块中可以捕获多个异常类型，并对不同类型的异常做出不同的处理

```Java
private static void readFile(String filePath) {
    try {
        // code
    } catch (FileNotFoundException | UnknownHostException e) {
        // handle FileNotFoundException or UnknownHostException
    } catch (IOException e){
        // handle IOException
    }
}
```

### 自定义异常
习惯上，定义一个异常类应包含两个构造函数，一个无参构造函数和一个带有详细描述信息的构造函数（Throwable 的 toString 方法会打印这些详细信息，调试时很有用）

public class MyException extends Exception {
public MyException(){ }
public MyException(String msg){
super(msg);
}
// ...
}


### try-catch-finally
当方法中发生异常，异常处之后的代码不会再执行，如果之前获取了一些本地资源需要释放，则需要在方法正常结束时和 catch 语句中都调用释放本地资源的代码，显得代码比较繁琐，finally 语句可以解决这个问题。

private static void readFile(String filePath) throws MyException {
File file = new File(filePath);
String result;
BufferedReader reader = null;
try {
reader = new BufferedReader(new FileReader(file));
while((result = reader.readLine())!=null) {
System.out.println(result);
}
} catch (IOException e) {
System.out.println("readFile method catch block.");
MyException ex = new MyException("read file failed.");
ex.initCause(e);
throw ex;
} finally {
System.out.println("readFile method finally block.");
if (null != reader) {
try {
reader.close();
} catch (IOException e) {
e.printStackTrace();
}
}
}
}
调用该方法时，读取文件时若发生异常，代码会进入 catch 代码块，之后进入 finally 代码块；若读取文件时未发生异常，则会跳过 catch 代码块直接进入 finally 代码块。所以无论代码中是否发生异常，fianlly 中的代码都会执行。

若 catch 代码块中包含 return 语句，finally 中的代码还会执行吗？将以上代码中的 catch 子句修改如下：

catch (IOException e) {
System.out.println("readFile method catch block.");
return;
}
调用 readFile 方法，观察当 catch 子句中调用 return 语句时，finally 子句是否执行

readFile method catch block.
readFile method finally block.
可见，即使 catch 中包含了 return 语句，finally 子句依然会执行。若 finally 中也包含 return 语句，finally 中的 return 会覆盖前面的 return.

try-with-resource
上面例子中，finally 中的 close 方法也可能抛出 IOException, 从而覆盖了原始异常。JAVA 7 提供了更优雅的方式来实现资源的自动释放，自动释放的资源需要是实现了 AutoCloseable 接口的类。

private  static void tryWithResourceTest(){
try (Scanner scanner = new Scanner(new FileInputStream("c:/abc"),"UTF-8")){
// code
} catch (IOException e){
// handle exception
}
}
try 代码块退出时，会自动调用 scanner.close 方法，和把 scanner.close 方法放在 finally 代码块中不同的是，若 scanner.close 抛出异常，则会被抑制，抛出的仍然为原始异常。被抑制的异常会由 addSusppressed 方法添加到原来的异常，如果想要获取被抑制的异常列表，可以调用 getSuppressed 方法来获取。