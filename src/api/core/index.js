import axios from "axios";

const request = axios.create({
  baseURL: "http://192.168.0.29:5000/api",
});

request.defaults.timeout = 2500;

// request.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// request.interceptors.response.use(
//   (response) => {
//     const res = response.data;
//     return res;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

export default request;
