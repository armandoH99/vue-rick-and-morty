import { createRouter, createWebHistory } from "vue-router";
import Details from "../views/Details";
import Home from "../components/Home";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/details/:id", component: Details, name: "Details" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
