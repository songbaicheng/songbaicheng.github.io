import { sidebar } from "vuepress-theme-hope";
import { studySidebar } from "./study"
import { workTaskSidebar } from "./work-task"
import { resourceSidebar } from "./resource"
import { aiSidebar } from "./ai"

export const Sidebar = sidebar({
  '/study/': studySidebar,
  '/ai/': aiSidebar,
  '/work-task/': workTaskSidebar,
  '/resource/': resourceSidebar,
});
