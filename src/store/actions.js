export default {
  SET_USERID: ({ state, commit }, userId) => {
    setTimeout(() => {
      if (!state.userId) {
        commit("INIT_USERID", userId);
      }
    }, 1000);
  }
};
