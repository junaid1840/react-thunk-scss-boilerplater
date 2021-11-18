import iRoutes from "./routesInterface";
import { Home } from "../component/home/Home";
import { ROUTES } from "./routeConstants";
import { Header } from "../component/Header/Header";

const { HOME_PAGE } = ROUTES;
const { HEADER } = ROUTES;

const routes: iRoutes[] = [
  {
    path: HOME_PAGE,
    exact: true,
    component: Home,
  },
  {
    path: HEADER,
    exact: true,
    component: Header,
  }
];

export default routes;
