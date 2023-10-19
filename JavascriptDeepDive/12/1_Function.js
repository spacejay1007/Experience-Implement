// 함수 정의
// 함수 선언문
function add(x, y) {
    return x + y;
}
// 함수 표현식
var add1 = function (x, y) {
    return x + y;
};
// Function 생성자 함수
var add2 = new Function("x", "y", "return x+y");
// 화살표 함수 (ES6)
var add3 = function (x, y) {
    return x + y;
};
// 매개변수
var params = function (_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return { a: a, b: b, c: c };
};
// 참조에 의한 외부상태의 변경
var cV = function (num, obj) {
    num += 100;
    obj.name = "Kim";
};
var number = 100;
var object = { name: "Lee" };
var cNumber = 100;
var cObject = { name: "Lee" };
console.log(number, object);
cV(number, object);
cV(cNumber, cObject);
// let, const 차이 없음
console.log(number, object); // 100 { name: 'Kim' }
console.log(cNumber, cObject); // 100 { name: 'Kim' }
// 즉시 실행 함수
// 재귀 함수
function countDown(count) {
    for (var i = count; i >= 0; i--) {
        console.log(i);
    }
}
// countDown(10);
var recursiveCall = function (count) {
    if (count < 0)
        return;
    console.log(count);
    recursiveCall(count - 1);
};
recursiveCall(10);
