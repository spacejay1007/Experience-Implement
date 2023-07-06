"use strict";
exports.__esModule = true;
var axios_1 = require("axios"); //  Module -> index.d.ts // export default axios; > ESM
var axios = axios_1["default"].create({
    headers: { "Content-Type": "application/json" }
});
// Request > interceptor 에 추가
axios.interceptors.request.use(function (config) {
    // console.log()
    console.log(config);
    return config;
}, function (err) {
    console.log(err);
});
// response > interceptor 에 추가
axios.interceptors.response.use(function (res) {
    return res;
}, function (err) { return console.log(err); });
axios
    .get("https://reqres.in/api/users?page=2")
    .then(function (res) { return console.log(res.data); });
