import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

export interface iProps extends RouteComponentProps {
  routes?: iRoutes[];
}

export interface iRoutes {
  // basic props
  path: string;
  exact: boolean;
  component: FC<iProps>;
  // Sub routes
  routes?: iRoutes[];
  // Redirect path
  redirect?: string;
  // If router is private, this is going to be true
  private?: boolean;
}
