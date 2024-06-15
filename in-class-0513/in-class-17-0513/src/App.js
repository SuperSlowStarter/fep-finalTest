import "./App.css";
import React from "react";
import React_onMouseMove from "./React_onMouseMove";
import React_onMouseOver from "./React_onMouseOver";
import React_onMouseOut from "./React_onMouseOut";

function App() {
  return (
    <div>
      <h1>Start React Mouse Event</h1>
      <React_onMouseMove />
      <hr></hr>
      <React_onMouseOver />
      <hr></hr>
      <React_onMouseOut />
    </div>
  );
}

export default App;
