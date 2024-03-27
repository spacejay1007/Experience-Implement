## AXIOS 관련 공부

<hr />

### Axios.Cancel

### Axios Types

- cancelToken
  - AxiosRequestConfig 의 method 확인 시 cancelToken 을 넣어줘야한다.
  - CancelToken 의 Type은 promise의 필수 값과 그 외의 값을 받는다.
  - axiosCancelTokenSource 은 cancelTokenSorce 를 출력해준다.
  - source 는 cancel 과 promise 를 반환

### Axios Interceptors

- request와 response가 then 또는 catch로 처리되기 전에 가로챌 수 있게 해주는 axios 라이브러리
- api 요청시 반복되는 부분을 줄일 수 있다.
  - 배포된 서버에 api 요청 시 header에 필수적으로 들어가야하는 부분이 있을 경우, 매번 요청 때마다 header에 값을 넣어서 처리하는 것이 아닌 interceptors를 사용하여 api요청 시 header에 코드를 넣어주어 값을 넣지 않아도 되며, 코드가 간결해지고 복잡성도 줄어든다는 장점이 있다.
- 특정 에러를 캐치해서 작업을 진행시켜야 할 경우
  - 로그인 연장에서는 최고의 기능
  - interceptor를 사용하기 전에는 access token이 만료되는 것을 방지하기 위해서 페이지가 새로고침 될 때마다 accessToken을 발급받는 api를 호출 해야 했는데 이렇게 될 경우 이전 accessToken과 이후 accessToken이 달라서 api 호출 시 토큰 문제로 api에서 값을 받아오지 못하는 등의 문제들이있다.
- interceptors 는 index.ts 에서 진행하였다.

  ##### 기본세팅

  ```ts
  const api = axios.create({
    baseURL: "url",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json,",
    },
    withCredentials: true,
  });
  ```

  - baseURL을 생성하면 api 호출시 URL을 반복해서 입력하지 않아도 된다.
