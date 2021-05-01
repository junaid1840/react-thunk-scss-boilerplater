import iRoutes from "./routesInterface";
import Home from "../layout/main/Home";

const routes: iRoutes[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
];

export default routes;
