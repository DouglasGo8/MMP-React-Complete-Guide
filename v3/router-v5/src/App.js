import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

import "./App.css";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
