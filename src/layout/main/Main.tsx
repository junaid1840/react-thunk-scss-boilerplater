import React from "react";
import logo from "../../assets/images/logo.svg";
import "./main.scss";
import routes from "../../routes/routes";
import RouteWithSubRoutes from "../../routes/routeWithSubRoutes";

export const Main = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header" data-testid="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Main.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {<RouteWithSubRoutes routes={routes} />}
    </div>
    // Add footer here
  );
};
