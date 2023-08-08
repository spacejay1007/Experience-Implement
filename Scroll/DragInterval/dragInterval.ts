const dgBox = document.querySelector(".drag__box");
const state: any[] = [];
let eventFlag = false;
const dataArr = new Array(24).fill(0).map((item, idx) => {
  let itemTag = document.createElement("div")!;
  itemTag.textContent = `${idx}`;
  itemTag.className = `iterval__box`;
  dgBox?.appendChild(itemTag);

  // mouseDown(마우스 왼쪽버튼을 클릭 하고 있을 때)을 하여 eventFlag 를 true 로 만들고
  itemTag.addEventListener("mousedown", () => {
    console.log("moseDown", idx);
    eventFlag = true;
  });

  // mouseDown 이 되는 동안(eventFlag 가 true 인 동안) idx를 담아준다.
  itemTag.addEventListener("mousemove", () => {
    // console.log("mouseMove", idx);
    if (eventFlag) {
      state.push(idx);
    }
    console.log(state);
  });
  // mouseUp(마우스 왼쪽버튼을 떼어냈을 때)을 하여 eventFlag 를 false 로 만들고

  itemTag.addEventListener("mouseup", () => {
    console.log("mouseup", idx);
    eventFlag = false;
  });
});

console.log(dataArr);
// divElement?.id = dataArr;
