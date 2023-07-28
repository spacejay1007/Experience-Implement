//closure > 1초뒤에 0,1,2,3,4 가 나오게 하고 싶다면?
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
} // 5,5,5,5,5

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  const functions = function (number: number) {
    setTimeout(() => {
      console.log(number);
    }, 1000);
  };
  functions(i);
}

//
function makeFunc() {
  let name = "closure";
  function dpName() {
    console.log(name);
  }
  function paramName(newName: string) {
    name = newName;
  }
  return { dpName, paramName };
}
// console.log(name); // undefined;
const newMyFuncs = makeFunc();
newMyFuncs.dpName(); // closure
newMyFuncs.paramName("changeName"); // changeName
newMyFuncs.dpName();
