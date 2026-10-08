# songbaicheng 的个人博客

VuePress 2 + VuePress Theme Hope，源码在 `src/`，发布产物在 `gh-pages`。

## 开发与构建

需要 Node.js 22（最低 22.13）和 pnpm 11.10.0。

```sh
pnpm install --frozen-lockfile
pnpm docs:dev
pnpm docs:build
```

构建输出为 `src/.vuepress/dist/`。提交 `main` 会触发 GitHub Actions 构建并发布到 `gh-pages`；仅升级分支不会发布。GitHub Pages 应继续使用 `gh-pages` 分支根目录。

## 版本维护

本次固定 Hope `2.0.0-rc.110` 与 VuePress `2.0.0-rc.31`。这是官方当前推荐发布组合，仍是 RC，并非正式 2.0 稳定版。

不要直接安装 `vuepress@latest`（该标签目前指向 VuePress 1）。升级前核对主题包的 `peerDependencies`，在独立分支更新固定版本和 `pnpm-lock.yaml`，本地构建及浏览器检查通过后再合并。避免自动将所有依赖更新到 latest。

## 图标与内容

- 图标配置：`src/.vuepress/theme.ts` 的 `plugins.icon`。
- 使用 `mdi:<名称>`，对应 `@iconify-json/mdi` 图标集，本地打包，不依赖 Iconify API。
- 自定义 SVG/图片仍放在 `src/.vuepress/public/`，用 `/icon/...` 等绝对路径引用。
- 图标具有懒渲染行为；检查项目卡片、折叠导航与侧边栏时应先滚动/展开。
- 旧 `iconAssets: "iconfont"` 已移除。不要继续使用旧主题私有图标名称。
- Markdown 增强配置迁移到主题 `markdown`，搜索使用官方 SlimSearch。
- 原来的 `card` 代码块已迁移为官方 `<VPCard />`；标题、描述、Logo 和链接保留，旧背景色对应 `background`。
- `mindmap` 是 Mermaid 图表语法；启用 `markdown.mermaid` 并安装锁定版本的 `mermaid`。现有 19 张思维导图保持原内容，已逐页验证 SVG 渲染。
- 技术品牌 Logo 使用本地彩色 SVG，不用单色 MDI 品牌图标替代。新增 Java、Chrome、Linux SVG 来自 Devicon：https://github.com/devicons/devicon（MIT）；Vue 和 TypeScript 沿用仓库已有资源。

官方文档：https://theme-hope.vuejs.press/zh/
图标文档：https://theme-hope.vuejs.press/zh/guide/interface/icon.html
