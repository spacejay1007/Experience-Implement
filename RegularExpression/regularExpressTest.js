"use strict";
exports.__esModule = true;
exports.regExStringTest = exports.regExTest = void 0;
function regExTest(target, method) {
    var regExp = /is/;
    //
    var regTestResult = regExp[method](target);
    return regTestResult;
}
exports.regExTest = regExTest;
function regExStringTest(target, method) {
    var regExp = /is/g;
    //
    var regTestResult = target[method](regExp);
    return regTestResult;
}
exports.regExStringTest = regExStringTest;
var testText = "Is this all there is?";
var testLoText = "is this all there is?";
/** exec */
console.log(regExTest(testText, "exec")); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
console.log(regExTest(testLoText, "exec"));
// [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
// [ 'is', index: 0, input: 'is this all there is?', groups: undefined ]
/** test */
console.log(regExTest(testText, "test")); // true
console.log(regExTest(testLoText, "test")); // true
/** match */
console.log(regExStringTest(testText, "match")); // ["is","is"]
console.log(regExStringTest(testLoText, "match")); // [""is","is","is"]
/** replace */ // 가장 많이 사용했던 것
console.log(testText.replace(/is/g, "0")); //
console.log(testLoText.replace(/is/g, "0")); //
console.log(testText.replace(/is/, "0")); //
console.log(testLoText.replace(/is/, "0")); //
