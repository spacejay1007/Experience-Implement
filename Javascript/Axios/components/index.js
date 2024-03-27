"use strict";
exports.__esModule = true;
var axios_1 = require("axios"); //  Module -> index.d.ts // export default axios; > ESM
var axios = axios_1["default"].create({
    headers: { "Content-Type": "application/json" }
});
// Request > interceptor
axios.interceptors.request.use(function (config) {
    // console.log()
    console.log(config); // config 가 어찌 되어있는 보고 싶다
    return config;
}, function (err) {
    console.log("Request Err : ".concat(err));
});
// response interceptor
axios.interceptors.response.use(function (res) {
    return res;
}, function (err) {
    console.log("Response Err : ".concat(err));
});
axios.get("https://reqres.in/api/users?page=2").then(function (res) {
    console.log(res.data);
    return res;
});
