### 고차함수

---

- 함수를 값으로서 다루는 함수
- 함수를 인자로 받아서 실행 할 수 있는 함수

`const applyFunc = (f) => f(1);` applyFunc 의 인자(f)는 함수를 받아야만하며, 인수 값에 1을 넣어준다.

`const add = (a) => a + 2;` add 는 함수이고 인자 a 의 숫자를 받아 더해주는 함수이다.

```ts
const timeFunc = (t, n) => {
  let i = -1;
  while (++i < n) t(i);
};
// 이 timeFunc의 인자 값인 t의 값은 함수, n은 숫자를 말한다.
// i 는 0 부터 시작을 하고(-1부터라고 생각하는데 i + 1 이기 떄문에 0부터이다, 만약 i=-2 라면 -1 부터 log 가 찍힌다.  ) n 보다 작을때만 함수를 계속 실행한다.
```

- 새로운 함수를 만들어서 반환하는 함수를 고차 함수라고 할 수 있다.
  ```ts
  const addMaker = (a) => (b) => a + b;
  const add10 = addMaker(10);
  log(add10(5)); // addMaker
  // add10 = addMaker = (10) => (5) => 10 + 5 이다
  log(add10(10));
  // add10 = addMaker = (10) => (10) => 10 + 10 이다
  ```

#### map, filter, reduce 함수 및 중첩 사용

위에서 다룬 고차함수를 사용하려면 map, filter, reduce 를 중첩하여 사용하고 함수형 사고 학습을 계속 적으로 해야한다.

다시 한번 공부해보자면

- map
- 배열을 순회하여 새로운 배열을 생성하는 함수 (중요하다 새로운), 배열의 순서와 길이가 보장

  ```ts
  const mapFunc = (f, iter) => {
    let arr = [];
    for (const a of iter) {
      arr.push(f(a));
    }
    return arr;
  };

  log(mapFunc((el) => el.nodeName, document.querySelectorAll("*")));
  // 개발자 도구에서 했을 경우 ['HTML', 'HEAD', 'TITLE', 'META', 'STYLE', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'META', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'SCRIPT', 'META', 'META', 'META', 'META', 'META', 'STYLE', 'SCRIPT', 'SCRIPT', 'LINK', 'META', 'META', 'META', 'META', 'META', 'META', 'META', 'META', 'META', 'META', 'BODY', 'DIV', 'DIV', 'DIV', 'DIV', 'DIV', 'DIV', 'A', 'svg', 'path', 'A', 'DIV', 'BUTTON', 'DIV', 'DIV', 'svg', 'path', 'A', 'svg', 'path', 'BUTTON', 'DIV', 'DIV', 'IMG', 'svg', 'path', 'DIV', 'DIV', 'DIV', 'DIV', 'A', 'svg', 'path', 'A', 'DIV', 'BUTTON', 'DIV', 'DIV', 'svg', 'path', 'A', 'svg', 'path', 'BUTTON', 'DIV', 'DIV', 'IMG', …]
  // document.querySelectorAll() 은 Array를 상속 받지 않기 때문에 map 함수를 사용 할 수 없다. 하지만 이터러블 프로토콜을 따르고 있기 때문에 순환은 가능
  ```

```

- filter
-
- reduce
-
```
