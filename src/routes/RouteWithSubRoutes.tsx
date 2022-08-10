import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { iRoutes } from "./routesInterface";
import { FC } from "react";
import { PrivateRoute } from "./PrivateRoute";

export interface iSubRoutesProps {
  routes: iRoutes[];
}

function SubRoutes(routes: iRoutes[]) {
  return routes.map(({ path, component, children, isPrivate, index }) => (
    <Route
      path={path}
      key={path}
      index={index}
      element={isPrivate ? <PrivateRoute Component={component} /> : component}
    >
      {children && SubRoutes(children)}
    </Route>
  ));
}

export const RouteWithSubRoutes: FC<iSubRoutesProps> = ({
  routes,
}: iSubRoutesProps) => <Routes>{SubRoutes(routes)}</Routes>;
