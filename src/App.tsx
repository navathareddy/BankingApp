import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import DragnDrop from "./dnd";
import DragToReorderList from "./dnd/App3";
import SimpleVertical from "./dnd/sortablePane";

function App() {
  return (
    <div className="App">
      <SimpleVertical />
    </div>
  );
}

export default App;
