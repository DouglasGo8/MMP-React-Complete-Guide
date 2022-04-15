import { useSelector } from "react-redux";

import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

/**
 *
 * @returns
 */
const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
