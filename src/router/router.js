import Vue from "vue";
import Router from "vue-router";
// 首页
const Home = () => import("../pages/home/index");
// demo页
const Demo = () => import("../pages/demo/index");
// 朗诵报名页面
const Speech = () => import("../pages/speech/index");

Vue.use(Router);
console.log(process.env);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/demo",
      component: Demo
    },
    {
      path: "/speech",
      component: Speech
    }
  ]
});
