import React from "react";

import { Person } from "./Person/Person";

export const Persons = (props) =>
  props.persons.map((person, k) => {
    console.log("[Persons.js] rendering");
    return (
      <Person
        click={() => props.clicked(k)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
