// tag 의 크기의 높이 or width 등 의 상대적인 위치 정보를 제공
const tag = document.quertSelector(".tagname");
const tagHeight = tag?.getBoundingClientRect().height;

console.log(tagHeight); // 태그의 높이 값이 나옴
