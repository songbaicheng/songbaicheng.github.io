---
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

![第一个 Vue3 demo](/assets/images/study/frontend/framework/vue3/vue3-first-demo.png "第一个 Vue3 demo")

根据项目中 package.json 的 scripts 的命令启动项目，就可以在网页得到一个点击就会增加的按钮了。