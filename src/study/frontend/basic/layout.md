---
star: true
category: 前端
tag: 
  - Layout 布局
---

# Layout 布局
## 走进 Layout 布局
早期的布局的即把界面看作分为东南西北中五块个模块，其中每个模块的相对位置又可以分流式布局、自适应布局等，到现在网页项目逐渐趋于模块化后，现在认识到的布局更多的是指嵌套 Header、Sider、Content、Footer 和 Main 组件的界面样式，我们可以在 Element UI 的组件中看到这几个部分的排列演示：

![常见页面布局](/assets/images/study/frontend/basic/layout/layout.png "常见页面布局")

在真正落地布局之前我们还应该需要很多基础知识来支撑 Layout 的实现，提到布局最重要的当然是 CSS 样式，在目前 CSS 有很多样式来增加其规范性和可读性，这里我们结合 Element UI 描述一下 CSS 的 BEM 架构。

## BEM 架构
我们知道 CSS 只有一个作用域，无论你通过什么选择器去操作样式，一旦你声明一个选择器，它就是全局的，一不小心可能就会影响到其他元素，代码的维护性很差，而且 CSS 代码的可读性也不高，虽然目前的前端框架像 Vue 会有 scoped 组件样式的功能，但一些全局样式还是需要有一个规范来整理。


结合目前的 Layout 布局的组件化思想，我们把界面模块化后借助结构将样式进行规整，结合这种思想，由 Yandex 团队提出的一种 CSS 命名方法论 BEM，也就是一种命名规范。它把 CSS 样式分为三层：block、element 和 modifier，分别是块层、元素层和修饰层。其书写原则就是使用 ```__``` 将块名称和元素名称分开，用 ```--``` 分隔元素名称和修饰符，经典写法为 ```block-name__element-name--modifier-name--modifier-value```。

当然很多人觉得 BEM 规范的双下划线和破折号太长或者奇怪，往往大家都是接受其思想而通过短横线来代替，如 Element UI 中的样式命名规范：

![Element 样式](/assets/images/study/frontend/basic/layout/bem.png "Element 样式")

而我们又知道我们在样式中嵌套会自动追加上父选择器的类名，这样就会破坏 BEM 的命名规范，所以基础的 CSS 语法已经不满足我们去实现这种规范，这里我们需要借助一些 CSS 拓展语言来实现，这里我们选择 Sass。

## Sass
作为自称世界上最成熟、最稳定、最强大的专业级CSS扩展语言，Sass 拥有更多的功能和特性，如果想详细了解 Sass 可以点击下面卡片去官网学习。

```card
title: Sass 中文官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/study/frontend/basic/layout/sass.png
link: https://www.sass.hk
color: rgba(173, 216, 590, 0.15)
```

这里我们只介绍 Sass 中 @at-root 的用法，只需要在全局样式中使用 @at-root 就可以使嵌套的格式变成非嵌套，更好的符合 BEM 规范。

![@at-root 用法](/assets/images/study/frontend/basic/layout/sass-@at-root.png "@at-root 用法")