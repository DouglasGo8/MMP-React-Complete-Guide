import React from "react";

import classes from "./BuildControls.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  

  <div className={classes.BuildControls}>
    <p>Current Price <strong>{props.price.toFixed(2)}</strong></p>
    {
    controls.map((c) => {
      return (
        <BuildControl
          key={c.label}
          label={c.label}
          disabled={props.disabled[c.type]}
          // Cyclic reference to added Event with hook up action
          added={() => props.ingredientAdded(c.type)}
          removed={() => props.ingredientRemoved(c.type)}
        />
      );
    })}
    <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
  </div>
);

export default buildControls;
