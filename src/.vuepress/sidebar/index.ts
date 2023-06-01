import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  '/study/': [
    {
      text: 'Java',
      collapsible: true,
      children: ['/study/backend/java/dynamic-proxy.md']
    },
    {
      text: '前端技术',
      collapsible: true,
      children: ['/study/frontend/README.md']
    },
    {
      text: '设计模式',
      collapsible: true,
      children: [
        '/study/design-pattern/README.md',
        '/study/design-pattern/observer.md'
      ]
    },
    {
      text: '算法',
      collapsible: true,
      children: ['/study/ads/algorithms/README.md']
    },
    {
      text: '数据结构',
      collapsible: true,
      children: ['/study/ads/data-structure/README.md']
    }
  ],
  '/work-task/': [
    {
      text: '开发任务',
      collapsible: true,
      children: [
        '/work-task/development/ant.md',
        '/work-task/development/scheduled.md',
        '/work-task/development/log-desensitization.md',
        '/work-task/development/reflection.md'
      ]
    },
    {
      text: '设计任务',
      collapsible: true,
      children: [
        '/work-task/design/cmds.md',
        '/work-task/design/migrate-svn2git.md'
      ]
    }
  ],
  '/books/': [
    '/books/java.md',
    '/books/other-skills.md'
  ]
});
