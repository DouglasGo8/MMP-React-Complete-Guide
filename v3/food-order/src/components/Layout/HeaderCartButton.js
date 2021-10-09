import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/CartContext";

import "./HeaderCartButton.css";
import { useContext } from "react";

const headerCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default headerCartButton;
