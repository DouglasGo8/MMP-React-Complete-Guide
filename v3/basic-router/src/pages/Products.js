import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <Link to="/products/book">
          <li>A Book </li>
        </Link>
        <Link to="/products/carpet">
          <li>A Carpet</li>
        </Link>
        <Link to="/products/course">
          <li>An Online Course</li>
        </Link>
      </ul>
    </section>
  );
};

export default Products;
