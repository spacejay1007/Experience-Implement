// const setTimeoutPromise = (cb, ms) => {
//   new Promise((res, rej): void => {
//     setTimeout(() => {
//       cb();
//       res();
//       // console.log("3초뒤");
//     }, ms);
//   });
// };

// 현재 에러는 tsConfig 가 없으므로 적용되지 않는다 ES5까지만 적용을 tsc로 적용을 할 수 있기 때문에
const delayTime = (ms: number): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
