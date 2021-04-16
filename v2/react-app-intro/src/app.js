import React from "react";

import "./app.css";

import {Person} from './Person/Person';

/**
 * 
 */
const App = () => (
  <div>
    <Person name="Max" age="28" />
    <Person name="Manu" age="29" />
    <Person name="Douglas" age="40">My Hobbies: Movies</Person>
  </div>
);

export default App;
