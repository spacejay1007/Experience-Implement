Record는 TypeScript에서 사용되는 제네릭 타입 중 하나로, 객체의 타입을 정의할 때 유용합니다. Record의 기본 구조는 다음과 같습니다:

````ts
type Record<K extends keyof any, T> = {
  [P in K]: T;
};```
````

- K는 속성 이름의 유니언 타입을 나타내며 keyof any로부터 파생됩니다. 이것은 객체의 속성 이름을 나타내는 문자열 또는 숫자의 유니온 타입이 됩니다.
- T는 객체의 속성 값의 타입을 나타냅니다.

예를 들어, Record<string, number>는 문자열 속성 이름을 갖고 각 속성의 값은 숫자인 객체를 정의합니다. 아래는 몇 가지 예제이다.

```ts
const obj: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
};

const person: Record<string, string> = {
  name: "John",
  age: "30",
};

const point: Record<"x" | "y", number> = {
  x: 10,
  y: 20,
};
```

LagnURL의 타입은 아래와 같이 할 수 있다.

```ts
const langURL: Record<
  "ko",
  "ja",
  Record<"installFile" | "diagnosticFile", string>
> = {
  ko: {
    installFile: `$/MIUP/manual/metieye_agent.pdf`,
    diagnosticFile: `$/MIUP/manual/metieye_manual.pdf`,
  },
  ja: {
    installFile: `$/MIUP/manual/metieye_agent_ja.pdf`,
    diagnosticFile: `$/MIUP/manual/metieye_manual_ja.pdf`,
  },
};
```
