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
import org.junit.jupiter.api.Test;

import java.util.Iterator;

/**
 * @description 顺序表结构测试
 */
class SequenceListTest {

    private SequenceList<Integer> list = new SequenceList<>(10);

    @Test
    void clear() {
        list.insert(5);
        list.clear();
        System.out.println(list.get(0));
    }

    @Test
    void isEmpty() {
        System.out.println(list.isEmpty());
        list.insert(3);
        System.out.println(list.isEmpty());
    }

    @Test
    void length() {
        System.out.println(list.length());
        list.insert(3);
        System.out.println(list.length());
    }

    @Test
    void get() {
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        list.insert(5);

        System.out.println(list.get(0));
        System.out.println(list.get(3));
        System.out.println(list.get(5));
    }

    @Test
    void remove() {
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        list.insert(5);
        list.update(5, 9);
        list.update(3, 9);

        Iterator<Integer> iterator = list.iterator();
        while (iterator.hasNext()) {
            Integer element = iterator.next();
            System.out.println(element);
        }
    }

    @Test
    void indexOf() {
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(3);

        System.out.println(list.indexOf(3));
        System.out.println(list.indexOf(5));
    }
}
```
:::

## 线性表的链式表示