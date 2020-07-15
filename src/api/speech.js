import { post } from "@utils/request.js";
import config from "../config/index";

const insertSpeech = data =>
  post({ url: `${config.requestUrl}/speech/insert`, data });

export default {
  insertSpeech
};
