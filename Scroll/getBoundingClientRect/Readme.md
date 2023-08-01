## getBoundingClientRect

- element 크기 (width, height) 와 뷰포트 를 기준으로 한 위치 (left, top, right, bottom, x, y) 총 8가지 속성이 있는 DOMRect 객체를 리턴
- width, height 은 contents 뿐 아니라 padding 과 border까지 포함
- width, height를 제외한 모든 속성은 뷰포트의 top-left 기준으로 하며, 뷰퍼트를 기준으로 하는 상대적인 값이기 때문에 scroll로 인해 위치가 변경 될때 마다 값이 변경된다.
