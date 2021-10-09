import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./App.css";

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
    //console.log("hi");
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
