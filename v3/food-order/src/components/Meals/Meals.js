import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

/**
 *
 * @returns
 */
const meals = () => (
  <Fragment>
    <MealsSummary />
    <AvailableMeals />
  </Fragment>
);

export default meals;
