import { get } from "@utils/request.js";

const getUserInfo = params =>
  get({
    url: "/getUserInfo",
    params
  });

export default {
  getUserInfo
};
