---
category: 算法
tag: 
  - algorithm
  - LeetCode
---

# LeetCode 每日一题
_**想起来就做一题吧！**_
## 2578.最小和分割
### **题目内容**
给你一个正整数 num ，请你将它分割成两个非负整数 num1 和 num2 ，满足：
- num1 和 num2 直接连起来，得到 num 各数位的一个排列。
> 换句话说，num1 和 num2 中所有数字出现的次数之和等于 num 中所有数字出现的次数。
- num1 和 num2 可以包含前导 0 。
请你返回 num1 和 num2 可以得到的和的 最小 值。

#### **注意**
- num 保证没有前导 0 。
- num1 和 num2 中数位顺序可以与 num 中数位顺序不同。
 
#### **示例**
示例 1：
输入：num = 4325
输出：59
解释：我们可以将 4325 分割成 num1 = 24 和 num2 = 35 ，和为 59 ，59 是最小和。

示例 2：
输入：num = 687
输出：75
解释：我们可以将 687 分割成 num1 = 68 和 num2 = 7 ，和为最优值 75 。

### 题解思路
首先我们看到想要让和最小就必须让 num1 和 num2 都做到尽量的小，这个时候我们就应该想到排序了，第一步肯定是先对给出的数字数组进行排序，其次想让 num1 和 num2 都做到尽量小的相同，那我们可以从排序出的数字依次给数字组合。

### 题解代码
```java
public int splitNum(int num) {
    // 排序
    char[] chars = Integer.toString(num).toCharArray();
    Arrays.sort(chars);

    // 依次组合数字
    int num1 = 0, num2 = 0;
    for (int i = 0; i < chars.length; i++) {
        if (i % 2 == 0) {
            num1 = num1 * 10 + chars[i] - '0';
        } else {
            num2 = num2 * 10 + chars[i] - '0';
        }
    }

    return num1 + num2;
}
```