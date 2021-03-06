import CartButton from "../Cart/CartButton";

import classes from "./MainHeader.module.css";

/**
 *
 * @returns
 */
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Cart</h1>
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
