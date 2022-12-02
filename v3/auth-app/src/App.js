import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";

import "./App.css";

/**
 *
 * @returns
 */
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
