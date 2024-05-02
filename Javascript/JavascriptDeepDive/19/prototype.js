const obj = Object.create(null);
const parents = { x: 1 };

console.log(obj); // [Object:null, prototype] {}
console.log(obj.__proto__); // undefinded
// obj.getPrototypeOf(obj);
const protoOf = Object.getPrototypeOf(obj); //객체의 프로토타입을 취득
console.log(obj.__proto__, protoOf); // undefined , null
const protoSet = Object.setPrototypeOf(obj, parents); // 객체의 프로토타입 교체
console.log(obj.__proto__, protoSet, obj, obj.x); // { x: 1 } {} {} 1

// ----------------------------------------------------------------------------------------------------

// 프로토타입의 접근하는데 사용되는 메커니즘(사물의 작용 원리나 구조)이다.
// 함수에 적용하는 prototype
function ParentFunctions(name, age) {
  this.name = name;
  this.age = age;
  this.greets = function () {
    console.log("greets");
  };
}

ParentFunctions.prototype.greet = function () {
  console.log(this.name);
};

const child = new ParentFunctions("Jay", 30);

console.log("constructor", child.constructor, ParentFunctions); //  모든 프로토타입은 constructor 프로퍼티를 갖는다. > 또한 두개는 같다 // true
console.log(child.name, child.age, child.__proto__); // Jay 30 { greet: [Function (anonymous)] }
console.log(Object.getPrototypeOf(child)); // { greet: [Function (anonymous)] }
console.log(child.__proto__ === Object.getPrototypeOf(child)); // true
// ----------------------------------------------------------------------------------------------------
// 19.4
// const objBtw = new Object();
// console.log("newObj", objBtw, objBtw.constructor, Object);

// Object.prototype 의 method를 볼까나?
// hasOwnProperty > 객체의 프로토타입 체인을 따라 검색한다. > 프로토타입 체인을 통해 상속되는 것이 아니라 객체가 특정 속성을 직접 속성으로 가지고 있는지 확인하는 데 사용됩니다.
console.log("name", child.hasOwnProperty("name")); // child 안에 key 가 존재하는지 확인한다.
console.log("age", child.hasOwnProperty("age"));

console.log(child.hasOwnProperty("greet"));

console.log(Object.prototype.hasOwnProperty.call(child, "name"));
console.log(Object.prototype.hasOwnProperty.call(child, "greet"));
