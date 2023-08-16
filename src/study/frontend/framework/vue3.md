---
star: true
category: 前端
tag: 
  - Vue3
---

# Vue3
## Vue3 和 Vue 2
问过一些从事前端的朋友，他们大部分都还在用 Vue2，倒不是因为不想用 3，主要是公司的框架都是2，如果重新改造得不偿失，但是他们自己都是已经在使用 3 开始做项目了。学习 Vue3 之前还是建议有一些 Vue2 的基础，官网给出了 3 中我们值得关注的一些新特性：

- 组合式 API
- Teleport 组件
- Fragments 片段
- Emits 组件选项
- 来自 @vue/runtime-core 的 createRenderer API 用来创建自定义渲染函数
- 单文件组件中的状态驱动的 CSS 变量 
- 新增全局规则和针对插槽内容的规则
- Suspense

新特性还是非常多的，其中最直观也是最重要的就是 组合式API 的出现，它取代了 Vue2 的 选项式API 的风格，在灵活性和逻辑的复用性上有了很大的提升，官网也是推荐开发使用组合式 API + 单文件组件（SFC）的方式，所以我们也遵循此道来进行 Vue3 的学习。

> 所有的测试代码都在博客[首页](/README.md)中的 vue3-study-demo 中找到。

::: card
```card
title: Vue3 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/frontend/framework/vue3/vue.svg
link: https://cn.vuejs.org
color: rgba(173, 216, 590, 0.15)
```
```card
title: Vue2 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/frontend/framework/vue3/vue.svg
link: https://v2.cn.vuejs.org
color: rgba(173, 216, 590, 0.15)
```
:::

## 快速开始
确保在安装了最新版本的 Node.js，并且你的当前工作目录正是打算创建项目的目录下执行下面命令。

```js
npm init vue@latest
```

根据安装指引可能根据个人不同的选项初始化出目录结构不太相同的项目，但是我们只关注 Vue 的文件，我们只关注根目录中 src 里的文件。

![初始化目录](/assets/images/study/frontend/framework/vue3/init-vue3-project.png "初始化目录" =300x500)

我们把将目光聚集在 App.vue 这个文件上，作为 Vue 的全局入口文件，我们可以先把其他扰乱视线的东西删除，把它作为一个干净的单文件组件来写第一个 demo 案例。

``` vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

这样我们就得到了一个最简单的自增按钮的界面，至于其中的setup、ref等“新面孔”在下面的学习里再缓缓道来。

## 三种书写风格
Vue3 支持三种书写风格，一种是延续 Vue2 的 Option API，这种可以让有 Vue2 基础的人无缝衔接 Vue3 的开发；第二种是使用 Vue3 提供的 setup 函数来实现，setup 函数中的代码会在每次组件实例被创建的时候执行，并且能直接在模版中直接使用；第三种方式则是 Vue3 提供的 setup 函数的语法糖，在 setup() 函数中手动暴露大量的状态和方法非常繁琐,我们可以通过使用单文件组件搭配 ```<script setup>``` 来大幅度地简化代码，这也是比较推荐和以后常用的方式。

### Option API
```vue
<template>
    {{ name }}
</template>
    
<script>
export default {
    data() {
        return {
            name: 'songbaicheng'
        }
    }
}
</script>
```

### setup()
```vue
<template>
    {{ name }}
</template>
    
<script>
export default {
    setup() {
        const name = 'songbaicheng'

        return {
            name
        }
    }
}
</script>
```

###  ```<script setup>```
  ```vue
<template>
    {{ name }}
</template>
    
<script setup>
const name = 'songbaicheng'
</script>
```

## 指令
#### v-text
```vue
<script setup>
let context = 'my name is songbaicheng'
</script>

<template>
    <div v-text="context" />
</template>
```

#### v-html
```vue
<script setup>
let context = '<h1 style="font-weight: bold">my name is songbaicheng</h1>'
</script>

<template>
    <div v-html="context" />
</template>
```

#### v-if
v-else-if 和 v-else 的上一个兄弟元素必须有 v-if 或 v-else-if，而且 v-else 无需传入表达式。如果是 false Vue 会把你的标签注释掉达到隐藏的效果。
```vue
<script setup lang="ts">
let typeFlag: string = 'A'
</script>

<template>
    <div v-if="typeFlag === 'A'">
        A
    </div>
    <div v-else-if="typeFlag === 'B'">
        B
    </div>
    <div v-else-if="typeFlag === 'C'">
        C
    </div>
    <div v-else>
        Not A/B/C
    </div>
</template>
```

#### v-show
相比于 v-if，如果是 false Vue 会把标签增加```display: none;```样式，效率更高。
```vue
<script setup lang="ts">
let trueFlag: boolean = true
let falseFlag: boolean = false
</script>

<template>
    <span v-show="trueFlag">
        事了拂衣去
    </span>
    <span v-show="falseFlag">
        深藏功与名
    </span>
</template>
```

#### v-on
一般平时我都是使用 @ 符号代替 v-on 来简写。v-on也提供很多方法，比如：
- once： 只点击一次
- stop： 阻止事件冒泡
```vue
<script setup lang="ts">
let sout = () => {
    console.log('我是父级！')
}
let click = () => {
    alert('你好！')
}
</script>

<template>
    <div @:click="sout">
        <button @:click.stop="click">欢迎光临</button>
    </div>
</template>
```

#### v-bind
```vue
<script setup lang="ts">
let style = { color: 'red' }
</script>

<template>
<div :style="style">
    bind绑定样式
</div>
</template>
```

#### v-model
```vue
<script setup lang="ts">
import { ref } from 'vue'

let name = ref('songbaicheng')
</script>

<template>
<input v-model="name" type="text" />
<span>{{ name }}</span>
</template>
```

#### v-for
```vue
<script setup lang="ts">
let arr: string[] = ['one', 'two', 'three', 'four']
</script>

<template>
<div :key="index" v-for="(e, index) in arr">
    {{ index }}->{{ e }}
</div>
</template>
```

## 虚拟 Dom 和 Dom diff 算法
Vue.js 使用虚拟 DOM 实现了高效的页面更新。当数据发生改变时，Vue.js 会先比对新旧虚拟 DOM 树的差异，然后只会更新实际变化的部分。虚拟 Dom 当然对标的是真实 Dom，它是一个能代表 Dom 树的对象，通常含有标签名、标签上的属性、事件监听和子元素等其他属性。虚拟 Dom 的优点是可以减少 Dom 操作，所以是在一些情况下比操作真实 Dom 快的，而且因为虚拟 Dom 本质上是一个JS对象，所以虚拟 Dom 也是支持跨平台。

Dom diff 是虚拟 Dom 的对比算法，我们大概说一下其比较逻辑，首先diff算法有三种比较：tree diff、component diff 和 element diff。Tree diff 要做的就是新旧两棵 Dom 树比较找出不同的节点，而其中的节点比较就是交给其他两个 diff，如果节点是组件则进行 component diff，如果节点是标签则进行 element diff。component diff首先看组件类型，类型不同直接替换旧类型，类型相同则对比替换属性，之后再递归走组件内的节点做 tree diff。而 element diff 先比较标签名，如果是不同直接替换旧标签，如果相同则更新属性，之后也是再递归走子节点的 tree diff。这样比较下来很显然可以减少操作 Dom 的次数。

不过在这些比较过程中，:key 有什么作用呢？如果我们不声明 key，我们将 Dom 看成是一棵虚拟的树，如果我们删除了一个左子节点，我们以为的是这棵树的右子节点会变成左子节点，但是计算机会认为是我们修改了左子节点，删除了右子节点，所以我们为了让计算机知道我们删除的究竟是哪个节点，我们要给每个节点绑定唯一的key标记，这样就避免了误判的情况发生。

## 响应式
在组合式 API 中，推荐使用 ref() 函数来声明响应式状态，在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。但是我们可以拦截属性的 get 和 set 操作，从概念上讲，.value 属性给予了 Vue 一个机会来检测 ref 何时被访问或修改，在其内部，Vue 在它的 getter 中执行追踪，在它的 setter 中执行触发。

当你在模板中使用了一个 ref，然后改变了这个 ref 的值时，Vue 会自动检测到这个变化，并且相应地更新 DOM。这是通过一个基于依赖追踪的响应式系统实现的。当一个组件首次渲染时，Vue 会追踪在渲染过程中使用的每一个 ref。然后，当一个 ref 被修改时，它会触发追踪它的组件的重新渲染。

另一个 ref 的好处是，与普通变量不同，你可以将 ref 传递给函数，同时保留对最新值和响应式连接的访问。当将复杂的逻辑重构为可重用的代码时，这将非常有用。

值得注意的是，和 Vue2 相比的双向绑定不同的是，ref 响应式的对象会多出一层 .value 来调用其属性，并不可以直接获取属性，而 reactive 响应式并不需要 .value 去获取属性和元素。

### ref
常见的有三种 ref：ref、shallowRef、triggerRef。ref 作为深层响应式，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，改变嵌套对象或数组时，变化也会被检测到；与之相对的就是 shallowRef 浅层响应式，它只能检测到 .value 下的变化，如果在深层的改变则不会检测。要注意 ref 和 shallowRef 不能同时使用，因为它俩的直接区别就是 ref 的底层会调用 triggerRef 强制更新收集依赖，这样会导致一些 shallowRef 本不该响应变成响应的。

::: normal-demo ref 三种实现
```vue
<script setup lang="ts">
import { ref, shallowRef, triggerRef } from 'vue'

// 非响应式对象
let people = { name: 'songbaicheng' }
let change = () => {
    people.name = 'baicheng'
    console.log(people.name)
}

// 深层响应式对象，可以循环影响到最底层
let animal = ref({ name: 'bird' })
let update = () => {
    animal.value.name = 'cat'
    console.log(animal.value.name)
}

// 浅层响应式对象，只能影响到 .value
let animal1 = shallowRef({ name: 'dog' })
let update1 = () => {
    animal1.value = {
        name: 'fish'
    }
    console.log(animal1.value.name)
}
</script>

<template>
非响应式：{{ people.name }} <button @click="change">点我更换</button>
<br>
深层响应式：{{ animal.name }} <button @click="update">点我更换</button>
<br>
浅层响应式：{{ animal1.name }} <button @click="update1">点我更换</button>
</template>
```
:::

### reactive
与 ref 不同的是，ref 可以接受所有类型的参数，而 reactive 被泛型约束只能接收引用类型的参数，如 Object、Array、Map、Set等，并且 reavtive 的底层是用代理去拦截对响应式对象所有属性的访问和修改，以便进行依赖追踪和触发更新，所以不能直接对对象进行赋值，否则会破坏响应式对象。

::: normal-demo reactive 用法
```vue
<script setup lang="ts">
import { reactive } from 'vue'

let form = reactive({
    name: 'songbaicheng',
    age: 23
})

let submit = () => {
    console.log(form)
}

</script>

<template>
<form>
    <input type="text" v-model="form.name">
    <br>
    <input type="text" v-model="form.age">
    <br>
    <button @click.prevent="submit">提交</button>
</form>
</template>
```
:::

### toRef
::: normal-demo toRef 用法
```vue
<script setup lang="ts">
import { ref, toRef, toRefs } from 'vue'

let people = ref({
    name: 'songbaicheng',
    age: 23,
    tel: 123456
})

let peopleTel = toRef(people) // 只对响应式对象做修改

let change = () => {
    peopleTel.value.tel = 8888
    console.log(peopleTel)
}
</script>

<template>
{{ people }}

<button @click="change">改变</button>
</template>
```
:::

## 计算属性
有函数式写法和选项式写法两种。如果只是仅仅获取结果可以使用函数式的写法，computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref，计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value；如果你需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 的选项式写法来创建。
::: normal-demo 计算属性的用法
```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

let firstName = ref('')
let lastName = ref('')

// 全名计算属性
let name = computed(() => {
    return firstName.value + '-' + lastName.value
})
</script>

<template>
    <div>
        <div>
            <span class="font-style">姓：</span>
            <input v-model="firstName" type="text">
        </div>
        <div>
            <span class="font-style">名：</span>
            <input v-model="lastName" type="text">
        </div>
        <span class="font-style">全名：</span>
        <span class="front-style bold-font-style">{{ name }}</span>
    </div>
</template>

<style>
.font-style {
    font-style: italic;
}

.bold-font-style {
    font-weight: bold;
}
</style>
```
```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

let firstName = ref('')
let lastName = ref('')

// 全名计算属性
let name = computed<string>({

    get() {
        return firstName.value + '-' + lastName.value
    },
    set(name: string) {
        [firstName.value, lastName.value] = name.split('-')
    }
})

let changeName = () => {
    name.value = 'song-baicheng'
}
</script>

<template>
    <div>
        <div>
            <span class="font-style">姓：</span>
            <input v-model="firstName" type="text">
        </div>
        <div>
            <span class="font-style">名：</span>
            <input v-model="lastName" type="text">
        </div>
        <span class="font-style">全名：</span>
        <span class="front-style bold-font-style">{{ name }}</span>
    </div>
    <div>
        <button @click="changeName">更换姓名</button>
    </div>
</template>

<style>
.font-style {
    font-style: italic;
}

.bold-font-style {
    font-weight: bold;
}
</style>
```
:::

## 监听器
计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些异步操作的结果去修改另一处的状态，在组合式 API 中，我们可以使用 watch 函数在每次响应式状态发生变化时触发回调函数。

当我们使用 ```immediate: true``` 时可以用 watchEffect代替，它自动跟踪回调的响应式依赖，对于有多个依赖项的侦听器来说，使用 watchEffect() 可以消除手动维护依赖列表的负担。此外，如果你需要侦听一个嵌套数据结构中的几个属性，watchEffect() 可能会比深度侦听器更有效，因为它将只跟踪回调中被使用到的属性，而不是递归地跟踪所有的属性。

::: normal-demo 监听器的用法
```vue
<script setup lang="ts">
import { ref, watch } from 'vue'

let message = ref<string>('songbaicheng')
let obj = ref<Object>({
    name: 'songbaicheng',
    age: 23
})

watch([message, obj], (newValue, oldValue) => {
    console.log('newValue:', newValue)
    console.log('oldValue:', oldValue)
}, {
    deep: true, // 是否开始深度监听
    immediate: true, // 立即执行一次
    flush: 'pre' // pre：组件更新前执行，sync：同步执行，post：组件更新后执行
})
</script>

<template>
    <input type='text' v-model="message">
    <br>
    <input type='text' v-model="obj.age">
</template>
```
```vue
<script setup lang="ts">
import { ref, watchEffect } from 'vue'

let message = ref<string>('new songbaicheng')

watchEffect(() => {
    console.log(message.value)
})
</script>

<template>
    <input type='text' v-model="message">
</template>
```
:::

## 生命周期 
每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。

| 生命周期钩子 | 执行时间 |
| :---: | --- |
| onMounted | 在组件挂载完成后执行 |
| onUpdated | 在组件因为响应式状态变更而更新其 DOM 树之后调用 |
| onUnmounted | 在组件实例被卸载之后调用 |
| onBeforeMount | 在组件被挂载之前被调用 |
| onBeforeUpdate | 在组件即将因为响应式状态变更而更新其 DOM 树之前调用 |
| onBeforeUnmount | 在组件实例被卸载之前调用 |
| onErrorCaptured | 在捕获了后代组件传递的错误时调用 |
| onRenderTracked | 当组件渲染过程中追踪到响应式依赖时调用 |
| onRenderTriggered | 当响应式依赖的变更触发了组件渲染时调用 |
| onRenderTriggered | 当组件被插入到 DOM 中时调用。 |
| onActivated | 若组件实例是缓存树的一部分，当组件被插入到 DOM 中时调用 |
| onDeactivated | 若组件实例是缓存树的一部分，当组件从 DOM 中被移除时调用 |
| onServerPrefetch | 若组件实例是缓存树的一部分，当组件从 DOM 中被移除时调用 |

## 父子模块传值
父子文件交互主要有下几个函数：defineProps()、defineEmits()、defineExpose()、defineOptions()和defineSlots()

::: normal-demo 父子组件交互
```vue
<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'

let name = 'sbc'

const getName = (name: string) => {
    console.log(name)
}

const childElement = ref<InstanceType<typeof child>>()
console.log(childElement.value.name)
</script>

<template>
    parent
    <br>
    <Child ref="child" @on-click="getName" :title="name" />
</template>
```
```vue
<template>
    child
    {{ title }}
    {{ arr }}
</template>

<script setup lang="ts">
// 接收父组件传值
withDefaults(defineProps<{
    title: string,
    arr: number[]
}>(), { // 默认值
    arr: () => ['songbaicheng']
})

// 向父组件传值
const emit = defineEmits<{
    (e:"on-click", name:string):void
}>()

const send = () => {
    emit('on-click', 'songbaicheng')
}

// 向父组件暴露值
defineExpose({
    value: 'songbaicheng'
})
</script>
```
:::

## 动态组件
::: normal-demo Vue3 动态组件
```vue
<template>
  <el-config-provider namespace="ep">
    <span>动态组件</span>
    <div style="display: flex">
      <div @click="switchCom(item, index)" :class="[active == index ? 'active' : '']" class="tabs"
        v-for="(item, index) in components">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <component :is="comId"></component>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, shallowRef, markRaw } from 'vue'
// 测试动态组件
import A from '~/components/A.vue'
import B from '~/components/B.vue'
import C from '~/components/C.vue'


const components = ref([
  {
    name: 'A组件',
    com: markRaw(A)
  },
  {
    name: 'B组件',
    com: markRaw(B)
  },
  {
    name: 'C组件',
    com: markRaw(C)
  }
])

const comId = shallowRef(A) // 只代理最外层元素
const active = ref(0)

// 切换展示组件
const switchCom = (item, index) => {
  comId.value = item.com
  active.value = index
}
</script>

<style scoped>
span {
  font-weight: bold;
  font-style: italic;
}

.tabs {
  border: 1px solid;
  padding: 5px 10px;
  margin: 5px;
  /* 悬浮小手 */
  cursor: pointer;
}

.active {
  background-color: burlywood;
}
</style>
```
:::