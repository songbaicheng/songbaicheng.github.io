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

::: normal-demo Java 实现链队列
```java
public class LinkQueue<E> {

    /**
     * 队列头指针
     */
    private LNode<E> front;
    /**
     * 队列尾指针
     */
    private LNode<E> rear;

    /**
     * 初始化队列
     */
    public LinkQueue() {

        LNode<E> head = new LNode<E>(null);
        // 队头指针一直是头结点，队头元素一直是head.next()
        front = head;
        rear = head;
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
     * 入队操作
     *
     * @param element 入队元素
     */
    public void offer(E element) {

        // 定义新结点
        LNode<E> node = new LNode<>(element);
        // 采用尾插法
        rear.next = node;
        // 尾指针指向新结点
        rear = node;

    }

    /**
     * 出队操作
     *
     * @return 出队元素
     */
    public Object poll() {

        E temp = isEmpty() ? front.next.data : null;

        front.next = front.next.next;

        // 如果出队后队列为空则将尾指针指向头指针防止尾指针丢失
        if (front.next == null) {
            rear = front;
        }

        return temp;
    }

    /**
     * 返回队头元素
     *
     * @return 队头元素
     */
    public Object peek() {

        return !isEmpty() ? front.next.data : null;
    }
}
```
:::

## 双端队列
双端队列是指允许两端都可以进行入队和出队操作的队列，逻辑结构仍为线性结构。

![双端队列](/assets/images/study/computer-basis/ads/data-structure/queue/deque.jpg "双端队列")

在双端队列进队时，前端进的元素排列在队列后端进的元素前面，后端进的元素在队列前端进的后面，前后端出队的时候还是遵循先进先出的规律。

在双端队列的基础上，衍生出了输出受限和输入受限的两种特殊的队列。输出受限的队列只允许在一端进行插入和删除，在另一端只允许插入；输入受限的队列只允许在一端进行插入删除，另一端只允许删除。

![输出受限的双端队列](/assets/images/study/computer-basis/ads/data-structure/queue/deque-1.jpg "输出受限的双端队列")

![输入受限的双端队列](/assets/images/study/computer-basis/ads/data-structure/queue/deque-2.jpg "输入受限的双端队列")

> 我并没有遇到实际的场景来使用双端队列这种结构，Java也有Deque来实现双端队列，但是并没有说做到输入输出限制和出入的前后顺序的限制，这个知识点最重要的是要理解下面这个经典问题即可。

### 双端队列经典问题
设有一个双端队列，输入顺序为1，2，3，4，求出下列三种条件的输出队列
1. 能由输入受限的双端队列得到，但不能由输出受限的双端队列得到的输出序列。
- 4，1，3，2
2. 能由输出受限的双端队列得到，但不能由输入受限的双端队列得到的输出序列。
- 4，2，1，3
3. 既不能由输入受限的双端队列得到，也不能由输出受限的双端队列得到的输出序列。
- 4，2，3，1

当然这些结果是这么出来的呢，当然可能在只接触过定义之后我们并不知道双端队列甚至是队列的进出顺序，这里我们直接结合这个问题来给大家简单理理头绪。

首先我们严格意义上的队列应该严格遵循先进先出的规则，所以在保证入队顺序的情况下就只会有一种出队顺序。这里不得不提一下栈的进出顺序，我们常问的一组入栈顺序为什么会有多种出栈顺序，因为虽然是保证这先进后出的规则，但是我们可以不断的进出来打乱顺序，而队列先进只能先出，并不会被后面入队元素所影响。

其次到了双端队列，这种先进先出的规则被打破，既然可以两边同时进队，还要保证线性结构，那该如何保证先进入的在两侧都再次入队的情况下可以先出来呢，所以回到这个经典问题之所以能有这种答案，都是在保证了所有元素都入队的情况下再出队的，基于这个条件，我们才可以根据输入输出限制来找到不可能得到的序列。

我们拿第一个问题的 4，1，3，2 来解释，如果是输入受限，我们能在一端入队，因为入队顺序是确定的，所以四个元素在队内的相对位置就是顺序的 1，2，3，4，而因为两端都可以出队，所以可以用右左右左的顺序得到 4，1，3，2 的顺序，相反如果是输出受限，就应该反向推测输出前队内的顺序只能是4，1，3，2，而我们不能够在 1 和 2 入队之后让 3 在 1 和 2 之间，所以这输出序列是唯一正确的。