import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  bundler: viteBundler(),
  title: "Baicheng's Blog",
  lang: "zh-CN",

  head: [
    [ // 百度统计
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d329c480cfe7d4d2af07d72164336050";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],

  theme,

});