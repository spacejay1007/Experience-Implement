/** useMemo에 대해서 예제로 공부 */
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
// 로또번호 제조 함수
function getWinNumber() {
  // prettier-ignore
  var candidate = Array(45).fill().map(function (v, i) { return i + 1; });
  var shuffle = [];
  while (candidate.length > 0) {
    var ramdomIdx = Math.floor(Math.random() * candidate.length);
    var number = candidate.splice(ramdomIdx)[0]; // splice는 배열을 봔환하므로,배열 구조 분해 할당을 사용하여 첫 번째 요소를 추출
    if (number !== undefined) shuffle.push(number); // 'number'가 undefined가 아닌 경우에만 shuffle에 추가
  }
  var bonusNum = shuffle[shuffle.length - 1];
  var winNumbers = shuffle.slice(0, 6).sort(function (p, c) {
    return p - c;
  });
  console.log(
    __spreadArray(__spreadArray([], winNumbers, true), [bonusNum], false)
  );
  return __spreadArray(__spreadArray([], winNumbers, true), [bonusNum], false);
}
getWinNumber();
