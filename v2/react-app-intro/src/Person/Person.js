import React from "react";

import "../app.css";

/**
 *
 * @param {*} props
 */
export const Person = (props) => (
  <div className="person">
    <h1>{props.name}</h1>
    <p>Your Age: {props.age}</p>
    <p>{props.children}</p>
  </div>
);
