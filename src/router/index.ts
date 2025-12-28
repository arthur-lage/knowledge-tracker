import { createRouter, createWebHistory } from "vue-router";

import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Dashboard from "@/pages/Dashboard.vue";
import LandingPage from "@/pages/LandingPage.vue";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
