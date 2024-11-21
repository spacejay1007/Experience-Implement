const fn = require("../fn");

// done 이라는 함수는 비동기일때 사용하는 함수 이고 만약 done 이 없다면 비동기를 체크 하지 않고 test 함수 안에 있는 callback 함수가 바로 사용되어서 통과되어버린다.
// test("3초 뒤에 이름을 알려줘!", (done) => {
//   function callback(name) {
//     expect(name).toBe("Mike");
//     done();
//   }

//   // expect(fn.getName()).toBe("Mike");
//   fn.getName(callback);
// });

// try... catch 문
// test("3초 뒤에 이름을 알려줘!", (done) => {
//   try {
//     function callback(name) {
//       expect(name).toBe("Mike");
//       done();
//     }
//   } catch (err) {
//     done();
//   }
//   // expect(fn.getName()).toBe("Mike");
//   fn.getName(callback);
// });

// Promise 면 done 을 넘겨주지 않아도 괜찮다 => Promise 의 테스트는 꼭 return 을 작성해줘야한다.
// resolves, rejects > matcher
// test("3초 후에 받아온 나이는 30", () => {
//   // 1
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
//   // 2 Resolves
//   // return expect(fn.getAge()).resolves.toBe(30);

//   // 3 Rejects
//   // return expect(fn.getAge()).rejects.toMatch("error");
// });

// async 사용하는 방법
test("3초 후에 받아온 나이는 30", async () => {
  // const age = await fn.getAge();
  // expect(age).toBe(30);

  // async 에서도 resolve , rejects 를 사용할 수 있음
  await expect(fn.getAge()).resolves.toBe(30);
});
