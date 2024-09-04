// boolean 파일만 실행하고 싶을때는 npm test 파일명으로 작성해준다. > 예시 npm test boolean

const fn = require("../fn");

test("0은 False", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});
test("Hello World는 True", () => {
  expect(fn.add("hello", "World")).toBeTruthy();
});
