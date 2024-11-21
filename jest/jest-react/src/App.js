import "./App.css";
import Test from "./components/Test";
import Timer from "./components/Timer";

const user = {
  name: "Mike",
  age: 30,
};

function App() {
  return (
    <div className="App">
      {/* <Test user={user} /> */}
      <Timer />
    </div>
  );
}

export default App;
