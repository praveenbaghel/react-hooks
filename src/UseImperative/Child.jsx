import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((_props, ref) => {
  const [toggle, setToggle] = useState(true);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button>Click to toogle text</button>
      { toggle && <span>Toggle text</span> }
    </div>
  );
});
export default Child;
