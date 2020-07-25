export default {
  TOOGLE_LOADING: (state, boolean) => {
    state.showLoading = boolean;
  },
  TOOGLE_ALERT: (state, boolean) => {
    state.showAlert = boolean;
  },
  INIT_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
  INIT_USERID: (state, userId) => {
    state.userId = userId;
  }
};
