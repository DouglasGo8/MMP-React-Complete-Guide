import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

/**
 * @author dbatista
 * @param {*} props
 */
const NavigationItems = props => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active={true}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
