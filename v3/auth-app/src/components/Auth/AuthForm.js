import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const webAppKey = "keyHere";
const webAppSignWithKey = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${webAppKey}`;
const webAppSignWithPassword = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${webAppKey}`;

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //
  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation
    setIsLoading(true);
    //
    let url = "";
    //
    if (isLogin) {
      url = webAppSignWithPassword;
    } else {
      url = webAppSignWithKey;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          resp.json().then((data) => {
            setIsLoading(false);
            let errorMessage = "Authentication failed!";
            //if (data && data.error && data.error.message) {
            // errorMessage = data.error.message;
            //}
            //console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending Request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
