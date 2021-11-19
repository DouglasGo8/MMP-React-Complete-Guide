import { Fragment } from "react";
import { useSelector } from "react-redux";

import "./App.css";

import Auth from "./components/Auth";
import Header from "./components/Header";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
};

export default App;
