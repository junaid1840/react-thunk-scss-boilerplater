import iRoutes from "./routesInterface";
import { Home } from "../component/home/Home";
import { RoutesPath } from "./routeConstants";

const { HomePage } = RoutesPath;

const routes: iRoutes[] = [
  {
    path: HomePage,
    exact: true,
    component: Home,
  },
];

export default routes;
