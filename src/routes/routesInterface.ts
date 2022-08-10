import { FC } from "react";
import { RouteProps } from "react-router-dom";

export interface iProps extends RouteProps {
  routes?: iRoutes[];
}

export interface iRoutes {
  // basic props
  path: string;
  exact: boolean;
  component: FC<iProps>;
  // Sub routes
  children?: iRoutes[];
  // Redirect path
  index?: boolean;
  // If router is private, this is going to be true
  isPrivate?: boolean;
}
