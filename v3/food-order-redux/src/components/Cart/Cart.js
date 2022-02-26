import { useSelector } from "react-redux";

import Card from "../UI/Card";
import CartItem from "./CartItem";

import "./Cart.css";

/**
 *
 * @param {*} props
 * @returns
 */
const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.name,
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
