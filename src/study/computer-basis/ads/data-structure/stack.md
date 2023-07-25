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
public class ArrayStack<E> extends Stack<E> {

    /**
     * 栈顶指针
     */
    private int top;
    /**
     * 栈内数组
     */
    private final E[] data;

    /**
     * 初始化栈
     * @param capacity
     */
    public ArrayStack(int capacity) {
        this.data = (E[]) new Object[capacity];
        this.top = -1;
    }

    @Override
    public E push(E item) {

        // 判断栈内是否还有空间
        if (this.top == data.length - 1) {
            return null;
        }
        data[++top] = item;
        return super.push(item);
    }

    /**
     * 出栈
     * @return 栈顶元素
     */
    @Override
    public synchronized E pop() {
        return data[top--];
    }

    /**
     * 获取栈顶元素
     * @return 栈顶元素
     */
    @Override
    public synchronized E peek() {
        return data[top];
    }

    /**
     * 栈判空
     * @return 是否为空栈
     */
    @Override
    public boolean empty() {
        return this.top == -1;
    }
}
```
:::

### 共享栈
利用栈底位置不变的特性，可以让两个顺序栈共享一个一维数组空间，将两个栈的栈底分别设在共享空间的两端，两个栈顶向共享空间的中间延伸，共享栈是为了更有效的利用存储空间，两个栈互相调节，存取数据的时间复杂度都为O(1)。

两个栈的栈顶指针一个为-1一个为MaxSize时各自为空，而两个指针相邻，即top0 - top1 = 1的时候为栈满。

## 栈的链式存储
采用链式存储的栈称为链栈，优点是便于多个栈共享存储空间提高效率，并且不存在栈满的情况。通常采用单链表实现并规定所有的操作都在表头进行。

::: normal-demo Java 实现带头结点的链栈
```java
public class LinkedStack<E> extends Stack<E> {

    /**
     * 存储链表
     */
    private LNode<E> head = null;

    /**
     * 初始化头结点
     */
    public LinkedStack() {
        head = new LNode<>(null);
    }

    /**
     * 入栈
     * @param item 入栈元素
     * @return 入栈元素
     */
    @Override
    public E push(E item) {
        LNode<E> node = new LNode<>(item);

        if (head.next != null) {
            node.next = head.next;
        }

        head.next = node;
        return item;
    }

    /**
     * 出栈
     * @return 出栈元素
     */
    @Override
    public synchronized E pop() {

        E temp = head.next.data;
        head.next = head.next.next;

        return temp;
    }

    /**
     * 查找栈顶元素
     * @return 栈顶元素
     */
    @Override
    public synchronized E peek() {
        return head.next.data;
    }

    /**
     * 判断是否栈空
     * @return 是否栈空
     */
    @Override
    public boolean empty() {
        return head.next == null;
    }
}
```
:::