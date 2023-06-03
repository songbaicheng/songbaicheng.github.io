# 宋柏成的个人博客

一个具有强大功能的 vuepress 主题，地址如下：
> https://theme-hope.vuejs.press/zh/

## GitHub部署步骤
1. 创建代码仓库，名字要使用 _[用户名].github.io_ 这种风格，如 _songbaicheng.github.io_，仓库属性要为 *public*。
2. 使用 VuePress Theme Hope 网站提供的构建工具在本地创建 VuePress 工程并提交到新建仓库。
3. 使用 GitHub 的 CI 工具 GitHub Actions，在每次提交代码的时候部署网站。如果你使用 VuePress Theme Hope 构建项目的话，项目的根目录中的 .github 文件中会存在工作流脚本，简单修改使用即可。
4. 在项目的 *GitHub Pages* 配置界面中 *Build and deployment* 选择你工作流脚本中选择的部署分支。