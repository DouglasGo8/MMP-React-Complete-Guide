import Modal from "../UI/Modal";
import "./Cart.css";
/**
 *
 * @param {*} props
 * @returns
 */
const cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default cart;
