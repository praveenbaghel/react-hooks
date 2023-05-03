import React, { useRef, useState } from "react";

const UseRef = () => {
  const [val, setVal] = useState("updated here");
  const inputval = useRef(null);

  const handleClick = () => {
    setVal(inputval.current.value);
    inputval.current.value = ""
    inputval.current.focus();

  };
  return (
    <div>
      <h3>useRef</h3>
      <p>{val}</p>
      <input type="text" ref={inputval} />
      <button onClick={handleClick}>Input</button>
    </div>
  );
};

export default UseRef;
