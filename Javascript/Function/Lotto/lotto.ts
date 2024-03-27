function Lotto() {
  return `<main>
    <input></input>
    <div>하이</div>
    </main>`;
}

function render() {
  const app = document.getElementById("app");
  app?.innerHTML = Lotto();
}

render();
