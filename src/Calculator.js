import "./App.css";
import React, { useState } from "react";

function Calculator() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);

  const handleFirstField = (e) => {
    setNum1(e.target.value);
    console.log(num1);
  };

  const handleSecondField = (e) => {
    setNum2(e.target.value);
    console.log(num2);
  };

  const calculateTotal = () => {
    var value = parseInt(num1) + parseInt(num2);
    console.log(value);
  };

  return (
    <div className="Calculator">
      <input
        id="firstField"
        type="text"
        value={num1}
        onChange={handleFirstField}
        placeholder="Enter the first number"
      />
      <input
        id="secondField"
        type="text"
        value={num2}
        onChange={handleSecondField}
        placeholder="Enter the second number"
      />

      <button id="calculateButton" onClick={calculateTotal}>
        Calculate
      </button>
    </div>
  );
}

export default Calculator;
