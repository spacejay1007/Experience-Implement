var dgBox = document.querySelector(".drag__box");
var state = [];
var eventFlag = false;
var dataArr = new Array(24).fill(0).map(function (item, idx) {
    var itemTag = document.createElement("div");
    itemTag.textContent = "".concat(idx);
    itemTag.className = "iterval__box";
    dgBox === null || dgBox === void 0 ? void 0 : dgBox.appendChild(itemTag);
    // itemTag.addEventListener("mouseleave", () => {
    //   console.log("mouseLeave", idx);
    // });
    // itemTag.addEventListener("mousemove", () => {
    //   console.log("mouseMove", idx);
    // });
    // itemTag.addEventListener("mouseout", () => {
    //   console.log("mouseOut", idx);
    // });
    itemTag.addEventListener("mousedown", function () {
        console.log("moseDown", idx);
        eventFlag = true;
    });
    itemTag.addEventListener("mousemove", function () {
        // console.log("mouseMove", idx);
        if (eventFlag) {
            console.log(idx);
        }
    });
    itemTag.addEventListener("mouseup", function () {
        console.log("mouseup", idx);
        eventFlag = false;
    });
});
console.log(dataArr);
// divElement?.id = dataArr;
