import { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import "./Login.css";

/**
 *
 * @param {*} props
 * @returns
 */
const login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    // like OnBlur over Cleanup Function
    return () => {};
  }, []);
  /**
   *
   */
  useEffect(() => {
    const timerOfForm = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => {
      clearTimeout(timerOfForm);
    }; // cleanup
  }, [enteredEmail, enteredPassword]);

  const submitHandler = (evt) => {
    evt.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  const emailChangeHandler = (evt) => {
    setEnteredEmail(evt.target.value);
  };
  const passwordChangeHandler = (evt) => {
    setEnteredPassword(evt.target.value);
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div className={`control ${emailIsValid ? "invalid" : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={`control ${passwordIsValid ? "invalid" : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>

        <div className="actions">
          <Button type="submit" className="btn" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default login;
