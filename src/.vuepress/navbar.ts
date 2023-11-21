import {navbar} from "vuepress-theme-hope";

export const Navbar = navbar([
    "/",
    {text: "学习之路", icon: "study", link: "/study/"},
    {text: "工作任务", icon: "workingDirectory", link: "/work-task/"},
    {text: "资源分享", icon: "box", link: "/resource/"},
    {text: "AI", icon: "any", link: "/ai"},
    // { text: "我的生活", icon: "strong", link: "/hobbies/" },
    {
        text: "过去", icon: "time", children: [{
            text: "阿里云",
            link: "http://47.93.240.83:8000/"
        }, {
            text: "博客园",
            link: "https://www.cnblogs.com/bc-song/"
        }]
    }
]);