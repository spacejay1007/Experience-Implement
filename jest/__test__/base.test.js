// 폴더내에 있는 모든 .test 또는 __tests__ 를 찾아 Test 를 진행한다.

const fn = require("../fn");

test("1은 1이야", () => {
  expect(1).toBe(1); // expect > 검증할 값 ,toBe > 기대값
});

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5가 아니야.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("이름과 나이를 전달받아서 객체를 반환하자", () => {
  // 객체나 배열은 재귀적으로 확인해야 하기 때문에 실패 그러므로 Equal 을 사용해야 한다.
  // expect(fn.makeUser("jay", 30)).toBe({
  //   name: "jay",
  //   age: 30,
  // });

  expect(fn.makeUser("jay", 30)).toEqual({
    name: "jay",
    age: 31,
  });
});

// toEqual 과 toStrictEqual 의 비교
test("이름과 나이를 전달받아서 객체를 반환하자", () => {
  expect(fn.makeUserGender("jay", 30)).toEqual({
    name: "jay",
    age: 30,
  });
});

test("이름과 나이를 전달받아서 객체를 반환하자", () => {
  // toStirctEqual 은 좀 더 명확하게 작성해줘야한다.
  expect(fn.makeUserGender("jay", 30)).toStrictEqual({
    name: "jay",
    age: 30,
    gender: undefined,
  });
});
