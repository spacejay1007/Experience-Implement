var dgBox = document.querySelector(".drag__box");
var dataArr = new Array(24).fill(0).map(function (item, idx) {
    var itemTag = document.createElement("div");
    itemTag.textContent = "".concat(idx);
    itemTag.className = "iterval__box";
    dgBox === null || dgBox === void 0 ? void 0 : dgBox.appendChild(itemTag);
    itemTag.addEventListener("mouseleave", function () {
        console.log("mouseLeave", idx);
    });
    itemTag.addEventListener("mousemove", function () {
        console.log("mouseMove", idx);
    });
    itemTag.addEventListener("mouseout", function () {
        console.log("mouseOut", idx);
    });
});
console.log(dataArr);
// divElement?.id = dataArr;
