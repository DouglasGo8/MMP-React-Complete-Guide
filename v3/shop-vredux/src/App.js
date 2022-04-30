import { StrictMode, Fragment } from "react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sendCartData } from "./store/cart-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import "./App.css";

let isInitial = true;

/**
 * @author dougdb
 * @description keep {this} Component Clean of fetch logic using thunk
 * @returns
 */
const App = () => {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cartData = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cartData));
    //
  }, [cartData, dispatch]);

  return (
    <StrictMode>
      <Fragment>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <Layout>
          {showCart && <Cart />}
          <Products />
        </Layout>
      </Fragment>
    </StrictMode>
  );
};

export default App;
