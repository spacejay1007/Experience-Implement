### clickOutSideEffect

- 이 hook 은 selectBox 또는 고정 팝업 같은 형태에서 내부를 누를때에는 닫히지 않고, 외부를 눌렀을 때 닫히게 만드는 함수 및 hook 이다

useEffect 에서는 컴포넌트 마운트 시 실행될 코드가 포함된 함수이다.

- effect 내부

  - mouseDownHandler 함수가 정의되었습니다. 이 함수는 "mousedown" 이벤트가 발생할 때마다 호출됩니다.
  - "mousedown" 이벤트를 수신하는 document에 이벤트 리스너가 추가되었습니다. 문서의 어느 곳에서나 "mousedown" 이벤트가 발생하면 mouseDownHandler 함수가 호출됩니다.

- effect return
  - 컴포넌트가 마운트 해제될 때 실행되는 정리 함수입니다. 그 목적은 메모리 누수를 방지하기 위해 효과로 생성된 모든 리소스를 정리하는 것입니다.
  - 이 경우 앞서 추가한 "mousedown" 이벤트 리스너를 제거합니다. 이 단계에서는 구성 요소가 DOM에서 제거된 후 느린 이벤트 리스너가 없는지 확인합니다.
