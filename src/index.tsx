import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/global.scss";
import { Main } from "./layout/main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
