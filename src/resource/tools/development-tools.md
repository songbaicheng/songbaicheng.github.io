---
category: 资源分享
tag: 
  - tools
---

# 开发工具
工欲善其事，必先利其器。其实好用的工具从来不用推荐，工具的下载量就证明了它可以胜任好自己的本职工作，下面我整理一下我自己在用的不错的开发工具给大家参考一下。

## IntelliJ IDEA

吃饭的家伙，一提到 IDEA 我就不得不说一个事情，不是吧不是吧，这都2023年了还有人在用 \b\w{7}\b 做开发吧（狗头保命）。使用正版需要订购 JetBrains 的许可证，因为是订阅型的，意味着你需要按照订阅期限支付费用，今年居然比去年更贵了！工具要想用的好，配置插件少不了，我把我认为平时好用的和最常用的配置贴出来，供交流讨论啦。

```card
title: IntelliJ IDEA 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/IntelliJ IDEA.svg
link: https://www.jetbrains.com/idea/
color: rgba(173, 216, 590, 0.15)
```
### 配置推荐
配置的话就是见仁见智了，因为每个人有每个人的习惯，虽然很多时候有些设置确实可以提高效率，但是有些人习惯了之前自己的一些方式就觉得还是保持原状效率更高，所以这里我整理一下自己常用的一些可以提高效率的设置供大家参考。

这里我就按照 preferences 界面从上到下罗列了，首先字体大小什么的这就是按照自己的显示器或者窗口习惯自己决定，但是字体一定是推荐 JetBrains Mono，这是 JetBrains 公司设计的更适合开发人员使用的字体，在阅读体验和符号区分度上下了很大功夫，这套字体在从 v2019.3 开始这套字体就随 JetBrains IDE 一起提供了，如果用起来的一定要用起来。

1. 第一个推荐的配置是自动导入包的配置，虽然平时也有快捷键清理多余的包，但是哪有自动清理来的方便快捷，打开这个设置需要勾选下面两个勾选框。

![auto import](/assets/images/resource/tools/development-tools/auto-import.png "auto import" =650x500)

2. 其次就是方法间增加分割线，因为发现很多人方法间不换行导致可读性很差，这个时候分割线就显得尤为重要了。

![method split line](/assets/images/resource/tools/development-tools/method-split-line.png "method split line" =650x500)

3. 有时候因为换显示器或者一些奇怪分辨率的情况下总是感觉整个字体不大不小看着闹挺，到底是用 12、14 还是 16 直接强迫症犯了，这个时候打开下面这个配置，直接用滑轮搭配 command/ctrl 直接换到你喜欢的大小。

![鼠标滑轮控制字体大小](/assets/images/resource/tools/development-tools/font-size-mouse.png "鼠标滑轮控制字体大小" =650x500)

4. 还有一个优化展示的小设置，很多情况下我们会同时打开很多 tab 标签而导致我们我们一行标签栏并不能完全展示，这就导致一些标签就会隐藏掉，在我们查找的时候非常麻烦，如果我们配置下面这个设置后就可以多行展示标签方便我们查看了。

![多行标签展示](/assets/images/resource/tools/development-tools/mult-tab.png "多行标签展示" =650x500)

### 插件推荐
#### 主题推荐
相信大部分的程序员还是喜欢黑色的主题吧，虽然很大一部分原因还是护眼，但是黑色真的很高级炫酷啊。被人熟知的就是下面这个经典的 One Dark 主题了。

![One Dark theme](/assets/images/resource/tools/development-tools/one-dark-theme.png "One Dark theme" =650x500)

不过最近我的新宠还是 Dracula，深色背景下有紫色的高级感。

![Dracula Theme](/assets/images/resource/tools/development-tools/dracula-theme.png "Dracula Theme" =650x500)

值得一提的是这些主题在主流 IDE 都是支持的，如果喜欢就都去试试吧。

#### Rainbow Brackets 彩虹括号
一开始觉得花里胡哨没什么用，但是当你括号不能对齐的时候就是真香了。

![Rainbow Brackets](/assets/images/resource/tools/development-tools/rainbow-brackets.png "Rainbow Brackets" =650x500)

#### Alibaba Java Coding Guidelines 阿里巴巴代码规范
idea 自带的代码提示可以帮你优化一些简单代码，让代码看上去可以变得更优雅，可是代码规范还是主观性太强，虽然相信大部分 Java 开发都看过 _《阿里巴巴Java开发手册》_，但是真正能在写代码的时候约束自己的还是的靠插件。

![Alibaba Java Coding Guidelines](/assets/images/resource/tools/development-tools/alibaba-java-coding-guidelines.png "Alibaba Java Coding Guidelines" =650x500)

#### CodeGeeX 智能编程助手
清华大学与智谱 AI 联合开发的免费代码自动生成工具，周围的朋友都已经在用 GitHub Copilot 了，鉴于收费并且访问问题自己就果断使用 CodeGeex 这款插件了，平常使用中提示功能没有太大问题，一些自带的小功能比较适合国人的开发习惯，也是十分推荐。

![CodeGeex](/assets/images/resource/tools/development-tools/codeGeeX.png "CodeGeeX" =650x500)

## Visual Studio Code

地表最强 IDE ，具目前的数据来看，全世界受访的程序员中有 81% 的人都在使用，当然我现在就是在用它码字，它依托丰富的插件库可以支持你在开发中遇到的大多数的场景，现在它在我的手里也是“身兼数职”。

```card
title: Visual Studio Code 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/Visual Studio Code.png
link: https://code.visualstudio.com/
color: rgba(173, 216, 590, 0.15)
```
## DBeaver Community

一个免费的跨平台数据库工具，其 UI 也是十分对味，并且在多数据库支持和数据的导入导出功能上也是十分优秀，并且还开源免费，简直吊打 Navicat。

```card
title: DBeaver Community 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/beaver-head.png
link: https://dbeaver.io/
color: rgba(173, 216, 590, 0.15)
```

## Chat2DB
集成了AI和BI报表功能的新一代数据库管理系统，分析了 Navicat、DBever、DataGrip的优缺点，既可以支持网页版，又支持跨端，又通用的前端完美方案。集成了AIGC的能力，能够将自然语言转换为SQL，也可以将SQL转换为自然语言，可以给出研发人员SQL的优化建议，极大的提升人员的效率，是AI时代数据库研发人员的利器，未来即使不懂SQL的运营业务也可以使用快速查询业务数据、生成报表能力。

```card
title: Chat2DB 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/chat2db.png
link: http://sqlgpt.cn/zh
color: rgba(173, 216, 590, 0.15)
```

## Apifox/Apipost

集文档、调试、Mock、测试于一身的API 一体化协作平台，感觉大部分开发者大部分都在使用 Swagger 作为 API 文档协同工具，个人感觉核心的优点还是在每次修改参数后并不需要重新编辑接口就可以自动更新，并且还有测试功能，这已经可以满足开发人员大部分的需求了，可是当你需要更加喜爱丰富的功能的话，比如说出一个手册、Mock等复杂功能还是力不从心，所以 Apifox 和 Apipost 两款国产软件成功问世，主打一个 Postman + Swagger + Mock + Jmeter 的设计理念。个人两个用下来感觉功能差别不大，具体想体验哪一个就看个人喜好了。

::: card
```card
title: Apifox 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/apifox.png
link: https://apifox.com/
color: rgba(173, 216, 590, 0.15)
```
```card
title: Apipost 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/apipost.png
link: https://www.apipost.cn/
color: rgba(173, 216, 590, 0.15)
```
:::

## RedisInsight

Redis 的可视化工具有很多，但是早起的大部分 UI 都很丑，可视化和没可视化一样，后来像 Redis Desktop Manager 这种简约多彩的几款突出重围，但是美中不足的是要收费，后来 Redis 官方自己推出了自家的 RedisInsight 后，无论是操作逻辑还是 UI 界面都是更胜一筹，我想应该目前应该没有人还在用第三方的了吧。

```card
title: RedisInsight 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/redisinsigh.svg
link: https://redis.com/redis-enterprise/redis-insight/
color: rgba(173, 216, 590, 0.15)
```

## Tabby

这个工具也是最近在社区里火起来的，打着 “A terminal for a more modern age” 的大旗，那就让我康康你有多 modern 。其实我自己是卸载过一次的，当时还是刚用 Mac 不久，几乎找教程都是在用 iTerm2 + Oh My Zsh 这一套，而且第一次用 Tabby 真是没用明白，可是最近又刷到了它，就好奇又下载下来用了，虽然内置的也是用 zsh 的界面，无非就是 iterm 的换壳版，而且还不支持一些系统状态的展示，但是它在 SSH Client 方面可太香了，直接就是 terminal 和 XShell 的合体版本，而且界面真的干爽，建议一上来还是用中文的熟悉一下设置，要不然也会像我第一次一样错过好工具。

```card
title: Tabby 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/tabby.svg
link: https://tabby.sh/
color: rgba(173, 216, 590, 0.15)
```

## Warp

相对于上面的 Tabby，这个工具号称21世纪的终端工具，与传统终端的操作逻辑有些许不同，不仅用文本框代替了命令行输入，并且新增了 block 块的功能，更加方便我们平时的查看和复用命令。对于我个人理解，如果你是使用终端的小白或者不想安装 oh my zsh 折腾样式的朋友，这是一个非常适合你的工具。

值得一提的是不仅仅在操作逻辑上，Warp 主打的功能就是与 Ai 相结合，内置了 Ai 助手并且提供命令提示，不需要像之前引入智能提示和历史提示的插件，不过目前每日提问数量应该是有限制的，不过已经可以应付一般人的正常使用强度了。

当然也是有局限的，目前此工具只支持 macOS，并且会获取用户数据，如果你对个人隐私十分重视那就不推荐使用了。

```card
title: Warp 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/Warp.svg
link: https://www.warp.dev/
color: rgba(173, 216, 590, 0.15)
```

## OrbStack
其实当你在使用 Docker Desktop 的时候你会发现体验非常之差，OrbStack 的出现就是 为了解决 macOS 上的 Docker Desktop 原本就是饱受诟病，慢、重、资源消耗巨的问题，在 Mac OS 上低成本的运行容器和 Linux。不过注意 OrbStack 不支持Windows 和Linux，只支持macOS

```card
title: Warp 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/orbStack.png
link: https://orbstack.dev
color: rgba(173, 216, 590, 0.15)
```

## WireShark
网络分析的工具很多，相比于 Fiddler 、Charles 来说 WireShark 更专业，功能更强大，并且可以免费使用。

```card
title: Warp 官网
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/tools/development-tools/wireshark-logo.png
link: https://www.wireshark.org
color: rgba(173, 216, 590, 0.15)
```