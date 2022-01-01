import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./components/Home.vue";
import Mtcars from "./components/Mtcars.vue";
import Histogram from "./components/Histogram.vue";
import Penguins from "./components/Penguins.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/mtcars", name: "Cars", component: Mtcars },
  { path: "/histogram", name: "Old Faithful", component: Histogram },
  { path: "/Penguins", name: "Penguins", component: Penguins },
];

export default new VueRouter({
  routes,
});
