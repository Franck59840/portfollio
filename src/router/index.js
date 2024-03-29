import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import i18n from "../i18n";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: `/${i18n.locale}`,
    },
    {
      path: "/:lang",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        // {
        //   path: "about",
        //   name: "about",
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () =>
        //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
        // },
        {
          path: "project",
          name: "project",
          component: () => import("../views/ProjectsView.vue"),
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("../views/ContactView.vue"),
        },
      ],
    },
  ],
});
