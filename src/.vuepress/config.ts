import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",
  title: "宋柏成的技术博客",
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
  plugins: [
    // docsearchPlugin({
    //   apiKey: '98eef3cbbc84f0cd80b63f4cb53f9a51',
    //   indexName: 'songbaichengio',
    //   appId: 'XLRE2KQH6J',
    // }),
  ],
});
