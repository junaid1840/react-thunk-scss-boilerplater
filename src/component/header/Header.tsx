import React, { FC } from "react";
import "./header.scss";
import "./headerResponsive.scss";
import { Logo } from "../logo/Logo";
import { UserProfile } from "../userProfile/UserProfile";
import { Navigation } from "../navigation/Navigation";
export const Header: FC = () => {
  return (
    <header id="header" className="w-100 main-bg dark">
      <div className="container">
        <div className="header-content-wrap">
          <Logo />
          <Navigation />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};
