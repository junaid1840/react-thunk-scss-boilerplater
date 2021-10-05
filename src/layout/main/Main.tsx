import React from "react";
import "./main.scss";
import routes from "../../routes/routes";
import RouteWithSubRoutes from "../../routes/routeWithSubRoutes";

export const Main = (): JSX.Element => {
  return (
    <>{<RouteWithSubRoutes routes={routes} />}</>
    // Add footer here
  );
};
