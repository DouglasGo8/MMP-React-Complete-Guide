import React, { Component } from "react";
import { Char } from "./Char/Char";
import { Validation } from "./Validation/Validation";

import "./app.css";

/**
 * Stateful version with
 * class properties style...
 */
class App extends Component {
  state = {
    userInput: "",
  };

  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({
      userInput: updatedText
    })
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, idx) => {
      return (
        <Char
          character={ch}
          key={idx}
          clicked={() => this.deleteCharHandler(idx)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
