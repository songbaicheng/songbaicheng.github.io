---
star: true
category: 数据结构
tag: 
  - linear list
---

# 线性表
> 所有的测试代码都在博客[首页](/README.md)中的 java-study-demo 中找到。

## 基本定义
线性表是具有相同数据结构的n(n ≥ 0)个数据元素的有限序列，其中n为表长，为0即为空表。一般标识为：L=(a~1~,a~2~,a~3~,a~i~,a~i+1~,……,a~n~,)，其中a~1~是唯一的第一个元素，被称为表头元素；a~n~是唯一一个最后一个元素，被称为表尾元素。除了第一个元素外，每个元素有且仅有一个直接前驱，除最后一个外，每个元素有且仅有一个直接后继，这种线性有序的表被称为线性表。线性表有以下特点：
- 表中元素个数有限。
- 表中元素具有逻辑上的顺序性，表中元素有先后顺序。
- 表中元素都是数据结构，每个元素都是单个结构。
- 表中的元素类型数据都相同，这意味着每个元素所占相同大小的空间。
- 表中的元素具有抽象性。

## 基本操作
- initList：初始化表，构造一个空的线性表。
- length：求表长，返回线性表的长度即其中的元素个数。
- locationElem：按值查找元素。
- getElem：按位查找元素。
- listInsert：插入操作。
- listDelete：删除操作。
- printList：输出操作。
- empty：判空操作。
- destoryList：销毁操作。

## 线性表的顺序表示
### 顺序表的定义
线性表的顺序存储又叫顺序表，使用一组地址连续的存储单元依次存储线性表中的的数据元素，从而使逻辑上相邻的两个元素在物理位置上也相邻。

![顺序表的存储结构](/assets/images/study/computer-basis/ads/data-structure/linear-list/order-list.jpg "顺序表的存储结构")

### 顺序表的实现
::: normal-demo Java 实现顺序表
```java
import java.util.Arrays;
import java.util.Iterator;

/**
 * @description 底层用数组实现的顺序表
 */
public class SequenceList<T> implements Iterable<T> {

    /**
     * 存储元素的数组
     */
    private T[] elements;
    /**
     * 当前顺序表中元素个数
     */
    private int size;

    /**
     * 初始化顺序表大小
     *
     * @param capacity 最大存储元素个数
     */
    @SuppressWarnings("unchecked")
    SequenceList(int capacity) {
        elements = (T[]) new Object[capacity];
        this.size = 0;
    }

    /**
     * 清空顺序表
     * 底层也是便利数组依次赋值，所以时间复杂度为O(n)。
     */
    public void clear() {
        size = 0;
    }

    /**
     * 顺序表是否为空
     * 直接返回size值，所以时间复杂度为O(1)。
     *
     * @return 是否为空
     */
    public boolean isEmpty() {
        return size == 0;
    }

    /**
     * 获取顺序表长度
     * 直接返回size值，所以时间复杂度为O(1)
     *
     * @return 顺序表长度
     */
    public int length() {
        return size;
    }

    /**
     * 根据下标获得元素
     * 顺序表的特点就是随机访问，直接返回根据下标返回数组元素，所以时间复杂度为O(1)。
     *
     * @param i 元素下标
     * @return 下标对应元素
     */
    public T get(int i) {

        // 安全性校验
        if (i < 0 || i >= size) {
            return null;
        }

        return elements[i];
    }

    /**
     * 向顺序表中插入元素，如果顺序表已满则进行扩容操作
     * 直接根据size位置插入，所以时间复杂度为O(1)。
     *
     * @param e 待插入元素
     */
    public void insert(T e) {

        // 数组扩容
        if (size >= elements.length) {
            // 扩容操作，这里乘2处理
            reSize(2 * elements.length);
        }

        elements[size++] = e;
    }

    /**
     * 重制顺序表大小
     */
    private void reSize(int newSize) {
        elements = Arrays.copyOf(elements, newSize);
    }

    /**
     * 往指定下标插入元素
     * 直接根据size位置插入，所以时间复杂度为O(1)。
     *
     * @param target 目标下标
     * @param e      待插入元素
     */
    public void update(int target, T e) {

        // 安全性校验
        if (target < 0 || target >= size) {
            return;
        } else if (size >= elements.length) {
            return;
        }

        // 将target下标之后的元素向后移动一位
        System.arraycopy(elements, target, elements, target + 1, size - target);

        elements[target] = e;
        size++;
    }

    /**
     * 删除指定下标元素
     *
     * @param target 目标下标
     */
    public void remove(int target) {

        // 安全性校验
        if (target < 0 || target >= size) {
            return;
        }

        // 将target下标之后的元素向前移动一位
        if (size - 1 - target >= 0) {
            System.arraycopy(elements, target + 1, elements, target, size - 1 - target);
        }

        elements[size] = null;
        size--;
    }

    /**
     * 返回待查找元素首次出现下标
     *
     * @param e 待查找元素
     * @return 待查找元素首次出现下标
     */
    public int indexOf(T e) {

        for (int i = 0; i < size; i++) {
            if (elements[i].equals(e)) {
                return i;
            }
        }

        return -1;
    }

    @Override
    public Iterator<T> iterator() {
        return new SequenceListIterator();
    }

    private class SequenceListIterator implements Iterator<T> {

        /**
         * 迭代器指针
         */
        private int currentIndex = 0;

        @Override
        public boolean hasNext() {
            return currentIndex < size;
        }

        @Override
        public T next() {
            return elements[currentIndex++];
        }

        @Override
        public void remove() {
            throw new UnsupportedOperationException("remove operation is not supported");
        }
    }
}
```
:::

## 线性表的链式表示
### 单链表
线性表的链式存储又被称为单链表，指通过一组任意的存储单元来存储线性表中的数据元素，为了建立数据元素之间的线性关系，对于每个额链表的节点，除了存放元素自身外，还需要存放一个指向其后继的指针。

```java
public class LNode<T> {

    /**
     * 当前节点的值
     */
    public T data;
    /**
     * 下一个节点的指针
     */
    public LNode<T> next;

    /**
     * 初始化节点
     * @param data 节点的值
     */
    LNode (T data) {
        this.data = data;
    }
}
```

虽然单链表解决了顺序表需要大量连续存储单元的缺点，但是也因为存储附加指针域倒是浪费存储空间，正是是由于过于分散的存储，所以单链表是非随机存取的存储结构。

我们通常用**头指针**来标识一个单链表，如果头指针为Null，则表示一个空表。注意，我们刚才提到的是**头指针**，与此相区别的定义是**头结点**，头结点是为了方便操作而在单链表第一个结点之前附加的一个结点，头结点的数据域可以不设任何信息，也可以记录表长等信息，而指针域则必须指向线性表的第一个元素结点。引入头结点之后有两个优点：
1. 由于第一个数据结点的位置被存放在头结点的指针域中，因此在链表的第一个位置上的操作和在表中其他位置的操作一致。
2. 无论链表是否为空，其头指针都是只想头结点的非空指针，所以空表和非空表得到了统一。

#### 头插法
::: normal-demo 头插法
```java
/**
  * 没有头结点的头插法
  */
@Test
void headInsertNoHead() {
    LNode<Integer> head = null;

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head;
        head = node;
    }

    while (head != null) {
        System.out.println(head.data); // 9 8 7 6 5 4 3 2 1 0
        head = head.next;
    }
}

/**
  * 有头结点的头插法
  */
@Test
void headInsertWithHead() {
    LNode<Integer> head = new LNode<>(null);

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    while (head != null) {
        System.out.println(head.data); // null 9 8 7 6 5 4 3 2 1 0
        head = head.next;
    }
}
```
:::

#### 尾插法
::: normal-demo 尾插法
```java
/**
  * 有头结点的尾插法
  */
@Test
void tailInsertWithHead() {
    LNode<Integer> head = new LNode<>(null);
    // 方便每次找到插入点，创建尾结点指针
    LNode<Integer> listFlag = head;

    for (int i = 0; i < 10; i++) {
        listFlag.next = new LNode<>(i);
        listFlag = listFlag.next;
    }

    listFlag.next = null;

    while (head != null) {
        System.out.println(head.data); // null 0 1 2 3 4 5 6 7 8 9
        head = head.next;
    }
}
```
:::

#### 查找第i个结点
::: normal-demo 单链表查找第i个结点
```java
/**
  * 查找第target个结点，假设有头结点
  */
private <T> T getById(LNode<T> head, int target) {

    // 安全性校验
    if (target < 0) {
        return null;
    }

    LNode<T> currNode = head.next;
    int flag = 1;

    while (currNode != null && flag++ < target) {
        currNode = currNode.next;
    }

    return currNode.data;
}

@Test
void getByIdTest() {
    LNode<Integer> head = new LNode<>(null);

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    System.out.println(getById(head, 5)); // 5
}
```
:::