import React from "react";

import "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Children from "../../../adhoc/Children";
/**
 * @author dbatista
 * @param {*} props
 */
const SideDrawer = props => {
  let  attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
      attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Children>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <div className="Logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Children>
  );
};

export default SideDrawer;
