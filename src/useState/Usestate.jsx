import React, { useState } from "react";

const usestate = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("Change will be here");

  const handleChange = (event) => setInput(event.target.value);
  return (
    <div className="state">
      <h3>useState</h3>
      <input
        type="text"
        placeholder="Start writing here........."
        onChange={handleChange}
      />
      <p>{input}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
};

export default usestate;
