/**
 * @author chuck
 * utils.js这个文件用于存放可以复用的方法方法
 *
 */

import store from "../store/index";

// 将时间转换为字符串格式
const getDate = date => {
  if (date instanceof Date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  throw "Parameter is not date";
};

// 设置token
const setToken = token => {
  if (typeof token !== "string") {
    throw "token is not string.";
  }
  window.localStorage.setItem("token", token);
};

// 获取token
const getToken = () => {
  return window.localStorage.getItem("token") || "";
};

// 切换loading
const toggleLoading = boolean => {
  store.commit("TOOGLE_LOADING", boolean);
};

// 切换alert
const toggleAlert = boolean => {
  store.commit("TOOGLE_ALERT", boolean);
};

export default {
  getDate,
  setToken,
  getToken,
  toggleLoading,
  toggleAlert
};
