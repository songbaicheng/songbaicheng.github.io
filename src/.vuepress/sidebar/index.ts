import { sidebar } from "vuepress-theme-hope";
import { studySidebar } from "./study"
import { workTaskSidebar } from "./work-task"
import { booksSidebar } from "./books"

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
  '/study/': studySidebar,
  '/work-task/': workTaskSidebar,
  '/books/': booksSidebar
});
