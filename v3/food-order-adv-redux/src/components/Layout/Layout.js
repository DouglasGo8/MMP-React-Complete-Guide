import { Fragment } from "react";

import MainHeader from "./MainHeader";

/**
 *
 * @param {*} props
 * @returns
 */
const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
