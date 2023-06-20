import React from "react";
import "./App.css";
import Count from "./Hooks/UseState/Count.js";
import Object from "./Hooks/UseState/Object.js";
import TitleUpdate from "./Hooks/UseEffect/TitleUpdate";
import ScreenWidth from "./Hooks/UseEffect/ScreenWidth";
import Counter from "./Hooks/UseReducer/Counter"

function App() {
  return (
    <div className="App">
      <Count />
      <Object />
      <TitleUpdate />
      <ScreenWidth />
      <Counter />
    </div>
  );
}

export default App;
