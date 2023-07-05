import Axios from "axios"; //  Module -> index.d.ts // export default axios; > ESM

const axios = Axios.create({
  headers: { "Content-Type": "application/json" },
});

// Request > interceptor 에 추가
axios.interceptors.request.use(
  (config) => {
    // console.log()
    return config;
  },
  (err) => {
    console.log(err);
  }
);

// response > interceptor 에 추가
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => console.log(err)
);
