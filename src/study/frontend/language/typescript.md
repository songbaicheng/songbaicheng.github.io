---
category: 前端
tag: 
  - TypeScript
---

# TypeScript
## 前言

TypeScript 与 JavaScript 有着不同寻常的关系。TypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层：TypeScript 的类型系统,所以很多人都说 TS 是 JS 的超集。更多的细节详见官网，话不多说，我们直接开始准备工作。

> 所有的测试代码都在博客[首页](/README.md)中的 typescript-study-demo 中找到。

```card
title: TypeScript 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/frontend/language/tyepscript/typescript.svg
link: https://www.typescriptlang.org/zh/
color: rgba(173, 216, 590, 0.15)
```

### 安装 TypeScript

```node
npm i typescript -g
```

![安装 TypeScript](/assets/images/study/frontend/language/tyepscript/install-ts.png "安装 TypeScript")

### 编译 TS 文件
练习开始之前，我们要知道浏览器是不认识ts文件的，这里我们有两种方式查看：

1. 比较原始的方式，我们在用ts文件保存之后，先在项目路径下执行```tsc --init```，然后使用```tsc -w```将打开一个 ts 文件编译成浏览器可读的 js 文件的监视器，然后在这个监视器启动的情况下就能把文件中的 ts 文件实时的转化成 js 文件，这样就可以用```node [file.js]```查看自己写的结果了。

2. 个人比较推荐的一种方式，首先先全局安装 ts-node 这个包，然后在项目中再增加 @types/node，现在我们就可以直接使用```ts-node [file.ts]```查看结果了。

```node
npm i ts-node -g

npm i @types/node -D
```

## 基本类型
### 数字类型
双精度 64 位浮点值。它可以用来表示整数和分数。
```typescript
let notANumber: number = NaN; // Nan
let num: number = 123; // 普通数字
let infinityNumber: number = Infinity; // 无穷大
let decimal: number = 6; // 十进制
let hex: number = 0xf00d; // 十六进制
let binary: number = 0b1010; // 二进制
let octal: number = 0o744; // 八进制
```

### 字符类型
一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。单引号（'）可以内嵌表达式，反引号（`）来定义多行文本和内嵌表达式。
```typescript
let str: string = 'songbaicheng'
let str1: string = `i
am
${str}`

console.log(str) // songbaicheng
console.log(str1)
/**
 * i
 * am
 * songbaicheng
 */
```
### 布尔类型
表示逻辑值：true 和 false。
```typescript
let booleand1: boolean = true
let booleand2: boolean = Boolean(1)

console.log(booleand1) // true
console.log(booleand2) // true
```

### 数组类型
```typescript
// 在元素类型后面加上[]
let arr: number[] = [1, 2];
// 或者使用数组泛型
let arr1: Array<number> = [1, 2];

console.log(arr) // [ 1, 2 ]
console.log(arr1) // [ 1, 2 ]
```

### 元组
元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
```typescript
let x: [string, number];
x = ['songbaicheng', 1];

console.log(x[0]) // songbaicheng
console.log(x[1]) // 1
```

### 枚举
枚举类型用于定义数值集合。
```typescript
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;

console.log(Color.Blue) // 2
console.log(c) // 2
console.log(Color[Color.Blue]) // Blue
```

### void
用于标识方法返回值的类型，表示该方法没有返回值。
```typescript
function voidFn(): void {
    console.log('test void')
}
```

### null
表示对象值缺失。
```typescript
let n: null = null;
```

### undefined
用于初始化变量为一个未定义的值。
```typescript
let u: undefined = undefined;
```

### never
never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。

### any
不明确的变量使用的一种数据类型。
```typescript
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;

console.log(arrayList) // [ 1, 100, 'fine' ]
```