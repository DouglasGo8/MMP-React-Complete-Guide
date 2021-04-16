import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

/**
 * @author dbatista
 * @param {*} props
 */
const BuildControls = props => (
  <div className="BuildControls">
    <p>
      Current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(c => (
      <BuildControl
        key={c.label}
        label={c.label}
        added={() => props.ingredientAdded(c.type, "add")}
        removed={() => props.ingredientRemoved(c.type, "remove")}
        disabled={props.disabled[c.type]}
      />
    ))}
    <button
      className="OrderButton"
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
