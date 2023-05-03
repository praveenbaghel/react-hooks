import React, { useCallback, useState } from "react";
import Child from "./Child";
const UseCallback = () => {
  const [data, setData] = useState("this is data");
  const [update, setUpdate] = useState(true);
  const returnFunction = useCallback(() => data, [data])
  const toggle = () => {
    setUpdate(!update);
  };
  return (
    <div>
      <h3>useCallback</h3>
      <Child returnFunction={returnFunction} />
      <button onClick={toggle}>{update ? "update" : "updated"}</button>
    </div>
  );
};

export default UseCallback;
