import { arraySidebar } from "vuepress-theme-hope";

export const resourceSidebar = arraySidebar([
    {
        text: '书籍分享',
        icon: 'mdi:book-open-page-variant-outline',
        collapsible: true,
        children: [
            '/resource/books/java.md',
            '/resource/books/database.md',
            '/resource/books/ads.md',
            '/resource/books/deep-learning.md',
            '/resource/books/other-skills.md'
        ]
    },
    {
        text: '工具推荐',
        icon: 'mdi:tools',
        collapsible: true,
        children: [
            '/resource/tools/development-tools.md',
            '/resource/tools/daily-tools.md',
        ]
    },
    {
        text: '开源项目',
        icon: 'mdi:source-repository',
        collapsible: true,
        children: [
            '/resource/open-source-project/jwt.md',
            '/resource/open-source-project/rule-engine.md',
            '/resource/open-source-project/work-flow.md',
            '/resource/open-source-project/mkcert.md',
        ]
    },
    {
        text: '奇技淫巧',
        icon: 'mdi:share-variant',
        collapsible: true,
        children: [
            '/resource/techniques/image-hosting-service.md',
            '/resource/techniques/internal-network-penetration.md',
        ]
    },
])