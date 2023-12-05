import { defineStore } from "pinia"

export default defineStore("nav", {
  state: () => ({
    routes: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "What we do",
        path: "whatwedo",
      },
      {
        title: "The digital divide",
        path: "digital",
      },
      {
        title: "Get in involved",
        path: "involve",
      },
      {
        title: "Our network",
        path: "network",
      },
      {
        title: "Insights",
        path: "insights",
      },
    ],
  }),
  getters: {
    getRoutes() {
      return this.routes
    },
  },
})