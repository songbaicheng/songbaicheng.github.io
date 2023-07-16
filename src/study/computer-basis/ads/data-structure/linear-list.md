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