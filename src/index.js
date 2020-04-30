import React from "react";
import ReactDOM from "react-dom";

import Calculator from "./components/CurrencyCalculator";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>PLN exchange</h1>
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
