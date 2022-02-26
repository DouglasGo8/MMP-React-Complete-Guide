import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";

import "./ProductItem.css";

/**
 *
 * @param {*} props
 * @returns
 */
const ProductItem = (props) => {

  const { title, price, description, id } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }));
  };

  return (
    <li className="item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="actions">
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
