import React from "react";

import "./DrawerToggle.css";

/**
 * @author dbatista
 * @param {*} props
 */
const DrawerToggle = props => (
    <div onClick={props.clicked} className="DrawerToggle">
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;
