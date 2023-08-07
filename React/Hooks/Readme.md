## Hook 만들어보기

- 예전부터 Hooks를 vanillaJS 로 어떻게 만들까...? 라는 생각을 했다.. 그저 대단하다.. react.. 라고 생각만 할 뿐 실행에 옮기지 못함..
- typescript 를 공부하면서 react 의 type 이 궁금해진.. 나 자신... 까보기 시작...
- 어라? 만들어보자.. 한번.. 공부 해보자.. 공부한다고 돈드는거 아니니 한번 해보자!!!

### useState

- useState hook을 만들기 위해서는 closure의 원리를 아는게 좋겠다라는 생각을 하여(closure를 사용하지는 않았다.), 뜻밖에 closure 공부를 다시 해보게 되었다.
  - `../../Closure/index.html` 의 경로의 html 구현된 내용을 보면 useState의 기본적인 내용이 나와 있는것 같다라는 생각이 들었다.

```ts
let state; // 함수 바깥에서 state를 관리 하기 때문에 state가 유지

function useState(init) {
  // state 값 즉, init 값이 없을때만 초기화
  if (!state) {
    state = init; // state를 정의
  }
  const setState = (newState) => {
    state = newState; // 새로운 state를 할당
    render(); // 렌더를 실행
  };
  return [state, setState];
}

// count test
function Count() {
  const [count, setCount] = useState(1); // state에는 항상 1
  window.increment = () => setCount(count + 1);

  return `
  <div>
    <strong>count: ${count} </strong>
    <button onclick="increment()">증가</button>
  </div>
  `;
}

//
function render() {
  const app = document.getElementById("app");
  app.innerHTML = Count();
}

render();
```

- 위 형식의 useState는 number 형식으로만 가능하게 작업 해보았다.
  1. useState로 state와 setState 를 만든다.
  2. 값이 1씩 증가한다.
  3. setCount 가 실행 하면 다시 렌더링이 실행한다.
  4. 렌더링이 실행 되면 Count 가 다시 실행 된다.
  5. Count 컴포넌트가 다시 실행 되어도 count의 값은 초기화 되지 않고 유지
