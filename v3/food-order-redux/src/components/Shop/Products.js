import ProductItem from "./ProductItem";

import "./Products.css";

const DUMMY = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
  },

  {
    id: "p3",
    price: 7,
    title: "My Third Book",
  },
];

/**
 *
 * @param {*} props
 * @returns
 */
const Products = (props) => {
  
  return (
    <section className="products">
      <h2>Buy your favorite Products</h2>
      <ul>
        {DUMMY.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
