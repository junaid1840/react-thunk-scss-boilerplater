import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/global.scss";
import Home from "./layout/main/Home";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
