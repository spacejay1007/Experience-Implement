"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
//
var err = new Error("에러다");
var axiosCancelTokenSource = axios_1["default"].CancelToken.source(); // 취소 토큰 생성
var axiosIsCancel = axios_1["default"].isCancel(err);
console.log(err, axiosIsCancel);
