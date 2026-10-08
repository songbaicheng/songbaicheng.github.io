# 首页滚动形变

## 内容与边界

首页是博客浏览入口，不是 Shader 演示。使用 Hope 原有 BlogHome、ProjectPanel、ArticleList 和 InfoPanel，仅通过官方自定义模式替换 BlogHero。原插画资源保留，取消 alias 即可恢复主题 Hero。

前景为博客欢迎语、学习/工作/AI 栏目与近期文章，近期文章直接复用 `useArticles()` 数据源。导航、搜索和文章阅读不替换。

## 实现

- Three.js 与 GSAP 仅首页 onMounted 动态导入；文章页不加载动画。
- 固定全屏 Canvas，由 400vh 的开场区域裁剪。文字使用 sticky 舞台，退出开场即恢复普通博客流。
- ShaderMaterial 内联完整 Vertex/Fragment GLSL，initialPosition 与 targetPosition 存在 BufferGeometry attributes。
- 球面到环面以 uProgress 直接驱动，ScrollTrigger scrub:true，ease:none。sin(pi * progress) 包络令 simplex noise 位移在中段最强、两端为零。
- 桌面 12000 / 手机 5500 点，DPR 上限 1.5。离开舞台或隐藏标签页停止 GPU 绘制；卸载清理 RAF、ScrollTrigger、监听器与几何/材质/renderer。
- 无 WebGL 或减少动态效果时全部内容以静态 HTML 展示，不需要走完 400vh。提供直接看文章锚点。

## 验证

实际生产构建后，浏览器检查 375/430/768/1024/1280/1440px，起点/中点/末段 uProgress 随滚动变化，无横向溢出、单一 h1、无运行异常。截图检查桌面球体/环体与移动中段。减少动态效果降级、文章锚点、搜索与原 19 张 Mermaid 思维导图回归验证通过。

60 FPS 是目标，不是所有设备的承诺；云主机软件图形环境无法代表用户手机 GPU，需以真实设备反馈进一步调整粒子数量。
