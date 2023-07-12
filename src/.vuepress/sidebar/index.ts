import { sidebar } from "vuepress-theme-hope";
import { studySidebar } from "./study"
import { workTaskSidebar } from "./work-task"
import { resourceSidebar } from "./resource"
import { hobbiesSidebar } from "./hobbies"

export const Sidebar = sidebar({
  '/study/': studySidebar,
  '/work-task/': workTaskSidebar,
  '/resource/': resourceSidebar,
  '/hobbies/': hobbiesSidebar,
});
