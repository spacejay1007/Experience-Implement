const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  makeUserGender: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("err");
  },

  // 비동기 함수
  getName: (callback) => {
    const name = "Mike";
    console.log(callback);
    setTimeout(() => {
      callback(name);
      // throw new Error("eeeee");
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
        // rej("error"); // rejects
      }, 3000);
    });
  },
};

module.exports = fn;
