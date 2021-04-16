import React, { Component } from "react";

import UserInput from "./User/Input/UserInput";
import UserOutput from "./User/Output/UserOutput";

/**
 * @summary State-full Component
 */
export default class App extends Component {
  state = {
    userName: "reatjs-user",
  };

  userNameChangeHandler = (evt) => {
    this.setState({
      userName: evt.target.value,
    });
  };

  render() {
    return (
      <div>
        <UserInput
          changeEvt={this.userNameChangeHandler}
          currentName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}
