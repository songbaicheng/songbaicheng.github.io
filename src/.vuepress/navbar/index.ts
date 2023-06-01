import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
    "/",
    { text: "演示", icon: "discover", link: "/zh/demo/" },
    { text: "学习之路", icon: "study", link: "/study/" },
    { text: "工作任务", icon: "workingDirectory", link: "/work-task/" },
    { text: "书籍推荐", icon: "time", link: "/books/" },
    {
        text: "过去", icon: "past", children: [{
            text: "阿里云",
            link: "http://47.93.240.83:8000/"
        }, {
            text: "博客园",
            link: "https://www.cnblogs.com/bc-song/"
        }]
    }
]);