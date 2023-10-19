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

type param = {
  a: number;
  b: number;
  c: number;
};

// 매개변수

const params = ({ a, b, c }: param) => {
  return { a, b, c };
};

// 참조에 의한 외부상태의 변경

const cV = (num, obj) => {
  num += 100;
  obj.name = "Kim";
};
let number = 100;
let object = { name: "Lee" };
const cNumber = 100;
const cObject = { name: "Lee" };
console.log(number, object);
cV(number, object);
cV(cNumber, cObject);
// let, const 차이 없음
console.log(number, object); // 100 { name: 'Kim' }
console.log(cNumber, cObject); // 100 { name: 'Kim' }

// 즉시 실행 함수

// 재귀 함수
function countDown(count) {
  for (let i = count; i >= 0; i--) {
    console.log(i);
  }
}
countDown(10);

const recursiveCall = (count) => {
  if (count < 0) return;
  console.log(count);
  return recursiveCall(count - 1);
};

recursiveCall(10);
