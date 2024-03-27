export function regExTest(target: any, method: string) {
  const regExp = /is/;
  //
  const regTestResult = regExp[method](target);

  return regTestResult;
}

export function regExStringTest(target: any, method: string) {
  const regExp = /is/g;
  //
  const regTestResult = target[method](regExp);

  return regTestResult;
}

const testText = "Is this all there is?";
const testLoText = "is this all there is?";

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
console.log(testText.replace(/is/g, "0")); // Is th0 all there 0?
console.log(testLoText.replace(/is/g, "0")); // 0 th0 all there 0?
console.log(testText.replace(/is/, "0")); // Is th0 all there is?
console.log(testLoText.replace(/is/, "0")); // 0 this all there is?
