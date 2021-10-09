import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";

import "./MealItem.css";
import { useContext } from "react";

/**
 *
 * @returns
 */
const mealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default mealItem;
