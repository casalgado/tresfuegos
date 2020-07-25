import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import TheMenu from "../components/TheMenu.vue";
import TheCheckout from "../components/TheCheckout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: TheMenu,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: TheCheckout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
