/** useMemo에 대해서 예제로 공부 */

// 로또번호 제조 함수
function getWinNumber() {
  // prettier-ignore
  const candidate = Array(45).fill(0).map((v, i) => i + 1);
  const shuffle: number[] = [];
  while (candidate.length > 0) {
    const ramdomIdx = Math.floor(Math.random() * candidate.length);
    const [number] = candidate.splice(ramdomIdx); // splice는 배열을 봔환하므로,배열 구조 분해 할당을 사용하여 첫 번째 요소를 추출

    if (number !== undefined) shuffle.push(number); // 'number'가 undefined가 아닌 경우에만 shuffle에 추가
  }

  const bonusNum = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  console.log([...winNumbers, bonusNum]);
  return [...winNumbers, bonusNum];
}

getWinNumber();
