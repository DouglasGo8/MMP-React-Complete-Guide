import "./Header.css";
import Navigation from "./Navigation";
/**
 *
 * @param {*} props
 * @returns
 */
const header = (props) => {
  return (
    <header className="main-header">
      <h1>A Typical Page</h1>
      <Navigation isAuth={props.isAuth} onLogout={props.onLogout} />
    </header>
  );
};

export default header;
