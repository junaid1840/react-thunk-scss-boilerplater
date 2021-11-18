import React from "react";
import "./main.scss";
import { routes } from "../../routes/routes";
import { RouteWithSubRoutes } from "../../routes/routeWithSubRoutes";
import { GlobalProvider } from "../../services/context/GlobalProvider";

export const Main = (): JSX.Element => {
  return (
    <>
      <GlobalProvider>{<RouteWithSubRoutes routes={routes} />}</GlobalProvider>
    </>

    // Add footer here
  );
};
