const log = console.log;

// const applyFunc = (f) => f(1);
// const add = (a) => a + 2;

// log(applyFunc(add)); // 3
// log(applyFunc((a) => a - 1)); // 0

// const timeFunc = (t, n) => {
//   let i = -1;
//   while (++i < n) t(i);
// };

// timeFunc(log, 3); // 0 1 2
// timeFunc((a) => log(a + 10), 3); // 10 11 12

// const addMaker = (a) => (b) => a + b;
// const add10 = addMaker(10);
// log(add10(5)); // 15
// log(add10(10)); // 20

const mapFunc = (f, iter) => {
  let arr = [];
  for (const a of iter) {
    // arr.push(f(a)); // tS 에서는 에러임으로 잠시 log 주석
  }
  return arr;
};

log(mapFunc((el) => el.nodeName, document.querySelectorAll("*")));
// 개발자 도구에서 했을 경우 ['HTML', 'HEAD', 'TITLE', 'META', 'STYLE', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'META', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'META', 'META', 'META', 'META', 'META', 'STYLE', 'SCRIPT', 'SCRIPT', 'LINK', 'META', 'META', 'META', 'META', 'META', 'META', 'META', 'META', 'META', 'META', 'BODY', 'DIV', 'DIV', 'DIV', 'DIV', 'DIV', 'DIV', 'A', 'svg', 'path', 'A', 'DIV', 'BUTTON', 'DIV', 'DIV', 'svg', 'path', 'A', 'svg', 'path', 'BUTTON', 'DIV', 'DIV', 'IMG', 'svg', 'path', 'DIV', 'DIV', 'DIV', 'DIV', 'A', 'svg', 'path', 'A', 'DIV', 'BUTTON', 'DIV', 'DIV', 'svg', 'path', 'A', 'svg', 'path', 'BUTTON', 'DIV', 'DIV', 'IMG', …]
