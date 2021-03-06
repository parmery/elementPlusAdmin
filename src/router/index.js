import { createRouter, createWebHashHistory } from "vue-router";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/",
    component: () => import("@/layout/index"),
  },
];

export const asyncRoutes = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
