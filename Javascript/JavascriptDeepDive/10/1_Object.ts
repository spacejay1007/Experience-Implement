const obj = {
  name: "kim",
  // sayHello : () => {
  //   console.log(`Hello~~~ my name is ${this.name}`);
  // }
  // sayHello() {
  //   console.log(`Hello~~~ my name is ${this.name}`);
  // }, // 이 방법으로 써줘야 에러가 나오지 않는다!!
  // 처음 방법인 화살표 함수로 작성하였더니 typescript 에서 에러 발견 되어 확인을 해보았다. TypeScript에서는 특히 화살표 함수를 사용할 때 함수 내 this와 관련된 문제가 발생할 수 있습니다. 코드의 오류를 해결하려면 함수의 this 매개변수를 사용하여 this 유형을 명시적으로 정의할 수 있습니다.
  sayHello: function () {
    console.log(`Hello~~~ my name is ${this.name}`);
  },
};

console.log(typeof obj); //object
console.log(obj); // { name: 'kim', sayHello: [Function: sayHello] }

const person: any = {
  lastName: "Kim", // lastName:"Kim " 과 같다.
  1: 10,
};

// console.log(person."lastName"); // Identifier expected. || SyntaxError:Unexpected String
console.log(person.lastName); // Kim
console.log(person["lastName"]); // Kim
// console.log(person.1);  // ',' expected.
// console.log(person."1"); // Identifier expected.|| SyntaxError:Unexpected String
console.log(person[1]); // 10
console.log(person["1"]); // 10

// 프로퍼티 값 갱신
person.lastName = "Jim";
console.log(person.lastName); // Jim

// 프로퍼티 동적 생성
person.age = 30; // person 의 타입이 any 로 되어있어야 한다.
console.log(person); // { '1': 10, lastName: 'Jim', age: 30 }

// 프로퍼티 삭제
delete person.age;
console.log(person); // { '1': 10, lastName: 'Jim' }
