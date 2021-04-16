import React from "react";

import classes from "./Burger.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  // forEach element create a new Array with the key value i.e ['salad']
  // after create a new Array just with total items per key i.e to cheese equals 2 become with map [ cheese, cheese ]
  // and finally transform each array item's inside a list in the quantity of each item
  let transformedIngredients = Object.keys(props.ingredients)
    .map((k) => {
      return [...Array(props.ingredients[k])].map((_, i) => {
        return <BurgerIngredient key={k + i} type={k} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients</p>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
