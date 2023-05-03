import React, { useRef } from "react";
import Child from "./child";

const UseImperative = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <h3>UseImperative</h3>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Click to parent toggle
      </button>
      <Child ref={buttonRef} />
    </div>
  );
};

export default UseImperative;
