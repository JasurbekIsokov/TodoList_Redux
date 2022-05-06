import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./configStore";
import App from "./Components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
