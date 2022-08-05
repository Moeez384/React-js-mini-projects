import "./App.css";
import React, { useState } from "react";

function DynamicInput() {
  const [person, setPerson] = useState([
    {
      name: "Moiz",
      age: 24,
      gender: "Male",
    },
    {
      name: "Rafay",
      age: 24,
      gander: "Male",
    },
  ]);

  const add = () => {
    console.log(person[1]);
    person.map((per) => {
      console.log(per.name);
    });
  };
  return (
    <div className="DynamicInput">
      <input id="firstField" type="text" placeholder="Enter the first number" />
      <input
        id="secondField"
        type="text"
        placeholder="Enter the second number"
      />
      <button id="add" onClick={add}>
        Add
      </button>
    </div>
  );
}

export default DynamicInput;
