import React from "react";

import "./Backdrop.css";

/**
 * @author dbatista
 * @param {*} props
 */
const Backdrop = props =>
  props.show ? <div className="Backdrop" onClick={props.clicked} /> : null;

export default Backdrop;
