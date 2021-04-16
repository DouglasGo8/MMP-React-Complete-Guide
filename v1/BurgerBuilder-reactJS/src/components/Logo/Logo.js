import React from "react";

import "./Logo.css";
import burgerLogo from "../../assets/images/burger-logo.png";
/**
 * @author dbatista
 * @param {*} props
 */
const Logo = props => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger" />
  </div>
);

export default Logo;
