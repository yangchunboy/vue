import axios from "axios";
// import config from "../config/index";

const instance = axios.create({
  // baseURL: config.requestUrl,
  timeout: 5 * 60 * 1000
});

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    console.log(config);
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const factory = ({
  method,
  url,
  params = {},
  data = {},
  hideLoading,
  headers = {}
}) => {
  return instance.request({
    url,
    method,
    headers: Object.assign({}, headers),
    data,
    params,
    hideLoading
  });
};

export const get = ({ url, params, hideLoading = false, headers }) => {
  return factory({
    url,
    method: "get",
    params,
    hideLoading,
    headers
  });
};

export const post = ({ url, params, data, hideLoading = false, headers }) => {
  return factory({
    url,
    method: "post",
    params,
    data,
    hideLoading,
    headers
  });
};

export const put = ({ url, params, data, hideLoading = false, headers }) => {
  return factory({
    url,
    method: "put",
    params,
    data,
    hideLoading,
    headers
  });
};

export const del = ({ url, params, data, hideLoading = false }) => {
  return factory({
    url,
    method: "delete",
    params,
    data,
    hideLoading
  });
};
