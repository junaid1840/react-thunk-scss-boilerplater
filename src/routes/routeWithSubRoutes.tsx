import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { iRoutes } from "./routesInterface";
import { FC } from "react";

export interface iSubRoutesProps {
  routes?: iRoutes[];
}

export const RouteWithSubRoutes: FC<iSubRoutesProps> = ({
  routes,
}: iSubRoutesProps) => {
  return (
    <Switch>
      {routes &&
        routes.map((route: iRoutes) => (
          <Route
            path={route.path}
            exact={route.exact}
            key={route.path}
            render={(props) => {
              if (!route.private) {
                // pass the sub-routes down as props
                return <route.component {...props} routes={route.routes} />;
              } else {
                // authenticate user and return component to render else return redirect
              }
            }}
          />
        ))}
    </Switch>
  );
};
