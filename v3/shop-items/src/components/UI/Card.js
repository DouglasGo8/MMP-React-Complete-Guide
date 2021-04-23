import React from "react";

import "./Card.css";

/**
 *
 * @param {*} props
 * @returns
 */
export default (props) => (
  <div className={`card ${props.className}`}>{props.children}</div>
);
