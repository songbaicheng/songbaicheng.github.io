import { arraySidebar } from "vuepress-theme-hope";

export const aiSidebar = arraySidebar([
    {
        text: '提示工程',
        icon: '/assets/images/ai/prompt/prompt.svg',
        collapsible: true,
        children: [
            '/ai/prompt-engineering/README.md',
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
    {
        text: 'Agent',
        icon: '/assets/images/ai/agent/agent-logo.svg',
        collapsible: true,
        children: [
            '/ai/agent/README.md',
        ]
    },
])