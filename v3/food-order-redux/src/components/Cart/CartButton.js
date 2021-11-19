import "./CartButton.css";

/**
 *
 * @returns
 */
const CartButton = () => {
  return (
    <button className="button">
      <span>My Cart</span>
      <span className="badge">1</span>
    </button>
  );
};

export default CartButton;
