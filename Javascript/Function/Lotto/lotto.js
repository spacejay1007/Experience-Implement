function Lotto() {
  window.inputHandler = (e) => {
    console.log(e.target.value);
  };
  window.buttonHandler = (e) => {
    // console.log("버튼 눌림");
  };

  return `<div>
            <input onchange="inputHandler()"></input>
         <button onclick="buttonHandler()">추첨</button>
      </div>`;
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = Lotto();
}

render();
