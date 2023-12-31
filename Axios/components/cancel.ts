import axios, { AxiosError } from "axios";

// 취소 토큰 생성
const axiosCancel = axios.CancelToken.source();

// config 만들어줌
const config = {
  url: "https://reqres.in/api/users?page=2",
  method: "get",
  cancelToken: axiosCancel.token, // 생성된 토근의 토큰을 전달
};

// HTTP 요청 보내기
axios(config)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err: AxiosError) => {
    if (axios.isCancel(err)) {
      console.log("Request canceled", err.message);
    } else {
      console.log(err);
    }
  });
