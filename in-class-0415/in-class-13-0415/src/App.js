import { useState } from "react";
import styles from "./App.module.css";
function App() {
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };
  return (
    <div
      className={styles.appContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      <h1>Change Color with CSS Module</h1>
      <button className={styles.button} onClick={changeBackgroundColor}>
        Change Background Color
      </button>
    </div>
  );
}

export default App;

//별표라는데??
