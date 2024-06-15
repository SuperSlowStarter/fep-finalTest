import { useRef, useState } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
    setInputValue("포커스 받았음");
  };

  return (
    <div>
      <h2>Focus Input</h2>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
