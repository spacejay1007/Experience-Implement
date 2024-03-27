// Scope
function baseScope(x, y) {
    console.log(x, y);
}
// baseScope(1, 2);
// console.log(x, y); // ReferenveError : x is not defined
// 변수 의 대한 중복 선언
function varFoo() {
    var x = 1;
    var x = 2;
    console.log(x); // 2
}
// varFoo();
function conLetFoo() {
    // let 이나 const 는 block-scope 에서는 중복 선언을 허용하지 않는다.
    // Cannot redeclare block-scoped variable 'x'.
    // let x: number = 1;
    // let x: number = 2; // SyntaxError: 'x' has already been declared
    // console.log(x);
}
conLetFoo();
// 함수 레벨 스코프
var x = 1;
// function funcLevelScope() {
if (true) {
    //
    var x = 10;
}
// }
console.log(x);
// 렉시컬 스코프
var l = 1;
function lexicalScope() {
    var l = 10;
    lexiScope();
}
function lexiScope() {
    console.log(l);
}
lexicalScope();
lexiScope();
