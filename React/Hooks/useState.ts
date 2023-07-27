let currentStateKey = 0;
const states: any[] = [];

function useState(initialState: any) {
  const key = currentStateKey;

  if (states.length === currentStateKey) {
    states.push(initialState);
  }

  const state = states[key];

  const setState = (newState) => {
    states[key] = newState;
    // render();
  };

  currentStateKey += 1;

  return [state, setState];
}
