// 부등호

const fn = require("../fn");

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK_ORDER"; // length === 15
  // expect(id.length).toBeLessThanOrEqual(10); // test 실패
  expect(id.length).toBeLessThanOrEqual(16);
});
test("비밀번호 4자리.", () => {
  const pw = "1234";
  // 비밀번호의 정확하게 몇자리만 받고 싶을때는 toBe / toEqual 을 사용하면 된다.
  expect(pw.length).toBe(4);
});

// 소수점 더하기
test("0.1 더하기 0.2 는 0.3 입니다.", () => {
  // expect(fn.add(0.1, 0.2)).toBe(0.3); // Received: 0.30000000000000004
  // 위의 0.1 과 0.2 의 더하기가 0.3 이 아닌 이유는 컴퓨터는 2진법을 사용하기 때문이다.
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3); // 가까운지 근사치인지 확인하는 것
});

// 정규 표현식과 toMatch  를 통하여 확인
test("Hello World 에 a 라는 글자가 있나?", () => {
  // expect("Hello World").toMatch(/H/);
  expect("Hello World").toMatch(/H/i); // 대소문자 구분 없이
});

// toContain > 배열에서 특정 요소가 있는지 확인
test("유저 리스트에서 Mike가 있는지 확인해보자!", () => {
  const user = "Mike";
  // const userList = ["Jane", "Tom", "Kai"]; // Mike 가 없어서 에러가 난다.
  const userList = ["Jane", "Mike", "Kai"];

  expect(userList).toContain(user);
});

// 에러 확인 > 특정에러가 발생했을때 특정적인 메세지가 무엇인지 확인 하는 toThrow
test("에러가 납니까?", () => {
  expect(() => fn.throwErr()).toThrow("err");
});
