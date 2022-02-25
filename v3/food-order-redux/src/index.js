import { StrictMode } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import "./index.css";

import App from "./App";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
