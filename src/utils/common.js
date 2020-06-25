/**
 * @author chuck
 * utils.js这个文件用于存放可以复用的方法方法
 *
 */

// 将时间转换为字符串格式
const getDate = date => {
  if (date instanceof Date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  throw "Parameter is not date";
};

const setToken = token => {
  if (typeof token !== "string") {
    throw "token is not string.";
  }
  window.localStorage.setItem("token", token);
};

const getToken = () => {
  return window.localStorage.getItem("token") || "";
};

export default {
  getDate,
  setToken,
  getToken
};
