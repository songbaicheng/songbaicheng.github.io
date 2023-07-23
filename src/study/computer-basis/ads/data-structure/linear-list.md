---
star: true
category: 数据结构
tag: 
  - linear list
---

# 线性表
> 所有的测试代码都在博客[首页](/README.md)中的 java-study-demo 中找到。

```mindmap
root(线性表)
    顺序存储
        顺序表
    链式存储
        借助指针
            单链表
            双链表
            循环链表
        借助数组
            静态链表
```

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
        this.next = null;
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
  * 每个结点的插入时间为O(1)，所以整条单链表的时间负责度为O(n)
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
  * 每个结点的插入时间为O(1)，所以整条单链表的时间负责度为O(n)
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
  * 每个结点的插入时间为O(1)，所以整条单链表的时间负责度为O(n)
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
* 需要从头遍历单链表，时间负责度为O(n)
*/
private <T> LNode<T> getById(LNode<T> head, int target) {

    // 安全性校验
    if (target < 0) {
        return null;
    }

    LNode<T> currNode = head.next;
    int flag = 1;

    while (currNode != null && flag++ < target) {
        currNode = currNode.next;
    }

    return currNode;
}

@Test
void getByIdTest() {
    LNode<Integer> head = new LNode<>(null);

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    LNode<Integer> lNode1 = getById(head, 5);
    assertNotNull(lNode1);
    System.out.println(lNode1.data); // 5
    LNode<Integer> lNode2 = getById(head, 11);
    assertNotNull(lNode2, "结点不存在！");
    System.out.println(lNode2.data); // 结点不存在！
}
```
:::

#### 查找某个元素结点
::: normal-demo 返回链表中第一个目标元素结点
```java
/**
* 返回第一个element结点，假设有头结点
* 需要从第一个节点开始遍历，时间复杂度为O(n)
*/
private <T> LNode<T> getElement(LNode<T> head, T element) {

    LNode<T> currNode = head.next;

    while (currNode != null && currNode.data != element) {
        currNode = currNode.next;
    }

    return currNode;
}

@Test
void getElementTest() {
    LNode<Integer> head = new LNode<>(null);

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    LNode<Integer> lNode1 = getElement(head, 5);
    assertNotNull(lNode1);
    System.out.println(lNode1.data); // 5
    LNode<Integer> lNode2 = getElement(head, 19);
    assertNotNull(lNode2, "结点不存在！");
    System.out.println(lNode2.data); // 结点不存在！
}
```
:::

#### 插入结点
::: normal-demo 插入结点操作
```java
/**
* 前插法插入结点
* 需要从第一个节点开始遍历，时间复杂度为O(n)
* @param head 单链表
* @param target 插入位置
* @param element 待插入元素
* @param <T> 待定元素
*/
private <T> void frontInsertNode(LNode<T> head, int target, T element) {

    // 获取前置结点
    LNode<T> node = getById(head, target - 1);

    if (node != null) {
        LNode<T> addNode = new LNode<>(element);
        addNode.next = node.next;
        node.next = addNode;
    }
}

/**
* 后插法插入结点
* 需要从第一个节点开始遍历，时间复杂度为O(n)
* @param head 单链表
* @param target 插入位置
* @param element 待插入元素
* @param <T> 待定元素
*/
private <T> void backInsertNode(LNode<T> head, int target, T element) {

    // 获取目标结点
    LNode<T> node = getById(head, target);

    if (node != null) {
        LNode<T> addNode = new LNode<>(element);
        addNode.next = node.next;
        node.next = addNode;
        addNode.data = node.data;
        node.data = element;
    }
}

@Test
void insertTest() {
    LNode<Integer> head = new LNode<>(null);

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    frontInsertNode(head, 5, 11);

    while (head != null) {
        System.out.println(head.data);  // null 9 8 7 6 11 5 4 3 2 1 0
        head = head.next;
    }

    // 清空链表
    head = new LNode<>(null);;
    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    backInsertNode(head, 5, 11);

    while (head != null) {
        System.out.println(head.data); // null 9 8 7 6 11 5 4 3 2 1 0
        head = head.next;
    }
}
```
:::

#### 删除结点
::: normal-demo 删除目标结点
```java
/**
* 前删法删除目标结点
* @param head 单链表
* @param target 目标顺序
* @param <T> 元素类型
*/
private <T> void frontDeleteNode(LNode<T> head, int target) {

    // 安全性校验
    if (target < 0) {
        return;
    }

    LNode<T> node = getById(head, target - 1);
    node.next = node.next.next;
}

/**
* 后删法删除目标结点
* 需要从第一个节点开始遍历，时间复杂度为O(n)
* @param head 单链表
* @param target 目标顺序
* @param <T> 元素类型
*/
private <T> void backDeleteNode(LNode<T> head, int target) {

    // 安全性校验
    if (target < 0) {
        return;
    }

    LNode<T> node = getById(head, target);
    node.data = node.next.data;
    node.next = node.next.next;
}

@Test
void deleteNodeTest() {
    LNode<Integer> head = new LNode<>(null);

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    frontDeleteNode(head, 5);

    while (head != null) {
        System.out.println(head.data); // null 9 8 7 6 4 3 2 1 0
        head = head.next;
    }

    head = new LNode<>(null);

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    frontDeleteNode(head, 5);

    while (head != null) {
        System.out.println(head.data); // null 9 8 7 6 4 3 2 1 0
        head = head.next;
    }
}
```
:::

#### 求表长
::: normal-demo 求表长
```java
/**
* 求链表长度
* 需要从第一个节点开始遍历，时间复杂度为O(n)
* @param head 单链表
* @param <T> 元素类型
* @return 链表长度
*/
private <T> int getListLength(LNode<T> head) {

    int length = 0;

    while (head.next != null) {
        head = head.next;
        length++;
    }

    return length;
}

@Test
void getListLengthTest() {
    LNode<Integer> head = new LNode<>(null);

    for (int i = 0; i < 10; i++) {
        LNode<Integer> node = new LNode<>(i);
        node.next = head.next;
        head.next = node;
    }

    System.out.println(getListLength(head)); // 10
}
```
:::

### 双链表
为了克服访问单链表访问结点需要从头遍历的问题，引入了双链表的概念，双链表结点中有两个指针 prior 和 next，分别指向了前驱和后继结点，有了这两个指针的存在，插入和删除操作的时间复杂度仅为O(1)。

> 这里说的“插入和删除操作的时间复杂度仅为O(1)”只是说插入和删除这个节点的过程复杂度为O(1)，而并不包括找到这个节点的过程。

```java
public class DNode<T> {

    /**
     * 当前节点的值
     */
    public T data;
    /**
     * 前驱指针
     */
    public DNode<T> prior;
    /**
     * 后继指针
     */
    public DNode<T> next;

    /**
     * 初始化节点
     * @param data 节点的值
     */
    DNode (T data) {
        this.data = data;
        this.prior = null;
        this.next = null;
    }
}
```

#### 双链表的插入
::: normal-demo 双链表的插入
```java
/**
* 双链表插入元素，有头结点
* @param head 双链表
* @param target 目标位置
* @param element 待插入元素
* @param <T> 元素类型
*/
private <T> void insertNode(DNode<T> head, int target, T element) {

    // 安全性校验
    if (target < 0) {
        return;
    }

    DNode<T> flagNode = head.next;

    for (int i = 1; i < target; i++) {
        flagNode = flagNode.next;
    }

    if (flagNode == null || flagNode.next == null) {
        return;
    }

    DNode<T> newNode = new DNode<>(element);
    flagNode.next.prior = newNode;
    newNode.next = flagNode.next;
    newNode.prior = flagNode;
    flagNode.next = newNode;
}

@Test
void insertTest() {

    DNode<Integer> head = new DNode<>(null);
    DNode<Integer> flagNode = head;

    for (int i = 0; i < 5; i++) {
        DNode<Integer> newNode = new DNode<>(i);

        flagNode.next = newNode;
        newNode.prior = flagNode;
        flagNode = flagNode.next;
    }

    insertNode(head, 3, 9);

    while (head != null) {
        System.out.println(head.data); // null 0 1 2 9 3 4
        head = head.next;
    }
}
:::

#### 双链表的删除
::: normal-demo 双链表的删除
```java
/**
* 双链表删除元素，有头结点
* @param head 双链表
* @param target 目标位置
* @param <T> 元素类型
*/
private <T> void deleteNode(DNode<T> head, int target) {

    // 安全性校验
    if (target < 0) {
        return;
    }

    DNode<T> flagNode = head.next;

    for (int i = 1; i < target; i++) {
        flagNode = flagNode.next;
    }

    if (flagNode == null || flagNode.next == null) {
        return;
    }

    flagNode.next = flagNode.next.next;
    flagNode.next.prior = flagNode;
}

@Test
void insertTest() {

    DNode<Integer> head = new DNode<>(null);
    DNode<Integer> flagNode = head;

    for (int i = 0; i < 5; i++) {
        DNode<Integer> newNode = new DNode<>(i);

        flagNode.next = newNode;
        newNode.prior = flagNode;
        flagNode = flagNode.next;
    }

    deleteNode(head, 2);

    while (head != null) {
        System.out.println(head.data); // null 0 2 3 4
        head = head.next;
    }
}
:::

### 循环链表
#### 循环单链表
循环单链表和单链表的区别就是最后一个结点的指针不是 Null 而是改为指向头指针，从而使链表形成一个环状。这个时候的判空操作就是头结点的指针是否为头结点。

因为循环单链表是一个“环”，因此在任何一个位置上的插入和删除都是等价的，无需判断表尾，而且每次操作无需寻找表头，可以从任意结点开始遍历。有时对循环单链表不设置头指针而设置尾指针，因为设置尾指针可以直用next找到头指针并且可以直接在队尾插入元素，省去了在头指针遍历的麻烦。

#### 循环双链表
照葫芦画瓢，循环双链表即为头结点的prior指向尾结点，尾结点的next指向头结点。这时的判空条件为头结点的prior和next都为本身。

### 静态链表
静态链表借助数组来描述线性表的链式存储结构，结点也有数据域和指针域，不过这里的指针用数组的下标来代替，又称为游标，因为是数组的原因，静态链表也需要一块连续的内存空间。

![静态链表存储示意图](/assets/images/study/computer-basis/ads/data-structure/linear-list/static-list.jpg "静态链表存储示意图")

## 顺序表和链表的比较
| 比较方面 | 顺序表 | 链表 |
| --- | --- | --- |
| 存取方式 | 随机存取 | 只能从表头开始顺序存取 |
| 逻辑结构与物理结构 | 逻辑相邻物理也相邻 | 逻辑相邻但物理不一定相邻 |
| 删查找操作 | 插入删除慢，查找快 | 删除插入快，查找慢 |
| 空间分配 | 密度大，但是对连续存储空间要求高 | 密度小，但操作灵活高效 |

总之，两种存储结构各有长短，选择哪一种有实际问题的主要因素决定。通常较稳定的线性表选择顺序存储，而频繁进行插入删除操作的线性表宜选择链式存储。