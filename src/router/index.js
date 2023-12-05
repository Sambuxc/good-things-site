import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue"

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/whatwedo",
    meta: { title: "What we do" },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/digital",
    meta: { title: "The digital divide" },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/involve",
    meta: { title: "Get in involved" },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/network",
    meta: { title: "Our network" },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/insights",
    meta: { title: "Insights" },
    component: () => import("../views/About.vue"),
  },
  { path: "/:path(.*)", component: NotFound },
]
