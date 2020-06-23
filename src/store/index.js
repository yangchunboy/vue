import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import home from "./modules/home";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: () => state,
  mutations,
  actions,
  getters,
  modules: {
    home
  }
});

export default store;
