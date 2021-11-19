import CartButton from "../Cart/CartButton";

import "./MainHeader.css";

/**
 *
 * @returns
 */
const MainHeader = () => {
  return (
    <header className="header">
      <h1>Redux Cart</h1>
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
