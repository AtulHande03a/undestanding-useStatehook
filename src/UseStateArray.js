import { useState } from "react";
import data from "./Data";

import "./styles.css";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <div className="main-div">
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="name-div">
              {name}
              <button className="btn-remove" onClick={() => handleRemove(id)}>
                remove
              </button>
            </div>
          );
        })}
        <button className="btn-delete" onClick={() => setPeople([])}>
          Delete All
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
