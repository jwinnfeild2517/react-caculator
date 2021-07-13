import React, { useState, useEffect } from "react";
import './style.css'
import caculate from "./Caculate";

export default function App() {
  const [args, setarguments] = useState({
    first_number: "",
    second_number: "",
    operator: ""
  });
  const [answer, setAnswer] = useState();

  const clearForm = () => {
    setarguments({
      first_number: "",
      second_number: "",
      operator: ""
    });
    setAnswer("");
  };

  const setValue = (valueName, numberValue) => {
    setarguments((prevState) => ({
      ...prevState,
      [valueName]: prevState[valueName] + `${numberValue}`
    }));
  };

  const buttonsArray = [];
  const OperatorArray = ["+", "-", "/", "+", "*"];

  for (let numberValue = 0; numberValue < 10; numberValue++) {
    let argsName = args.operator === "" ? "first_number" : "second_number";
    buttonsArray.push(
      <button onClick={() => setValue(argsName, numberValue)}>
        {numberValue}
      </button>
    );
  }

  let valueShown = "";

  if (!answer) {
    valueShown = `
      ${args.first_number}
      ${args.operator}
      ${args.second_number}`;
  } else {
    valueShown = answer;
  }

  return (
    <div className="App">
      <h1>Calc</h1>
      <div className="displayNum">
        <h1>{valueShown}</h1>
      </div>
      <div className="inputButtons">
        {buttonsArray}
        {OperatorArray.map((operator) => (
          <button onClick={() => setValue("operator", operator)}>
            {operator}
          </button>
        ))}
      </div>
      <div className="action-buttons">
        <button onClick={clearForm}>Clear</button>
        <button onClick={() => setAnswer(caculate(args.operator, args.first_number, args.second_number))}>
          =
        </button>
      </div>
    </div>
  );
}
