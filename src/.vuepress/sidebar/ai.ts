import { arraySidebar } from "vuepress-theme-hope";

export const aiSidebar = arraySidebar([
    {
        text: 'AI 应用',
        icon: '/assets/images/ai/application/prompt/prompt.svg',
        collapsible: true,
        children: [
            '/ai/application/prompt-engineering.md',
        ]
    },
    {
        text: '深度学习',
        icon: '/assets/images/ai/deep-learning/deep-learning.svg',
        collapsible: true,
        children: [
            '/ai/deep-learning/README.md',
            '/ai/deep-learning/pytorch.md',
            '/ai/deep-learning/hugging-face.md',
        ]
    },
])