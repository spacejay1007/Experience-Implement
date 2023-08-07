const dgBox = document.querySelector(".drag__box");
const dataArr = new Array(24).fill(0).map((item, idx) => {
  let itemTag = document.createElement("div")!;
  itemTag.textContent = `${idx}`;
  itemTag.className = `iterval__box`;
  dgBox?.appendChild(itemTag);

  itemTag.addEventListener("mouseleave", () => {
    console.log("mouseLeave", idx);
  });
  itemTag.addEventListener("mousemove", () => {
    console.log("mouseMove", idx);
  });
  itemTag.addEventListener("mouseout", () => {
    console.log("mouseOut", idx);
  });
});
console.log(dataArr);
// divElement?.id = dataArr;
