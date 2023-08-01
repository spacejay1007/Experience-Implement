## IntersectionObserver

```tsx
declare var IntersectionObserver: {
  prototype: IntersectionObserver;
  new (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ): IntersectionObserver;
};
```

### entry

- boundingClientRect: 관찰 대상의 사각형 정보 (target의 정보를 반환)
  - getBoundingClientRect()를 사용 하면 같은 값을 얻을 수 있다.
  - (bottom, height, left, right, top, width, x, y)
  - DOMRectReadOnly {x: 8, y: 6124, width: 1904, height: 0, top: 6124, …}
- intersectionRatio: 관찰 대상의 교차한 영역 백분율(intersectionRect 영역에서 boundingClientRect 영역까지 비율, Number)
  - target 과 root 가 얼마나 교차되는 지를 수치로 반황.
  - 0.0 ~ 1.0 사이 숫자로 반환
  - 0
- intersectionRect: 관찰 대상의 교차한 영역 정보
  - DOMRectReadOnly {x: 0, y: 0, width: 0, height: 0, top: 0, …}
- isIntersecting: 관찰 대상의 교차 상태(Boolean)
  - target 과 root 가 교차된 상태인지 true / false (boolean) 반환
  - 예시에서 볼 때에 .list의 100번째에 도달할 때에 true로 변경된다.
  - false
- isVisible:
  - false
- rootBounds: 지정한 루트 요소의 사각형 정보
  - DOMRectReadOnly {x: 0, y: 0, width: 1920, height: 931, top: 0, …}
- target: 관찰 대상 요소 (Element)
  - p.list-end
- time: 변경이 발생한 시간 정보
  - 93.69999998807907

observer.observe(document.querySelector(".list-end")); // 대상 요소의 관찰을 시작
observer.unobserve(document.querySelector(".list-end")); // 대상 요소의 관찰을 중지하는 것
