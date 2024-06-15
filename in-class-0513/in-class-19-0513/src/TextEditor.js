import React, { useState } from "react";

function TextEditor() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSizeIncrease() {
    if (fontSize + 5 <= 85) {
      setFontSize(fontSize + 5);
    }
  }
  function handleSizeDecrease() {
    if (fontSize - 5 >= 5) {
      setFontSize(fontSize - 5);
    }
  }
  function handleColorChange() {
    setColor("blue");
  }
  function handleBackgroundChange(event) {
    setBackgroundColor(event.target.value);
  }

  return (
    <div style={{ backgroundColor }}>
      <textarea
        cols="50"
        rows="20"
        value={text}
        onChange={handleTextChange}
        style={{ fontSize, color }}
      />
      <br />
      <button onClick={handleSizeIncrease}>Increase Size</button>
      <button onClick={handleSizeDecrease}>Decrease Size</button>
      <button onClick={handleColorChange}>Change Color</button>
      <br />
      <input type="text" onChange={handleBackgroundChange} />
    </div>
  );
}

export default TextEditor;
