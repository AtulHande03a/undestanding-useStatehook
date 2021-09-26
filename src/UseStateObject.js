import React, { useState } from "react";

const data = {
  id: 1,
  name: "Tim",
  job: "devloper"
};
const UseStateObject = () => {
  //const [person, setPerson] = useState(data);

  const [id, setId] = useState(1);
  const [name, setName] = useState("Tim");
  const [job, setJob] = useState("dev");

  const clickHandler = () => {
    //setPerson({ ...person, job: "web devloper" });

    setJob("web developer");
  };

  return (
    <>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{job}</h1>
      <button onClick={clickHandler}>Delete</button>
    </>
  );
};

export default UseStateObject;
