import { createRouter, createWebHashHistory } from "vue-router";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
