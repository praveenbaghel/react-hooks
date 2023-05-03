import React, { useEffect } from "react";

const child = ({ returnFunction }) => {

  useEffect(() => {
    console.log("Inside use Effect");
  }, [returnFunction]);
  return (
    <div>
      <h4>{returnFunction()}</h4>
    </div>
  );
};

export default child;
