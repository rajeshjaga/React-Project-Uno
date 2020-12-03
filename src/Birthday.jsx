import React, { useState } from "react";
import data from "./data.json";
import Trash from "./trashcan.png";

const Birthday = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    var newGuys = people.filter((person) => person.key !== id);
    setPeople(newGuys);
  };
  return (
    <>
      <div className="container reminder">
        <h1> Birthday reminder</h1>
        {people.map((person) => {
          return (
            <div className="item" key={person.key}>
              <div className="flex">
                <img src={person.image} alt="avatar" className="avatar" />
                <div className="flex flex-fd-col">
                  <h3>{person.name}</h3>
                  <p>{person.age} years old</p>
                </div>
              </div>
              <img
                src={Trash}
                alt="img"
                className="trash"
                onClick={() => removePerson(person.key)}
              />
            </div>
          );
        })}
        <div className="flex">
          <button className="btn" onClick={() => setPeople([])}>
            Remove All
          </button>
          <button className="btn" onClick={() => setPeople(data)}>
            Bring all back!!!
          </button>
        </div>
      </div>
    </>
  );
};
export default Birthday;
