// 함수 정의
// 함수 선언문
function add(x, y) {
  return x + y;
}
// 함수 표현식
const add1 = function (x, y) {
  return x + y;
};
// Function 생성자 함수
const add2 = new Function("x", "y", "return x+y");
// 화살표 함수 (ES6)
const add3 = (x, y) => {
  return x + y;
};
