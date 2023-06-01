import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
    "/",
    { text: "演示", icon: "discover", link: "/zh/demo/" },
    {
        text: "过去", icon: "", children: [{
            text: "阿里云",
            link: "http://47.93.240.83:8000/"
        }, {
            text: "博客园",
            link: "https://www.cnblogs.com/bc-song/"
        }]
    }
]);
