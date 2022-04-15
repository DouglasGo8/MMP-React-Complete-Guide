import { StrictMode } from "react";

import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import "./App.css";

/**
 *
 * @returns
 */
const App = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <StrictMode>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </StrictMode>
  );
};

export default App;
