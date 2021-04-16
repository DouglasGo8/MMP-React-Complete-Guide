import React, { Fragment } from "react";

import "./App.css";

import Todo from "./components/Todo";

const app = () => {
  return (
    <Fragment>
      <h1>My Todos</h1>
      <Todo text="React.js Rocks" />
    </Fragment>
  );
};

export default app;
