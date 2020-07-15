import { post } from "@utils/request.js";
import config from "../config/index";

const uploadImg = ({ data, headers }) =>
  post({ url: `/api/upload/img`, data, headers });

export default {
  uploadImg
};
