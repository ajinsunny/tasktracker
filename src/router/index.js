import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";

const routes = [
  {
    path: "/",
    name: "AppHome",
    component: AppHome,
    props: (route) => ({ showAddTask: route.query.showAddTask === "true" }), // Pass the showAddTask prop here
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
