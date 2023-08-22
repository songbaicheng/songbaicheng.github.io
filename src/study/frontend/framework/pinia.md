---
category: 前端
tag: 
  - Pinia
---

# Pinia
## 关于 Pinia 和 Vuex
Pinia 最初是为了探索 Vuex 的下一次迭代会是什么样子，结合了 Vuex 5 核心团队讨论中的许多想法。最终，我们意识到 Pinia 已经实现了我们在 Vuex 5 中想要的大部分内容，并决定实现它 取而代之的是新的建议。

与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的规范，提供了 Composition-API 风格的 API，最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持。


```card
title: Pinia 中文文档
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/frontend/framework/pinia/pinia.svg
link: https://pinia.web3doc.top
color: rgba(173, 216, 590, 0.15)
```

## 快速开始
### 引入 Pinia
```sh
yarn add pinia
# 或者使用 npm
npm install pinia
```
```js
import { createPinia } from 'pinia'

app.use(createPinia())
```

### 定义 Store
```ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
    const name = ref<string>('songbaicheng')
    const age = ref<number>(23)

    return { name, age }
})
```

### 使用 Store
```vue
<script setup lang="ts">
import { useStore } from './stores/main';

const stores = useStore()
</script>

<template>
{{ stores.name }}-{{ stores.age }}
</template>

```