import React from "react";

import "./Person.css";
/**
 *
 * @param {*} props
 */
export const Person = (props) => {
  console.log("[Persons.js] rendering");
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
