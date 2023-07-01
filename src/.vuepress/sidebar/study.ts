import { arraySidebar } from "vuepress-theme-hope";

export const studySidebar = arraySidebar([
    {
        text: '开发技能',
        icon: 'computer',
        collapsible: true,
        children: [
            '/study/development/READNE.md'
        ]
    },
    {
        text: 'Java',
        icon: 'java',
        collapsible: true,
        children: [
            {
                text: 'Java基础',
                collapsible: true,
                children: [
                    '/study/backend/java/basic/dynamic-proxy.md',
                    '/study/backend/java/basic/concurrency.md',
                ],
            },
            {
                text: 'Spring 全家桶',
                collapsible: true,
                children: [
                    '/study/backend/java/spring/spring-data-redis.md',
                    '/study/backend/java/spring/spring-security.md',
                    '/study/backend/java/spring/spring-security-jwt.md',
                    '/study/backend/java/spring/spring-security-oauth2.md',
                ],
            },
            {
                text: '分布式 + 微服务',
                collapsible: true,
                children: [
                    '/study/backend/java/micro-services/README.md',
                    '/study/backend/java/micro-services/nacos.md',
                    '/study/backend/java/micro-services/gateway.md',
                    '/study/backend/java/micro-services/spring-boot-admin.md',
                ],
            }
        ]
    },
    {
        text: '持久化',
        icon: 'storage',
        collapsible: true,
        children: [
            '/study/backend/persistence/README.md',
            '/study/backend/persistence/redis.md'
        ]
    },
    {
        text: '前端技术',
        icon: 'chrome',
        collapsible: true,
        children: ['/study/frontend/README.md']
    },
    {
        text: '设计模式',
        icon: 'quote',
        collapsible: true,
        children: [
            '/study/design-pattern/README.md',
            '/study/design-pattern/observer.md'
        ]
    },
    {
        text: '算法',
        icon: 'calculate',
        collapsible: true,
        children: ['/study/ads/algorithms/README.md']
    },
    {
        text: '数据结构',
        icon: 'tree',
        collapsible: true,
        children: ['/study/ads/data-structure/README.md']
    }
])