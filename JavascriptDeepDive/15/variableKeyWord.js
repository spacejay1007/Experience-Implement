// 변수 중복 선언 허용
var duplicationAllowX = 1;
var duplicationAllowY = 2;
var duplicationAllowX = 100;
var duplicationAllowY;
console.log(duplicationAllowX, duplicationAllowY); // 100, 1
// 함수 레벨 스코프
var funcLevelScopeX = 1;
if (true) {
    var funcLevelScopeX = 10;
}
console.log(funcLevelScopeX); // 10
// for 문의 변수 선언문에서 var 키워드로 선언한 변수도 전역 변수가 된다.
var funcLevelScopeI = 1;
for (var funcLevelScopeI = 0; funcLevelScopeI < 5; funcLevelScopeI++) {
    console.log(funcLevelScopeI); // 0,1,2,3,4
}
var funcLevelScopeLetI = 1;
for (var funcLevelScopeLetI_1 = 0; funcLevelScopeLetI_1 < 5; funcLevelScopeLetI_1++) {
    console.log(funcLevelScopeLetI_1); // 0,1,2,3,4
}
console.log(funcLevelScopeI); // 5
console.log(funcLevelScopeLetI); // 1
// let 키워드
// // 변수 중복 선언 금지
var varsFoo = 123;
var varsFoo = 456;
// let letsFoo = 123;
// let letsFoo = 456; // 중복 선언 되었다고 error
// // 블록 레벨 스코프
var blockLevelFoo = 1;
{
    // 지역 변수
    var blockLevelFoo_1 = 2;
    var blockLevelbar = 3;
}
console.log(blockLevelFoo);
// console.log(blockLevelbar); // 레퍼런스 에러
console.log(window);
