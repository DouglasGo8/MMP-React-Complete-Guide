import ProductItem from "./ProductItem";

import classes from "./Products.module.css";

const DUMMY_ = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first Book I ever wrote",
  },
  {
    id: "p2",
    price: 12,
    title: "My Second Book",
    description: "The Second Book I ever wrote",
  },
];

/**
 *
 * @param {*} props
 * @returns
 */
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_.map((product) => (
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
