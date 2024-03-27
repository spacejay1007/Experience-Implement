// 커스텀 Array 만들기
var customArr = function (arrNum, init) {
    if (init === void 0) { init = null; }
    var baseArray = [];
    var newArr = new Array(arrNum).fill(init);
    for (var i = 0; i < arrNum; i++) {
        baseArray.push(newArr);
    }
    return baseArray;
};
console.log(customArr(10), customArr(10).flat(1));
// console.log(newArr);
// [
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
// ];
