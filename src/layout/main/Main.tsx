import React from "react";
import "./main.scss";
import { routes } from "../../routes/routes";
import { RouteWithSubRoutes } from "../../routes/routeWithSubRoutes";
import { GlobalProvider } from "../../services/context/GlobalProvider";
import { Header } from "../../component/header/Header";

export const Main = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      <GlobalProvider>{<RouteWithSubRoutes routes={routes} />}</GlobalProvider>
    </>

    // Add footer here
  );
};
