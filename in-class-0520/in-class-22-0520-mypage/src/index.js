import React from "react"; // React 라이브러리를 가져온다.
import ReactDOM from "react-dom/client"; // ReactDOM 을 import한다.
import "./index.css"; // index.css를 import한다.
import App from "./App"; // App 를 렌더링하기 위해 가져온다.

const root = ReactDOM.createRoot(document.getElementById("root")); // id가 root인 DOM요소를 찾는다.
root.render(<App />); // 해당 요소에 App 컴포넌트를 렌더링한다.
