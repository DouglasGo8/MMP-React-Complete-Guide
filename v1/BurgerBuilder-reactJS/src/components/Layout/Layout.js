import React, { Component } from "react";

import Children from "../../adhoc/Children";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

/**
 * @author dbatista
 */

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerToogle = async => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Children>
        <Toolbar drawerToggleClicked={this.sideDrawerToogle} />
        <main className="Content">{this.props.children}</main>
      </Children>
    );
  }
}

export default Layout;
