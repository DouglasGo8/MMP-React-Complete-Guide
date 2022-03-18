import CartButton from "../Cart/CartButton";

import classes from "./MainHeader.module.css";

/**
 *
 * @param {*} props
 * @returns
 */
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>Redux Cart Shop</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
