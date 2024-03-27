// 전역 변수의 문제점
// 변수의 생명 주기
var global = "global";
function lifeCycle() {
    console.log(global);
    var global = "local";
}
lifeCycle();
console.log(global);
//
