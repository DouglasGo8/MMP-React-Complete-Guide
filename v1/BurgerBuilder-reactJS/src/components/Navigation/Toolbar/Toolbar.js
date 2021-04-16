import React from "react";

import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToogle from "../SideDrawer/DrawerToggle/DrawerToggle";

/**
 * @author dbatista
 * @param {*} props
 */
const Toolbar = props => (
  <header className="Toolbar">
    <DrawerToogle clicked={props.drawerToggleClicked} />
    <div className="Logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
