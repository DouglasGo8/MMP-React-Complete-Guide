import React from "react";

import "./Button.css";

/**
 * @author dbatista
 * @param {*} props
 */
const Button = props => (
  <button className={["Button", props.btnType].join(' ')} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
