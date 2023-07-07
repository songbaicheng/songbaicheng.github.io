import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar/index.js";

export default hopeTheme({

  hostname: "https://github.com/songbaicheng/songbaicheng.github.io", // 当前网站部署到的域名
  author: {
    name: "songbaicheng", // 作者姓名
    url: "https://github.com/songbaicheng", // 作者网站
    email: "songbaicheng16@163.com" // 作者 Email
  },
  iconAssets: "iconfont",
  logo: "/icon/logo.png", // 网站左上角logo
  logoDark: "/icon/logo-dark.png",
  repo: "songbaicheng/songbaicheng.github.io", // github地址
  docsDir: "docs",

  blog: { // 主题中日志模式配置
    name: 'songbaicheng', // 博主姓名
    avatar: 'favicon.ico', // 博主头像
    roundAvatar: true, // 是否剪裁头像为圆形形状
    description: '我与我周旋久，宁做我', // 口号、座右铭或介绍语
    medias: { // 博主的媒体链接配置
      BiliBili: "https://space.bilibili.com/400378627",
      GitHub: "https://github.com/songbaicheng",
      LeetCode: ["https://leetcode.cn/u/songbaicheng/", "src/.vuepress/public/assets/common-icon/leetcode-dark-cn.svg"],
    },

    intro: "/zh/intro.html", // 博主的个人介绍地址

    articlePerPage: 10, // 每页的文章数量
  },

  navbar: Navbar, // 导航栏

  sidebar: Sidebar, // 侧边栏

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
    },

    // 主题中选择启用的功能
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
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
