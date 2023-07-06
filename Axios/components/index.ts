import Axios from "axios"; //  Module -> index.d.ts // export default axios; > ESM

const axios = Axios.create({
  headers: { "Content-Type": "application/json" },
});

// Request > interceptor
axios.interceptors.request.use(
  (config) => {
    // console.log()
    console.log(config); // config 가 어찌 되어있는 보고 싶다
    return config;
  },
  (err) => {
    console.log(`Request Err : ${err}`);
  }
);

// response interceptor
axios.interceptors.response.use(
  (res) => {
    return res;
  },

  (err) => {
    console.log(`Response Err : ${err}`);
  }
);

axios.get("https://reqres.in/api/users?page=2").then((res) => {
  console.log(res.data);
  return res;
});
