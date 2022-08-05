import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  let [current, setCurrent] = useState(new Date().toLocaleString());
  let increamentCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload. {count}
        </p>
        <div>
          <button id="incrementButton" onClick={increamentCount}>
            +
          </button>
          <button id="decrementButton" onClick={decrementCount}>
            -
          </button>
        </div>
        <div>
          <button id="resetButton" onClick={resetCount}>
            Reset
          </button>
        </div>
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
