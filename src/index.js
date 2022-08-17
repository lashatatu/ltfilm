import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import ToggleColorMode from "./utils/ToggleColorMode";
import App from "./components/App";
import "./index.css";

ReactDom.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>,
  document.getElementById("root")
);
