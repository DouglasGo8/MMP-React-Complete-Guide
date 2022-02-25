import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import "./CartButton.css";

/**
 *
 * @returns
 */
const CartButton = () => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="badge">1</span>
    </button>
  );
};

export default CartButton;
