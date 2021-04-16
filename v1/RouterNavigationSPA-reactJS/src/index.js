import React from "react";
import { render } from "react-dom";
import axios from "axios";

import App from "./App";

import "./index.css";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use(
  req => {
    console.log(req);

    return req;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    console.log(res);

    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

render(<App />, document.querySelector('[data-js="root"]'));
