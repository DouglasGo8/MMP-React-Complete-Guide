import { StrictMode } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";

import store from "./components/store";

import "./index.css";

import App from "./App";

render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
