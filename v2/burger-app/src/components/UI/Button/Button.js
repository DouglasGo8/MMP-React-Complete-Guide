import React from "react";

import classes from "./Button.css";

/**
 *
 * @param {*} props
 */
const button = (props) => (
  <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')}>{props.children}</button>
);

export default button;
