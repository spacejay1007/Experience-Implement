var count = 100; // 한 번 새로운 item들이 추가될 때 추가되는 item의 갯수
var index = 0; // item의 index
// 옵션 객체
var options = {
    // null을 설정하거나 무엇도 설정하지 않으면 브라우저 viewport가 기준이 된다.
    root: null,
    rootMargin: "200px 0",
    // 타겟 요소의 10%가 루트 요소와 겹치면 콜백을 실행한다.
    threshold: 0.1, // 0.0 ~ 1.0 까지
};
var observer = new IntersectionObserver(function (entries, observers) {
    entries.forEach(function (entry) {
        var list = document.querySelector(".list");
        // 타겟 요소와 루트 요소가 교차하면
        if (entry.isIntersecting) {
            for (var i = index; i < index + count; i++) {
                // item을 count 숫자 만큼 생성하고 list에 추가해주기
                var item = document.createElement("p");
                item.textContent = String(i); // textContent 는 string을 받을 수 있어서 i를 string 으로 변경
                item.className += "item";
                list.appendChild(item); // div tag className="list" 에 자식 element로 넣기
            }
            // index에 +count해서 갱신해주기 > isIntersecting : true 시 100 을 추가
            index += count;
        }
    });
}, options);
// list의 끝부분을 알려주는 p 타겟 요소를 관찰
observer.observe(document.querySelector(".list-end"));
