import React, { Component } from "react";

import Cockpit from "../components/Cockpit/Cockpit";
import { Persons } from "../components/Persons/Persons";

import classes from "./app.css";

/**
 * Stateful version with
 * class properties style...
 */
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor Invoked");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount Invoked");
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate Invoked");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate Invoked");
  }

  componentWillUnmount() {
    console.log("[App.js] componentWillUnmount Invoked");
  }

  // Deprecated
  // componentWillMount() {
  //  console.log("[Persons.js] componentWillMount");
  // }

  state = {
    persons: [
      { id: "id01", name: "Max", age: 28 },
      { id: "id02", name: "Manu", age: 29 },
      { id: "id03", name: "Douglas", age: 40 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (evt, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // 1nd array
    const person = { ...this.state.persons[personIndex] };
    person.name = evt.target.value;

    // 2nd array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // update original array
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    console.log("hi");
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  /**
   * setState updated fire render method
   */
  render() {
    console.log("[App.js] render Invoked");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
