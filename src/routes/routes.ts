import iRoutes from "./routesInterface";
import { Main } from "../layout/main/Main";

const routes: iRoutes[] = [
  {
    path: "/",
    exact: true,
    component: Main,
  },
];

export default routes;
