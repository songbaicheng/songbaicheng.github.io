import { sidebar } from "vuepress-theme-hope";
import { studySidebar } from "./study"
import { workTaskSidebar } from "./work-task"
import { resourceSidebar } from "./resource"

export const Sidebar = sidebar({
  '/category/': false,
  '/tag/': false,
  '/article/': false,
  '/star/': false,
  '/timeline/': false,
  '/study/': studySidebar,
  '/ai/': studySidebar,
  '/work-task/': workTaskSidebar,
  '/resource/': resourceSidebar,
});
