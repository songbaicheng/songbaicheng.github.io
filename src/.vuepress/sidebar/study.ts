import {arraySidebar, SidebarArrayOptions} from "vuepress-theme-hope";

export const studySidebar:SidebarArrayOptions = arraySidebar([
    {
        text: '开发知识',
        icon: 'more',
        collapsible: true,
        children: [
            '/study/development/ddd.md',
            '/study/development/lock.md',
            '/study/development/encode.md',
        ]
    },
    {
        text: '后端开发',
        icon: 'java',
        collapsible: true,
        children: [
            {
                text: 'Java 基础',
                collapsible: true,
                children: [
                    '/study/backend/java/basic/servlet.md',
                    '/study/backend/java/basic/dynamic-proxy.md',
                    '/study/backend/java/basic/concurrency.md',
                    '/study/backend/java/basic/new-feature/java8.md',
                    '/study/backend/java/basic/new-feature/java11.md',
                    '/study/backend/java/basic/new-feature/java17.md'
                ],
            },
            {
                text: 'Spring 全家桶',
                collapsible: true,
                children: [
                    '/study/backend/java/spring/spring-data-redis.md',
                    '/study/backend/java/spring/spring-security-jwt.md',
                    '/study/backend/java/spring/spring-security-oauth2.md',
                    '/study/backend/java/spring/spring-boot-logging.md',
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
            },
        ]
    },
    {
        text: '持久化',
        icon: 'storage',
        collapsible: true,
        children: [
            '/study/persistence/README.md',
            '/study/persistence/redis.md'
        ]
    },
    {
        text: '中间件',
        icon: '/icon/sidebar-puzzle.svg',
        collapsible: true,
        children: [
            '/study/middleware/README.md'
        ]
    },
    {
        text: '大数据',
        icon: '/assets/images/study/big-data/big-data.svg',
        collapsible: true,
        children: [
            '/study/big-data/README.md',
            '/study/big-data/hadoop.md'
        ]
    },
    {
        text: '前端技术',
        icon: 'chrome',
        collapsible: true,
        children: [
            '/study/frontend/README.md',
            '/study/frontend/basic/es6.md',
            '/study/frontend/basic/typescript.md',
            '/study/frontend/basic/layout.md',
            '/study/frontend/framework/vue3.md',
            '/study/frontend/framework/pinia.md',
        ]
    },
    {
        text: '设计模式',
        icon: 'quote',
        collapsible: true,
        children: [
            '/study/design-pattern/README.md',
            '/study/design-pattern/observer.md',
            '/study/design-pattern/chain.md'
        ]
    },
    {
        text: '计算机基础',
        icon: 'computer',
        collapsible: true,
        children: [
            {
                text: '数据结构',
                icon: 'tree',
                collapsible: true,
                children: [
                    '/study/computer-basis/ads/data-structure/README.md',
                    '/study/computer-basis/ads/data-structure/linear-list.md',
                    '/study/computer-basis/ads/data-structure/stack.md',
                    '/study/computer-basis/ads/data-structure/queue.md',
                    '/study/computer-basis/ads/data-structure/stack-queue.md',
                    '/study/computer-basis/ads/data-structure/arrays-materices.md',
                    '/study/computer-basis/ads/data-structure/string.md',
                    '/study/computer-basis/ads/data-structure/tree.md',
                    '/study/computer-basis/ads/data-structure/tree-btree.md',
                    '/study/computer-basis/ads/data-structure/picture.md',
                ]
            },
            {
                text: '算法',
                icon: 'calculate',
                collapsible: true,
                children: [
                    '/study/computer-basis/ads/algorithms/README.md',
                    '/study/computer-basis/ads/algorithms/leetcode.md',
                    '/study/computer-basis/ads/algorithms/find.md',
                    '/study/computer-basis/ads/algorithms/sort.md',
                    '/study/computer-basis/ads/algorithms/disjoint-set-union.md'
                ]
            },
        ]
    },
    {
        text: 'Linux 运维',
        icon: 'linux',
        collapsible: true,
        children: [
            '/study/maintenance/README.md',
            '/study/maintenance/linux-commands.md',
            '/study/maintenance/1panel.md',
            '/study/maintenance/docker.md',
            '/study/maintenance/nginx.md',
            '/study/maintenance/arthas.md',
            {
                text: 'Jenkins',
                icon: 'flow',
                collapsible: true,
                children: [
                    '/study/maintenance/jenkins/README.md',
                    '/study/maintenance/jenkins/jenkins-start.md'
                ]
            },
        ]
    },
])