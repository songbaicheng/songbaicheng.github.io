---
star: true
category: 数据结构
tag: 
  - tree
---

# 树和二叉树
> 所有的测试代码都在博客[首页](/README.md)中的 java-study-demo 中找到。

```mindmap
root(树形结构)
    二叉树
        概念
            定义
            存储结构
        操作
            三种遍历
            线索二叉树
        应用
            并查集
            哈夫曼树
    树和森林
        概念
            定义
            存储结构
        操作
            与二叉树的转换
            遍历
        应用
            并查集
```

## 树的基本概念
树是 n(n >= 0) 个结点的有限集。当 n = 0 的时候，称为**空树**，在任何一个非空树中应该满足：
1. 有且只有一个特定的称为根的结点。
2. 当 n > 1 时，其余结点可以分为 m(m > 0) 个互不相交的有限集 T1,T2,T3,……,Tm，其中每个结合本身又是一棵树，并成为根的子树。

显然，树的定义是递归的，即在树的定义中又用到了其自身，树作为一种逻辑结构，同时也是一种分层结构，具有两个特点
1. 树的根结点没有前驱，根结点外的所有结点有且只有一个前驱。
2. 树中的所有所有结点都可以有零个或多个前驱。

因为树中的某个节点（除根结点外）最多只和上一层的一个结点有直接关系，根结点没有直接上层结点，所有n个结点的树有 n - 1 条边，而且每个结点与其下一层的零个或多个结点（即子女结点）都有直接关系。

### 基本术语
![树的树形表示](/assets/images/study/computer-basis/ads/data-structure/tree/tree.jpg "树的树形表示")

- 首先观察结点K，根A到K的唯一路径到的任意点，称为结点K的祖先，即A、B、E都是K的祖先。而E是路径上最接近K的祖先，所以称E为K的双亲，而K是E的孩子。
- 有相同双亲结点称为兄弟，如K和L都有共同的双亲E，即K和L为兄弟结点。
- 树中一个结点的孩子总数称为该结点的度，树中结点最大的度称为树的度，如结点B的度为2，D的度为3，树的度为3.
- 度大于0的结点称为分支结点（又称非终端结点），度为0的结点为叶子结点（又称终端结点）。
- 结点的层次从根结点开始，根结点为第一层，它的子结点为第二层，以此类推。双亲在同一层的结点互为堂兄弟，如G和E、F、H、I、J互为堂兄弟。
- 结点的深度是从根结点开始自顶向下逐层累加，结点的高度从叶子结点开始自底向上逐层累加。树的高度或深度是树中结点的最大深度。
- 有序树和无序树。树中的结点从左到右是有次序的，不能互换被称为有序树。否则称为无序树。
- 路径和路径长度。树中的两个结点之间的路径是由这两个结点之间所经过的的结点序列构成的，而路径长度是路径上所经过的边的个数。
- 树的分支是有向的，从双亲结点指向子结点。
- 森林。森林是m（m>=0）颗互不相交的树的集合。森里只要把所有树的根结点去除就成了森林，相反，只要给m颗树独立的树添加一个根结点，森林就成了树。

### 基本性质
1. 树中的结点数等于所有结点的度之和加一。
2. 度为m的树第i层上至多有m^i-1^个结点（i>=1）。
3. 高度为h的m叉树至多有 (m^h^-1)/(m-1)个结点。
4. 具有n个结点的m叉树的最小高度为⌈log~m~(n(m-1)+1)⌉。

## 二叉树
二叉树是一种特殊的树形结构，其特点就是每个结点至多只有两颗子树，即不存在度大于2的结点，而且二叉树是有序树，左右结点次序不能随意颠倒。二叉树的递归定义是或为空二叉树，或为一个根结点和两个互不相交的被称为根的左子树和右子树组成，左子树和右子树分别又是一颗二叉树。

二叉树是特殊的度为二的有序树，度为2的有序树至少有三个结点，而二叉树可以为空。度为二的有序树左右次序是对于另一个孩子而言的，若某个节点只有一个孩子，则这个孩子就无需区分其左右次序，而二叉树无论孩子个数是否为2，均需要确定其左右次序。

### 几种特殊的二叉树

![完全二叉树和满二叉树](/assets/images/study/computer-basis/ads/data-structure/tree/full-tree-and-compete-tree.jpg "完全二叉树和满二叉树")

- 完全二叉树：高度为h，有n个结点的二叉树，当且仅当每个结点都与高度为h的满二叉树中编号为1～n的结点一一对应称为完全二叉树。
    - 若 i <= ⌊n/2⌋，则i为分支结点，否则为叶子结点。
    - 叶子结点只可能在层数最大的两层出现，并且最大层出现的叶子结点应该依次排列在该层的最左边的位置。
    - 若有度为1的结点，则只可能有一个，且该结点，且该结点只有左孩子。
    - 按照层序编号后，一旦出现结点为叶子结点或者只有左孩子，则编号大于i的结点均为叶子结点。
    - 若n为奇数，则每个分支结点都有左右孩子，若n为偶数，则编号n/2的结点只有左孩子。 
- 满二叉树：一个高度为h，且含有2^h^-1个结点的二叉树称为满二叉树，即每层都是最多的结点。按照层序排序后，对于编号为i的结点，若有双亲则双亲为⌊i/2⌋，若有左孩子，则左孩子为 2i，若有右孩子，有孩子为 2i+1。
- 二叉排序树：左子树上所有的结点的关键字均小于更结点的关键字；右子树上的所有结点句大于根结点的关键字，左右子树分别又各是一颗二叉排序树。
- 平衡二叉树：树上任意一个结点的左子树和右子树的深度之差不超过1。

### 二叉树的性质
1. 非空二叉树的叶子结点数等于度为2的结点树加一，即 n~0~=n~2~ + 1。
2. 非空二叉树上第k层上至多有 2~k-1~ 个结点。
3. 高度为h的二叉树至多有 2^k^-1 个结点，h >= 1.
4. 结点所在的深度为 ⌊log~2~n⌋ + 1。
5. 具有n个（n>0）结点的完全二叉树的高度为 ⌈log~2~(n + 1)⌉ 或 ⌊log~2~n⌋ + 1。

### 二叉树的存储
#### 顺序存储
二叉树的顺序存储是指用一组地址连续的存储单元依次自上而下、自左至右完全存储二叉树的所有结点元素。根据二叉树的性质，**完全二叉树**和**满二叉树**采用顺序结构比较合适，树中结点的序号可以唯一的反应结点之间的逻辑结构，这样既能最大可能的节省存储空间，又能利用数组元素的下标确定结点的位置以及结点的关系。如果是一般的二叉树为了让数组下标反应二叉树中结点之间的逻辑关系，只能添加一些并不存在空结点，让其每个结点与完全二叉树的结点相对照，如果最坏的情况高度为h且之后h个结点的单枝树却要占据 2^h^ - 1 个单元。

需要注意的是，顺序存储需要从数组下标1开始存储树中的结点，否则一些性质则无法满足。

#### 链式存储
由于顺序存储的空间利用率较低，因此二叉树一般都是采用链式存储，在二叉树中结点通常包含数据域和指针域，二叉链表就必须包含数据域 data、左指针域 lchild 和右指针域 rchild。

```java
import lombok.Getter;
import lombok.Setter;

/**
 * @description 二叉树的链式存储
 */
@Getter
@Setter
public class BiTree<E> {

    /**
     * 数据域
     */
    E data;
    /**
     * 左孩子指针
     */
    BiTree<E> leftChild;
    /**
     * 右孩子指针
     */
    BiTree<E> rightChild;

    /**
     * 初始化方法
     * @param data 数据域
     */
    public BiTree(E data) {
        this.data = data;
    }

}
```

### 二叉树的遍历
二叉树中的遍历是指按某条搜索路径访问树中的每个结点，使得每个结点均被访问一次，而且仅被访问一次，而且仅被访问一次。由于二叉树是一种非线性结构，每个结点都可以能有两个子树，因而需要寻找一种规律以便使二叉树的结点能排列在一个线性队列上，方便遍历。我们根据二叉树的定义，遍历一颗二叉树要决定对根和左右结点的访问顺序，常见的遍历次序是先序、中序和后序三种，其中的序是指根结点在何时被访问。

![二叉树的三种遍历顺序](/assets/images/study/computer-basis/ads/data-structure/tree/bitree-order.jpg "二叉树的三种遍历顺序")

::: normal-demo Java 实现二叉树三种遍历
```java
package com.sbc.structure.tree;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

/**
 * @author songbaicheng
 * @description 二叉树遍历类测试
 * @date 2023/8/15 20:14
 */
class BiTreeTest {

    BiTree<Integer> root = new BiTree<>(1);

    @BeforeEach
    void setUp() {

        // 初始化二叉树
        final BiTree<Integer> l7 = new BiTree<>(7);
        final BiTree<Integer> r3 = new BiTree<>(3);
        final BiTree<Integer> l4 = new BiTree<>(4);
        final BiTree<Integer> l9 = new BiTree<>(9);
        final BiTree<Integer> r6 = new BiTree<>(6);
        final BiTree<Integer> l8 = new BiTree<>(8);

        l4.setRightChild(l8);
        l7.setLeftChild(l4);
        l7.setRightChild(l9);
        r3.setLeftChild(r6);
        root.setLeftChild(l7);
        root.setRightChild(r3);
    }

    /**
     * 前序遍历：
     * 1,7,4,8,9,3,6,
     * 中序遍历：
     * 4,8,7,9,1,6,3,
     * 后序遍历
     * 8,4,9,7,6,3,1,
     */
    @Test
    void test() {
        System.out.println("前序遍历：");
        preOrder(root);
        System.out.println("\n中序遍历：");
        inOrder(root);
        System.out.println("\n后序遍历");
        postOrder(root);
        System.out.println();
    }

    /**
     * 前序遍历
     * @param tree 遍历二叉树
     */
    private void preOrder(BiTree<Integer> tree) {
        if (tree != null) {
            System.out.print(tree.data + ",");
            preOrder(tree.leftChild);
            preOrder(tree.rightChild);
        }
    }

    /**
     * 中序遍历
     * @param tree 遍历二叉树
     */
    private void inOrder(BiTree<Integer> tree) {
        if (tree != null) {
            inOrder(tree.leftChild);
            System.out.print(tree.data + ",");
            inOrder(tree.rightChild);
        }
    }

    /**
     * 后序遍历
     * @param tree 遍历二叉树
     */
    private void postOrder(BiTree<Integer> tree) {
        if (tree != null) {
            postOrder(tree.leftChild);
            postOrder(tree.rightChild);
            System.out.print(tree.data + ",");
        }
    }

}
```
:::

递归的巧妙确实让我们省略了很多代码，可是在我们享受这种便利的时候，同样也徒增了很多次计算的消耗，每次扫描叶子结点的时候总会将其父母结点重新计算一次，在一些特殊情况中非常浪费性能，尤其是递归中经典的**斐波那契数列**中，如果追求更高的时间复杂度，我们会采取非递归的方式新增一个标记记录每一次计算出的值来减少多次计算的消耗，所以这里也借助栈来实现二叉树的中序遍历：

::: normal-demo 非递归实现中序遍历
```java
```
:::