import "./header.scss";
import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="logo">Pokemon Platform</div>
      <nav>
        <ul className="nav-list-wrapper">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">My Pokemon</li>
        </ul>
      </nav>
    </header>
  );
};
