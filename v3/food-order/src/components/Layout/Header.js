import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import "./Header.css";
import mealsPic from "../../assets/img/meals.jpg";
/**
 *
 * @param {*} props
 * @returns
 */
const header = (props) => (
  <Fragment>
    <header className="header">
      <h1>React Meals</h1>
      <HeaderCartButton />
    </header>
    <div className="main-image">
      <img src={mealsPic} alt="Table Full" />
    </div>
  </Fragment>
);

export default header;
