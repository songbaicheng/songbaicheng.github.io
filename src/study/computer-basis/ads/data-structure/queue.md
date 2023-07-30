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
::: normal-demo Java 实现顺序存储队列
```java
public class SqQueue<E> {

    /**
     * 队列最大容量
     */
    private final int maxSize;
    /**
     * 队列头指针
     */
    private int front;
    /**
     * 队列尾指针
     */
    private int rear;
    /**
     * 队列数组
     */
    private final Object[] arrayQueue;

    /**
     * 初始化队列
     *
     * @param maxSize 队列最大容量
     */
    public SqQueue(int maxSize) {
        this.maxSize = maxSize;
        front = 0;
        rear = 0;
        arrayQueue = new Object[maxSize];
    }

    /**
     * 队列判空
     *
     * @return 队列是否为空
     */
    public boolean isEmpty() {
        return front == rear;
    }

    /**
     * 队列判满
     *
     * @return 是否队列已满
     */
    public boolean isFull() {
        return rear == maxSize;
    }

    /**
     * 入队操作
     *
     * @param element 入队元素
     */
    public void offer(E element) {

        // 队不满时，先送值到队尾元素，再将队尾指针加一
        if (!isFull()) {
            arrayQueue[rear++] = element;
        }
    }

    /**
     * 出队操作
     *
     * @return 出队元素
     */
    public Object poll() {

        return !isEmpty() ? arrayQueue[front++] : null;
    }

    /**
     * 返回队头元素
     *
     * @return 队头元素
     */
    public Object peek() {

        return !isEmpty() ? arrayQueue[front] : null;
    }
}
```
:::
看完以上的代码我们发现我们可以用```rear == maxSize```这个条件来作为队满的条件吗？哒咩哟！因为在我们不断入对和出队的时候，会发现不仅仅是尾指针在增加的同时头指针也在增加，这就导致最后数组上溢是一种假溢出，数组中依然可以存放数组，只不过指针全都聚集到了数组尾部，为了解决这种问题就引出了下面循环队列的概念。

### 循环队列
在循环队列中，我们将顺序队列臆想为一个环状空间，即把存储队列元素的表从逻辑上视为一个环，这也就是循环队列的精髓，当队首或队尾指针到 maxSize - 1 的位置时，再前进一个位置就自动到 0。

::: normal-demo Java 实现循环队列
```java
public class Queue<E> {

    /**
     * 队列最大容量
     */
    private final int maxSize;
    /**
     * 队列头指针
     */
    private int front;
    /**
     * 队列尾指针
     */
    private int rear;
    /**
     * 队列数组
     */
    private final Object[] arrayQueue;

    /**
     * 初始化队列
     *
     * @param maxSize 队列最大容量
     */
    public Queue(int maxSize) {
        this.maxSize = maxSize;
        front = 0;
        rear = 0;
        arrayQueue = new Object[maxSize];
    }

    /**
     * 队列判空
     *
     * @return 队列是否为空
     */
    public boolean isEmpty() {
        return front == rear;
    }

    /**
     * 队列判满
     *
     * @return 是否队列已满
     */
    public boolean isFull() {
        return (rear + 1) % maxSize == front;
    }

    /**
     * 入队操作
     *
     * @param element 入队元素
     */
    public void offer(E element) {

        // 队不满时，先送值到队尾元素，再将队尾指针加一
        if (!isFull()) {
            arrayQueue[rear] = element;
            rear = (rear + 1) % maxSize;
        }
    }

    /**
     * 出队操作
     *
     * @return 出队元素
     */
    public Object poll() {

        if (isEmpty()) {
            return null;
        }

        Object temp = arrayQueue[front];
        front = (front + 1) % maxSize;

        return temp;
    }

    /**
     * 返回队头元素
     *
     * @return 队头元素
     */
    public Object peek() {

        return isEmpty() ? arrayQueue[front] : null;
    }

    /**
     * 获取目前队列长度
     *
     * @return 队列长度
     */
    public int length() {

        return (rear + maxSize - front) % maxSize;
    }
}
```
:::
对于循环队列判空和满的方式有三种，上面只展示了最常用的一种，即通过队头指针在队尾指针的下一个位置来牺牲一个队列单元作为队满的标志。其他两种是通过增加标识位来区别队空和队满，一个是增设表示元素个数的单位成员和 maxSize 进行对来判断，另一个是设置 tag 标志位来判断。

## 队列的链式存储
队列的链式表称为链队列，是一个同时带有队头指针和队尾指针的单链表。

![不带头结点的链式队列](/assets/images/study/computer-basis/ads/data-structure/queue/link-queue.jpg "不带头结点的链式队列")

不难看出在不带头结点链队列操作比较麻烦，所以为了统一操作一般都会使用带头结点的链表存储。相对于容易出现存储不合分配不合理或者溢出情况的顺序存储队列，我们最好使用链式队列。

## 双端队列