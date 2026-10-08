import { arraySidebar } from "vuepress-theme-hope";

export const aiSidebar = arraySidebar([
  {
    text: "基础与原理",
    icon: "/assets/images/ai/llm/llm.svg",
    collapsible: true,
    children: ["/ai/llm/ai-model-terms.md", "/ai/llm/deep-learning.md"],
  },
  {
    text: "框架与工具",
    icon: "mdi:tools",
    collapsible: true,
    children: ["/ai/llm/pytorch.md", "/ai/llm/hugging-face.md"],
  },
  {
    text: "推理与部署",
    icon: "mdi:server-outline",
    collapsible: true,
    children: ["/ai/llm/llm-serving-runtimes.md", "/ai/llm/llm-parallelism.md", "/ai/application/ai-api-error-codes.md"],
  },
  {
    text: "应用与实践",
    icon: "/assets/images/ai/application/prompt/prompt.svg",
    collapsible: true,
    children: ["/ai/application/prompt-engineering.md", "/ai/application/rag-and-llm-wiki.md", "/ai/application/bluetooth-phone-ai-reception.md"],
  },
]);
