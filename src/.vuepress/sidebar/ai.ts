import { arraySidebar } from "vuepress-theme-hope";

export const aiSidebar = arraySidebar([
    {
        text: '大语言模型',
        icon: '/assets/images/ai/llm/llm.svg',
        collapsible: true,
        children: [
            '/ai/llm/ai-model-terms.md',
            '/ai/llm/llm-parallelism.md',
            '/ai/llm/llm-serving-runtimes.md',
            '/ai/llm/README.md',
            '/ai/llm/hugging-face.md',
            '/ai/llm/deep-learning.md',
            '/ai/llm/pytorch.md',
            '/ai/llm/rag.md',
        ]
    },
    {
        text: 'AI 应用',
        icon: '/assets/images/ai/application/prompt/prompt.svg',
        collapsible: true,
        children: [
            '/ai/application/rag-and-llm-wiki.md',
            '/ai/application/bluetooth-phone-ai-reception.md',
            '/ai/application/ai-api-error-codes.md',
            '/ai/application/prompt-engineering.md',
        ]
    },
])