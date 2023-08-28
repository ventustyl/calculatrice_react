import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(expression);
        setResult(calculatedResult);
      } catch (error) {
        setResult("Error");
      }
      setExpression("");
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div>
      <h1>Calculatrice</h1>
      <div className="calculator">
        <div className="screen">
          <p className="result">{result}</p>

          <p className="expression">{expression}</p>
        </div>
        <div className="buttons">
          <button className="button" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button className="button" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button className="button" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button className="button" onClick={() => handleButtonClick("/")}>
            /
          </button>
          <button className="button" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button className="button" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button className="button" onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button className="button" onClick={() => handleButtonClick("*")}>
            *
          </button>
          <button className="button" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button className="button" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button className="button" onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button className="button" onClick={() => handleButtonClick("-")}>
            -
          </button>
          <button className="button" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button className="button" onClick={() => handleButtonClick("C")}>
            C
          </button>
          <button className="button" onClick={() => handleButtonClick("+")}>
            +
          </button>
          <button className="button" onClick={() => handleButtonClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
