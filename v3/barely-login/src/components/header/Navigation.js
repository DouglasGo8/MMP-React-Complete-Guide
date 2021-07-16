import "./Navigation.css";

/**
 *
 * @param {*} props
 * @returns
 */
const navigation = (props) => {
  return (
    <nav className="nav">
      <ul>
        {props.isAuth && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isAuth && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isAuth && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default navigation;
