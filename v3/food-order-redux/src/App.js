import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";

import "./App.css";

/**
 *
 * @returns App Component
 */
const App = () => {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
};

export default App;
