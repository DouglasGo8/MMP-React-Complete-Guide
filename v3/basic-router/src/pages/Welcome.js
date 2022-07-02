import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path='/products'>
        Welcome, new User
      </Route>
    </section>
  );
};

export default Welcome;
