import React from "react";
import ReactDOM from "react-dom";
import "./style.js";
import "./statics/iconfont/iconfont";
import "font-awesome/css/font-awesome.min.css";

import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
