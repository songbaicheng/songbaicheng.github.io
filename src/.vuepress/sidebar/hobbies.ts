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
            '/hobbies/foreign-language/english.md'
        ]
    },
])