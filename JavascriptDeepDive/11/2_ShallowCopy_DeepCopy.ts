const _ = require("lodash");

const copyObj = { x: { y: 1 } };

// shallow Copy
const shallow = { ...copyObj }; // 스프레드 문법
console.log(shallow === copyObj); // false
console.log(shallow.x === copyObj.x); // true
// 얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체이다.
// 즉, 원본과 복사본은 참조값이 다른 별개의 객체이다. 하지만 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값 퍼럼 완전한 복사본을 만든다는 차이가 있다.
// 참고로 다음과 같이 원시 값을 할당한 변수를 다른 변수에 할당하는 것을 깊은 복사, 객체를 할당한 변수를 다른 변수에 할당하는 것을 얕은 복사라고 부르는 경우가 있다.

const deepCopy = _.cloneDeep(copyObj);
console.log(deepCopy === copyObj); // false
console.log(deepCopy.x === copyObj.x); // false
