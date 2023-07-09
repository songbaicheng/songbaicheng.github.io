---
star: true
category: 前端
tag: 
  - ES6+
---

# ECMAScript 6+
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

### Reflect 与 Proxy
#### Proxy
可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。

```js
let target = {
    name: 'Tom',
    age: 24
}
let handler = {
    get: function(target, key) {
        console.log('getting '+key);
        return target[key]; // 不是target.key
    },
    set: function(target, key, value) {
        console.log('setting '+key);
        target[key] = value;
    }
}

let proxy = new Proxy(target, handler)
proxy.name     // 实际执行 handler.get
proxy.age = 25 // 实际执行 handler.set
```

#### Reflect
可以用于获取目标对象的行为，它与 Object 类似，但是更易读，为操作对象提供了一种更优雅的方式。它的方法与 Proxy 是对应的。

```js
// 定义对象
let exam = {
    name: "Tom",
    age: 24,
    get info(){
        return this.name + this.age;
    }
}

Reflect.get(exam, 'name'); // "Tom"
```

#### 组合使用
```js
// 定义一个对象
let exam = {
    name: "Tom",
    age: 24
}
// 定义拦截方法
let handler = {
    get: function(target, key){
        console.log("getting " + key);
        return Reflect.get(target, key);
    },
    set: function(target, key, value){
        console.log("setting " + key + " to " + value)
        Reflect.set(target, key, value);
    }
}
let proxy = new Proxy(exam, handler)
proxy.name = "Jerry"
proxy.name // "Jerry"
```

### 函数
这里我们主要介绍一下**箭头函数**，它提供了一种更加简洁的函数书写方式，基本语法是：参数 => 函数体。并且箭头函数体中的 this 对象，是定义函数时的对象，而不是使用函数时的对象。

```js
// 正常
var Person = {
    'age': 18,
    'sayHello': function () {
      setTimeout(function () {
        console.log(this.age);
      });
    }
};
var age = 20;
Person.sayHello();  // 20
 
 // 箭头函数
var Person1 = {
    'age': 18,
    'sayHello': function () {
      setTimeout(()=>{
        console.log(this.age);
      });
    }
};
var age = 20;
Person1.sayHello();  // 18
```

### Class 类
在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。class 的本质是 function，它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。

```js
// 匿名类
let Example = class {
    constructor(a) {
        this.a = a;
    }
}
// 命名类
let Example = class Example {
    constructor(a) {
        this.a = a;
    }
}
```

要注意：类不可以重复声明；类定义不会被提升，这意味着，必须在访问前对类进行定义，否则就会报错；类中方法不需要 function 关键字，方法间也不能加分号；类的实例化需要 new 关键字。

```js
class Example {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log('Example');
    }
    sum() {
        return this.a + this.b;
    }
}
let exam1 = new Example(2, 1);
let exam2 = new Example(3, 1);
```

ES6 的类也有类似封装和继承的概念，不过类中的 getter 与 setter 必须同级出现。通过 extends 实现类的继承，子类 constructor 方法中必须有 super ，且必须出现在 this 之前。

```js
class Father {
    constructor(){}
    // 或者都放在子类中
    get a() {
        return this._a;
    }
    set a(a) {
        this._a = a;
    }
}
class Child extends Father {
    constructor(){
        super();
    }
}
let test1 = new Child();
test1.a = 2;
console.log(test1.a); // 2
```

### 模块
ES6 引入了模块化，分为导出（export） @与导入（import）两个模块，其设计思想是在编译时就能确定模块的依赖关系，以及输入和输出的变量。

```js
// 正常导入导出
// 导出
let myName = "Tom";
export { myName as exportName }
// 导入
import { exportName } from "./test.js";
console.log(exportName);// Tom

// export default
// 导出
var a = "My name is Tom!";
export default a; // export default 仅有一个

// 导入
import b from "./xxx.js"; // 不需要加{}， 使用任意变量接收
```

### Promise 对象
Promise 对象是异步编程的一种解决方案，从它可以获取异步操作的消息。Promise 异步操作有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败），而且只有从 pending 变为 fulfilled 和从 pending 变为 rejected 的状态改变。只要处于 fulfilled 和 rejected ，状态就不会再改变了。

Promise 对象往往搭配 then 方法使用，then 方法接收两个函数作为参数，第一个参数是 Promise 执行成功时的回调，第二个参数是 Promise 执行失败时的回调，两个函数只会有一个被调用。搭配使用的时候要遵守链式编程的规则，保持扁平化，不要嵌套 Promise。

```js
const p = new Promise(function(resolve,reject){
  resolve(1);
}).then(function(value){ // 第一个then // 1
  console.log(value);
  return value * 2;
}).then(function(value){ // 第二个then // 2
  console.log(value);
}).then(function(value){ // 第三个then // undefined
  console.log(value);
  return Promise.resolve('resolve'); 
}).then(function(value){ // 第四个then // resolve
  console.log(value);
  return Promise.reject('reject'); 
})
.then(
  function(value){ 
    // 第五个then // reject:reject !!!这里不会打印,因为上一个then方法返回的是一个reject状态的promise
    console.log('resolve:' + value);
  }, 
  function(err) {
    // 此行会打印, 因第五个than只能接受 resolve状态的promise, 而第四个than返回的是reject状态的promise
    // 所以会被本行 err 捕获
    console.log('reject:' + err);
  }
);
```

### Generator 函数
ES6 新引入了 Generator 函数，可以通过 yield 关键字，把函数的执行流挂起，为改变执行流程提供了可能，从而为异步编程提供解决方案。

Generator 有两个区分于普通函数的部分：在 function 后面，函数名之前有个 * ；函数内部有 yield 表达式。调用 Generator 函数和调用普通函数一样，在函数名后面加上()即可，但是 Generator 函数不会像普通函数一样立即执行，而是返回一个指向内部状态对象的指针，所以要调用遍历器对象Iterator 的 next 方法，指针就会从函数头部或者上一次停下来的地方开始执行。

```js
function* func(){
 console.log("one");
 yield '1';
 console.log("two");
 yield '2'; 
 console.log("three");
 return '3';
}

let f = func();
f.next();
// one
// {value: "1", done: false}
 
f.next();
// two
// {value: "2", done: false}
 
f.next();
// three
// {value: "3", done: true}
 
f.next();
// {value: undefined, done: true}
```

### async 函数
看都没看明白，等我用明白了再说