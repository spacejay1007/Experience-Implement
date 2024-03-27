// tag 의 크기의 높이 or width 등 의 상대적인 위치 정보를 제공
var tag = document.querySelector(".tagname");
var tagHeight = tag === null || tag === void 0 ? void 0 : tag.getBoundingClientRect();
console.log(tagHeight); // 태그의 높이 값이 나옴
