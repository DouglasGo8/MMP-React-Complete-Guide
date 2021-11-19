import { useDispatch } from "react-redux";

import { authActions } from "../reducers/auth-reducer";

import "./Auth.css";

/**
 * 
 * @returns App function
 */
const Auth = () => {
  const dispatch = useDispatch();

  const authHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className="auth">
      <section>
        <form onSubmit={authHandler}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
