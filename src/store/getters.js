export default {
  username: state => {
    const { userInfo } = state;
    return userInfo ? userInfo.username : "";
  }
};
