import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import ErrorView from "../views/ErrorView.vue";
import UserErrorView from "../views/UserErrorView.vue";
import ProfileView from "../views/ProfileView.vue";
import ComponentIndepth from "../views/ComponentIndepth.vue";
import BootstrapComponents from "../views/BootstrapComponents.vue";
import BootstrapFour from "../views/BootstrapFour.vue";
import EventHandling from "../views/EventHandling.vue";
import ForminputBinding from "../views/ForminputBinding.vue";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      redirect: '/home',
   },
   {
      path: "/home",
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

   // componentes vue a profundidad
   {
      path: "/components-indepth",
      component: ComponentIndepth,
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

   // Componentes de bootstrap
   {
      path: "/bootstrap-components",
      component: BootstrapComponents,
   },

   // Bootstrap 4
   {
      path: "/bootstrap-four",
      component: BootstrapFour,
   },

   // eventos
   {
      path: "/event-handling",
      component: EventHandling,
   },

   // eventos
   {
      path: "/forminput-binding",
      component: ForminputBinding,
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
   linkActiveClass: "active",
   linkExactActiveClass: "exact-active",
});

export default router;
