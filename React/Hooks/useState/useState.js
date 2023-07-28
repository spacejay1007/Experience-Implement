let state;

function useState(init) {
  if (!state) {
    state = init;
  }
  const setState = (newState) => {
    state = newState;
    render();
  };
  return [state, setState];
}

// count test
function Count() {
  const [count, setCount] = useState(1);
  window.increment = () => setCount(count + 1);

  return `
  <div>
    <strong>count: ${count} </strong>
    <button onclick="increment()">증가</button>
  </div>
  `;
}

//
function render() {
  const app = document.getElementById("app");
  app.innerHTML = Count();
}

render();
