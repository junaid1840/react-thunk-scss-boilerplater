import iRoutes from "./routesInterface";
import { Home } from "../component/home/Home";
import { ROUTES } from "./routeConstants";
import { Header } from "../component/header/Header";
import { Accordion } from "../component/accordion/Accordion";

const { HOME_PAGE } = ROUTES;
const { HEADER } = ROUTES;
const { ACCORDION } = ROUTES;

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
  },
  {
    path: ACCORDION,
    exact: true,
    component: Accordion,
  },
];

export default routes;
