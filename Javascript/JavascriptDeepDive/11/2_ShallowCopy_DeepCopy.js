var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _ = require("lodash");
var copyObj = { x: { y: 1 } };
// shallow Copy
var shallow = __assign({}, copyObj); // 스프레드 문법
console.log(shallow === copyObj); // false
console.log(shallow.x === copyObj.x); // true
// 얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체이다.
// 즉, 원본과 복사본은 참조값이 다른 별개의 객체이다. 하지만 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값 퍼럼 완전한 복사본을 만든다는 차이가 있다.
// 참고로 다음과 같이 원시 값을 할당한 변수를 다른 변수에 할당하는 것을 깊은 복사, 객체를 할당한 변수를 다른 변수에 할당하는 것을 얕은 복사라고 부르는 경우가 있다.
var deepCopy = _.cloneDeep(copyObj);
console.log(deepCopy === copyObj); // false
console.log(deepCopy.x === copyObj.x); // false
var person = {
    name: "Lee"
};
var personCopy = person; // 얕은 복사
console.log(person === personCopy); // true
personCopy.name = "Kim";
person.address = "Seoul";
console.log(personCopy); // { name: 'Kim', address: 'Seoul' }
console.log(person); // { name: 'Kim', address: 'Seoul' }
// 비교 연산자
var p1 = {
    name: "Lee"
};
var p2 = {
    name: "Lee"
};
console.log(p1 === p2); // false
console.log(p1.name === p2.name); // true
