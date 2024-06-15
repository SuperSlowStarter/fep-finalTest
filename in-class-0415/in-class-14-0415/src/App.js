import { useState } from "react";

//인라인 css인듯?

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");

  const changeBackgroundColor = () => {
    const randomColor = generateRandomColor();
    setBackgroundColor(randomColor);
  };

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center", //가로 정렬
        alignContent: "center", //세로 정렬
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>클릭해서 배경색 바꾸기</h1>
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
          onClick={changeBackgroundColor}
        >
          배경색 변경
        </button>
      </div>
    </div>
  );
}

export default App;
