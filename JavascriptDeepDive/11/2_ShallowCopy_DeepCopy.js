var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var _ = require("lodash");
var copyObj = { x: { y: 1 } };
// shallow Copy
var shallow = __assign({}, copyObj); // 스프레드 문법
console.log(shallow === copyObj); // false
console.log(shallow.x === copyObj.x); // true
var deepCopy = _.cloneDeep(copyObj);
console.log(deepCopy === copyObj); // false
console.log(deepCopy.x === copyObj.x); // false
