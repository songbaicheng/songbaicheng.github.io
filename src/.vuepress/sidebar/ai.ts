import { arraySidebar } from "vuepress-theme-hope";

export const aiSidebar = arraySidebar([
    {
        text: '大语言模型',
        icon: '/assets/images/ai/llm/llm.svg',
        collapsible: true,
        children: [
            '/ai/llm/README.md',
            '/ai/llm/deep-learning.md',
            '/ai/llm/pytorch.md',
            '/ai/llm/hugging-face.md',
        ]
    },
    {
        text: 'AI 应用',
        icon: '/assets/images/ai/application/prompt/prompt.svg',
        collapsible: true,
        children: [
            '/ai/application/prompt-engineering.md',
        ]
    },
])