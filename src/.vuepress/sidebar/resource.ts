import { arraySidebar } from "vuepress-theme-hope";

export const resourceSidebar = arraySidebar([
    {
        text: '书籍分享',
        icon: 'read',
        collapsible: true,
        children: [
            '/resource/books/java.md',
            '/resource/books/database.md',
            '/resource/books/ads.md',
            '/resource/books/other-skills.md'
        ]
    },
    {
        text: '工具推荐',
        icon: 'tool',
        collapsible: true,
        children: [
            '/resource/tools/development-tools.md',
            '/resource/tools/daily-tools.md',
        ]
    },
    {
        text: '开源项目',
        icon: 'preview',
        collapsible: true,
        children: [
            '/resource/open-source-project/workflow.md',
        ]
    },
    {
        text: '奇技淫巧',
        icon: 'share',
        collapsible: true,
        children: [
            '/resource/techniques/image-hosting-service.md',
        ]
    },
])