---
category: 前端
tag: 
  - ES6
---

# ECMAScript 6.0 
## 知识总览

```mindmap
root((ES6))
    1.声明与表达式
        let 与 const
        解构赋值
        Symbol
    2.内置对象
        新增
            Map 与 Set
            Proxy 与 Reflect
        拓展
            字符串
            数值
            对象
            数组
    3.运算符与语句
        函数
        迭代器
        class 类
        模块
    4.异步编程
        Promise 对象
        Generator 函数
        async 函数
```

## 快速开始
ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。当然新版本的出现就是为了解决旧版本的一些问题，不过更新之后感觉 JS 更像 Java 了，哈哈哈，只能说语言之间相互取其精华，去其糟粕。话不多说直接开始

### let 与 const
- let：声明的变量只在 let 命令所在的代码块内有效，不支持变量提升，并且只能声明一次。

```js
// 输出十个 10
for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i);
  })
}

// 输出 0123456789
for (let j = 0; j < 10; j++) {
  setTimeout(function(){
    console.log(j);
  })
}
```

- const：声明一个只读的常量，一旦声明常量的值就不能改变，说明声明的同时就必须初始化。

```js
const PI = "3.1415926";
PI  // 3.1415926
```

### 解构赋值
解构赋值是对赋值运算符的扩展，针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。

#### 数组模型的解构

```js
// 基本
let [a, b, c] = [1, 2, 3]; // a = 1，b = 2，c = 3

// 嵌套 
let [a, [[b], c]] = [1, [[2], 3]]; // a = 1，b = 2，c = 3

// 忽略
let [a, , b] = [1, 2, 3]; // a = 1，c = 3

// 默认值
let [a = 2] = [undefined]; // a = 2

// 不完全解构
let [a = 1, b] = []; // a = 1, b = undefined

// 剩余运算符
let [a, ...b] = [1, 2, 3]; // a = 1, b = [2, 3]

// 字符串，解构的目标若为可遍历对象，皆可进行解构赋值，即实现对象的 Iterator 接口的数据。
let [a, b, c] = 'bye'; // a = 'b', b = 'y', c = 'e'
```

#### 对象模型的解构

```js

```