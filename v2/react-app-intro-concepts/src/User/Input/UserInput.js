import React from "react";

const style = {
  border: "2px solid red",
};

const userInput = (props) => (
  <input
    type="text"
    style={style}
    onChange={props.changeEvt}
    value={props.currentName}
  />
);

export default userInput;
