// 폴더내에 있는 모든 .test 또는 __tests__ 를 찾아 Test 를 진행한다.

const fn = require("./fn");

test("1은 1이야", () => {
  expect(1).toBe(1); // expect > 검증할 값 ,toBe > 기대값
});

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5야.", () => {
  expect(fn.add(3, 3)).toBe(5);
});
