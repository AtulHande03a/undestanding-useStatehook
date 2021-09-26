import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("Hello world");
  const clickHandler = () => {
    if (title === "Hello World") {
      setTitle("Bye World");
    } else {
      setTitle("Hello World");
    }
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={clickHandler}>change title</button>
    </div>
  );
};

export default ErrorExample;
