import { Fragment } from "react";

import "./App.css";

import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";
/**
 * @author dougdb
 * @returns 
 */
const App = () => {
  return (
    <Fragment>
      <ForwardCounter/>
      <BackwardCounter/>
    </Fragment>
  );
};

export default App;
