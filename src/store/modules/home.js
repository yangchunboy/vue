const state = {
  homeData: {
    text: "homeData"
  }
};

const mutations = {
  INIT_HOMEDATA: (state, homeData) => {
    state.homeData = homeData;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
