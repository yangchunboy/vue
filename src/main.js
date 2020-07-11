import "./lib/rem/rem";
import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import { Form, Input, Select, Option, FormItem } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(FormItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
