// const setTimeoutPromise = (cb, ms) => {
//   new Promise((res, rej): void => {
//     setTimeout(() => {
//       cb();
//       res();
//       // console.log("3초뒤");
//     }, ms);
//   });
// };
var delayTime = function (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
};
