import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import ErrorView from "../views/ErrorView.vue";
import UserErrorView from "../views/UserErrorView.vue";
import ProfileView from "../views/ProfileView.vue";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      name: "home",
      component: HomeView,
   },
   {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
   },

   // pasar parametros
   {
      path: "/user/:id",
      component: UserView,
      children: [
         {
            path: "profile", // "" cuando no hay nada, "profile" cuando esta profile
            component: ProfileView,
         },
      ],
   },
   { path: "/user/:name/post/:postId", name: "userPost", component: UserView },

   // error 404, no importa el orden pero lo recomiendan
   { path: "*", component: ErrorView }, // hara match con todo
   { path: "/user-*", component: UserErrorView }, // hara match con cualquier cosa que empiese con `/user-`
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
