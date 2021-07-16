import { Fragment, useState, useEffect } from "react";

import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
/**
 *
 * @returns
 */
const App = () => {
  const [isLoggediN, setIsLoggediN] = useState(false);

  const loggingHandler = (email, password) => {
    setIsLoggediN(true);
  };

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggediN(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggediN(false);
  };

  return (
    <Fragment>
      <Header isAuth={isLoggediN} onLogout={logoutHandler} />
      <main>
        {!isLoggediN && <Login onLogin={loggingHandler} />}
        {isLoggediN && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  );
};

export default App;
