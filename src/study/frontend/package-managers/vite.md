---
category: 前端
tag: 
  - vite
---

# Vite
## 官网

```card
title: Vite 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/frontend/package-managers/vite.svg
link: https://cn.vitejs.dev/
color: rgba(173, 216, 590, 0.15)
```

## 快速开始
### 创建项目
::: code-tabs
@tab NPM
```js
npm create vite@latest
```
@tab Yarn
```js
yarn create vite
```
@tab PNPM
```js
pnpm create vite
```
:::

然后根据步骤创建项目，这里我选择了 Vue 模版创建，然后根据 package.json 之中的命令启动。

![Vite 创建成功](/assets/images/study/frontend/package-managers/vite-vue-begin.png "Vite 创建成功")

### 项目结构
![Vite + vue 目录结构](/assets/images/study/frontend/package-managers/vite-vue-prject.png "Vite + vue 目录结构")

我们可以发现 index.html 在项目最外层而不是在 public 文件夹内。Vite 是由两部分组成的：
- 一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。
- 一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

所以当在开发期间 Vite 是一个服务器，，而 Vite 也是默认将项目的根路径作为服务器文件的根路径，而 index.html 是该 Vite 项目的入口文件，所以从 public 移动到项目根路径下，当然根路径也可以修改，重新指定的时候别忘了同时移动项目根目录下的 配置文件（即 vite.config.js）。

如果你是使用 VSCode 打开项目，这个时候很多文件是会报红提示的，虽然这个并不影响项目启动运行，但是对于强迫症还是很崩溃的。