import { Fragment } from "react";

import MainNavigation from "./MainNavigation";
/**
 *
 * @param {*} props
 * @returns
 */
const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
