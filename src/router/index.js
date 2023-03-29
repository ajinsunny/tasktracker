import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome";
import AppAbout from "../views/AppAbout";

const routes = [
  {
    path: "/",
    name: "AppHome",
    component: AppHome,
  },
  {
    path: "/about",
    name: "AppAbout",
    component: AppAbout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
