import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const Logo: FC = () => {
  return (
    <NavLink className="header-logo" to="/">
      <img src={logo} alt="logo" />
    </NavLink>
  );
};
