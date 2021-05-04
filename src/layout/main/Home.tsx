import React from "react";
import logo from "../../assets/images/logo.svg";
import "./home.scss";

const Main = (): JSX.Element => {
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
    </div>
  );
};

export default Main;
