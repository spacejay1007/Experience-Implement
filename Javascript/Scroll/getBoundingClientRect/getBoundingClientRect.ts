// 태그 정보가 있어야 한다. React에서는 ref.current 가 예시가 된다.
// tag 의 크기의 높이 or width 등 의 상대적인 위치 정보를 제공
const tag = document.querySelector(".tagname");
const tagHeight = tag?.getBoundingClientRect();

console.log(tagHeight); // 태그의 높이 값이 나옴
