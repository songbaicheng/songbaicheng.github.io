import { arraySidebar } from "vuepress-theme-hope";

export const workTaskSidebar = arraySidebar([
    {
        text: '开发任务',
        icon: 'code',
        collapsible: true,
        children: [
            '/work-task/development/ant.md',
            '/work-task/development/scheduled.md',
            '/work-task/development/log-desensitization.md',
            '/work-task/development/reflection.md',
            '/work-task/development/mockito.md'
        ]
    },
    {
        text: '设计任务',
        icon: 'creative',
        collapsible: true,
        children: [
            '/work-task/design/cmds.md',
            '/work-task/design/migrate-svn2git.md',
            '/work-task/design/environment-variable-configuration.md'
        ]
    },
    {
        text: '开发问题',
        icon: 'ask',
        collapsible: true,
        children: [
            '/work-task/problems/README.md',
        ]
    }
])