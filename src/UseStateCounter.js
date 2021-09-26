import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    //passing value approach
    setValue(0);
  };

  const complexIncrease = () => {
    //passing function approach inside setValue
    setTimeout(() => {
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <h1>Counter</h1>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>increase</button>
      <button onClick={() => setValue(value - 1)}>decrease</button>

      <button onClick={reset}>reset</button>
      <h1>Complex Counter</h1>
      <h1>{value}</h1>
      <button onClick={complexIncrease}>increase</button>
    </React.Fragment>
  );
};

export default UseStateCounter;
