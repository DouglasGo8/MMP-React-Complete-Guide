import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./Burger.css";

/**
 * @author dbatista
 * @param {*} props
 */
const Burger = props => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  // console.log(transformedIngredient);

  if (transformedIngredient.length === 0) {
    transformedIngredient = (<p>Please start adding ingredients</p>);
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
