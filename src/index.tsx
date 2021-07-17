import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/global.scss";
import { Main } from "./layout/main/Main";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
