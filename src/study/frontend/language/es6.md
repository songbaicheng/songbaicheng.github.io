---
star: true
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
ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。当然新版本的出现就是为了解决旧版本的一些问题，不过更新之后感觉 JS 更像 Java 了，哈哈哈，只能说语言之间相互取其精华，去其糟粕。话不多说直接开始。

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
// 基本
let { foo, bar } = { foo: 'aaa', bar: 'bbb' }; // foo = 'aaa'，bar = 'bbb'
 
let { baz : foo } = { baz : 'ddd' }; // foo = 'ddd'

// 可嵌套可忽略
let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, { y }] } = obj; // x = 'hello'，y = 'world'

// 忽略
let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, {  }] } = obj; // x = 'hello'

// 不完全解构
let obj = {p: [{y: 'world'}] };
let {p: [{ y }, x ] } = obj; // x = undefined，y = 'world'

// 剩余运算符
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}; // a = 10，b = 20，rest = {c: 30, d: 40}

// 解构默认值
let {a = 10, b = 5} = {a: 3}; // a = 3; b = 5;
```

### Symbol
一种非字符串的新数据类型 Symbol，表示独一无二的值，即使是相同参数 Symbol() 返回的值不相等，最大的用法是用来定义对象的唯一属性名。

> 现在数据类型有：Number、String、Boolean、Object、null、undefined 和 Symbol。

```js
let sy = Symbol("value");
console.log(sy); // Symbol(KK)
typeof(sy); // "symbol"

let sy1 = Symbol("value"); 
sy === sy1; // false
```
#### 使用场景
##### 作为属性名

```js
let sy = Symbol("key1");
 
// 写法1
let syObject = {};
syObject[sy] = "value";
console.log(syObject);    // {Symbol(key1): "kk"}
 
// 写法2
let syObject = {
  [sy]: "value"
};
console.log(syObject);    // {Symbol(key1): "kk"}
 
// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "value"});
console.log(syObject);   // {Symbol(key1): "kk"}
```
我们使用 Symbol 定义对象唯一属性名的时候，要是用方括号获取其对应的属性值，因为.运算符后面是字符串，所以取到的是字符串 sy 属性，而 Symbol 是非字符串类型，所以获取的并不是 Symbol 的 sy。

```js
// 定义对象
let sy = Symbol("key1");
let syObject = {};
syObject[sy] = "value";
 
syObject[sy];  // "value"
syObject.sy;   // undefined
```

Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问，获取方法如下：

```js
// 定义对象
let syObject = {};
syObject[sy] = "value";
console.log(syObject);
 
for (let i in syObject) {
  console.log(i); // 无输出
}
 
Object.keys(syObject); // []
Object.getOwnPropertySymbols(syObject); // [Symbol(key1)]
Reflect.ownKeys(syObject); // [Symbol(key1)]
```

##### 定义常量
在之前 ES5 定义字符串常量的时候：

```js
const COLOR_RED = "red";
const COLOR_YELLOW = "yellow";
const COLOR_BLUE = "blue";
```

上面的写法其实并不能保证唯一性，而现在有了 Symbol 后，可以写成：

```js
const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");
```

Symbol 还提供了两个方法在我们创建 Symbol 时使用：

- Symbol.for()：首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索。

```js
let yellow = Symbol("Yellow");
let yellow1 = Symbol.for("Yellow");
yellow === yellow1; // false
 
let yellow2 = Symbol.for("Yellow");
yellow1 === yellow2; // true
```

- Symbol.keyFor()：返回一个已登记的 Symbol 类型值的 key ，用来检测该字符串参数作为名称的 Symbol 值是否已被登记。

```js
let yellow1 = Symbol.for("Yellow");
Symbol.keyFor(yellow1); // "Yellow"
```

### Map 与 Set
#### Map
Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

```js
var myMap = new Map();
// 字符串
myMap.set("String", "字符串");
// 对象
var keyObj = {};
myMap.set(keyObj, "obj");
// 函数
var keyFunc = function () {};
myMap.set(keyFunc, "func");
// NAN
myMap.set(NaN, "not a number");
myMap; // Map(4) {'String' => '字符串', {…} => 'obj', ƒ => 'func', NaN => 'not a number'}
```

##### Map 的迭代
```js
// 定义一个 Map
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");


for (var key of myMap.keys()) {
  console.log(key); // 将会显示两个log。 一个是 "0" 另一个是 "1"
}


for (var value of myMap.values()) {
  console.log(value); // 将会显示两个log。 一个是 "zero" 另一个是 "one"
}


for (var [key, value] of myMap) {
  console.log(key + " = " + value); // 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
}


myMap.forEach(function(value, key) {
  console.log(key + " = " + value); // 将会显示两个 logs。 一个是 "0 = zero" 另一个是 "1 = one"
}, myMap)
```
##### Map 小技巧
```js
// Map 与 Array的转换
var kvArray = [["key1", "value1"], ["key2", "value2"]];

var myMap = new Map(kvArray); // Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
var outArray = Array.from(myMap); // 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组

// Map 的克隆
var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
var myMap2 = new Map(myMap1);

// Map 的合并
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']]);
 
var merged = new Map([...first, ...second]); // 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
```

#### Set
Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

```js
let mySet = new Set();
 
mySet.add(1); // Set(1) {1}
mySet.add(5); // Set(2) {1, 5}
mySet.add(5); // Set(2) {1, 5}
mySet.add("some text"); // Set(3) {1, 5, "some text"} 这里体现了类型的多样性
var o = {a: 1, b: 2}; 
mySet.add(o);
mySet.add({a: 1, b: 2}); // Set(5) {1, 5, "some text", {…}, {…}} 
```

##### Set 小技巧
```js
// 去重
var arr = [1, 2, 3, 4, 4];
var mySet = new Set(arr);
[...mySet]; // [1, 2, 3, 4]

// 并集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]); // {1, 2, 3, 4}

// 交集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}

// 差集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x))); // {1}
```