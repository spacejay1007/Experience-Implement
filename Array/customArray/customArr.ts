// 커스텀 Array 만들기
const customArr = (arrNum: number, init = null) => {
  const baseArray: any[] = [];
  const newArr = new Array(arrNum).fill(init);

  for (let i = 0; i < arrNum; i++) {
    baseArray.push(newArr as any[]);
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
