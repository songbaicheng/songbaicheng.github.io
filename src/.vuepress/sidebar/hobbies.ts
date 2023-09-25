import { arraySidebar } from "vuepress-theme-hope";

export const hobbiesSidebar = arraySidebar([
    {
        text: '书法',
        icon: 'write',
        collapsible: true,
        children: [
            '/hobbies/calligraphic/README.md',
            '/hobbies/calligraphic/semi-cursive-script.md'
        ]
    },
    {
        text: '外语',
        icon: 'language',
        collapsible: true,
        children: [
            '/hobbies/foreign-language/README.md',
            '/hobbies/foreign-language/english-grammer.md',
            '/hobbies/foreign-language/english-writing.md'
        ]
    },
    {
        text: '体育运动',
        icon: 'ability',
        collapsible: true,
        children: [
            '/hobbies/sports/README.md',
            '/hobbies/sports/table-tennis.md',
        ]
    },
    {
        text: '音乐',
        icon: 'play',
        collapsible: true,
        children: [
            '/hobbies/music/README.md',
            '/hobbies/music/sing.md',
        ]
    },
])