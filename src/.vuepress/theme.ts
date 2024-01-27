import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar/index.js";

export default hopeTheme({

  /**
   * 博客展示配置
   */
  author: {
    name: "songbaicheng", // 作者姓名
    url: "https://github.com/songbaicheng", // 作者网站
    email: "songbaicheng16@163.com" // 作者 Email
  },
  hostname: "https://github.com/songbaicheng/songbaicheng.github.io", // 当前网站部署到的域名
  iconAssets: "iconfont", // 字体图标资源链接
  logo: "/icon/chat2db.png", // 网站左上角logo
  logoDark: "/icon/logo-dark.png", // 黑夜模式下网站左上角logo
  repo: "songbaicheng/songbaicheng.github.io", // github地址
  docsDir: "docs", // 项目主路径
  navbar: Navbar, // 导航栏
  sidebar: Sidebar, // 侧边栏
  headerDepth: 3, // 侧边栏嵌套的标题深度，默认是2
  editLink: false, // 是否展示编辑此页链接
  encrypt: { // 文章加密
    config: {
      "/hobbies/": "songbaicheng",
    }
  },

  /**
   * 博客模式配置
   */
  blog: {
    name: 'songbaicheng', // 博主姓名
    avatar: 'favicon.ico', // 博主头像
    roundAvatar: true, // 是否剪裁头像为圆形形状
    description: '我与我周旋久，宁做我', // 口号、座右铭或介绍语
    intro: "/zh/intro.html", // 博主的个人介绍地址
    articlePerPage: 10, // 每页的文章数量
    medias: { // 博主的媒体链接配置
      BiliBili: "https://space.bilibili.com/400378627",
      GitHub: "https://github.com/songbaicheng",
      LeetCode: ["https://leetcode.cn/u/songbaicheng/", "src/.vuepress/public/assets/common-icon/leetcode-dark-cn.svg"],
    },
  },

  /**
   * 框架配置
   */
  plugins: {
    blog: true, // 是否开始博客模式

    /**
     * 主题中选择启用的功能
     */
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      card: true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
    },

    /**
     * 主题启用的组件
     */
    components: {
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        // "VidStack",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
    },
  },
});
