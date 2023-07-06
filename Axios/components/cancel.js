"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// 취소 토큰 생성
var axiosCancel = axios_1["default"].CancelToken.source();
//
var config = {
    url: "https://reqres.in/api/users?page=2",
    method: "get",
    cancelToken: axiosCancel.token
};
(0, axios_1["default"])(config).then(function (res) {
    console.log(res.data);
});
