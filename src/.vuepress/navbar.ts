import {navbar} from "vuepress-theme-hope";

export const Navbar = navbar([
    "/",
    {text: "学习之路", icon: "mdi:school-outline", link: "/study/"},
    {text: "工作任务", icon: "mdi:briefcase-outline", link: "/work-task/"},
    {text: "资源分享", icon: "mdi:archive-outline", link: "/resource/"},
    {
        text: "过去", icon: "mdi:history", children: [{
            text: "阿里云",
            link: "http://47.93.240.83:8000/"
        }, {
            text: "博客园",
            link: "https://www.cnblogs.com/bc-song/"
        }]
    }
]);