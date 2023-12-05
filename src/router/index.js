import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue"
import logo from "../assets/logo.png"

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Good Things",
      subtitle: "Foundation",
      logo,
    },
  },
  {
    path: "/about",
    meta: { title: "About" },
    // component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  { path: "/:path(.*)", component: NotFound },
]
