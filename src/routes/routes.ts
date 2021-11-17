import iRoutes from "./routesInterface";
import { Home } from "../component/home/Home";
import { ROUTES } from "./routeConstants";
import { Header } from "../component/Header/Header";
import {Logo} from "../component/Logo/Logo";
import {UserProfile} from "../component/UserProfile/UserProfile";
import {Accordion} from "../component/Accordion/Accordion";

const { HOME_PAGE } = ROUTES;
const { HEADER } = ROUTES;
const { LOGO } = ROUTES;
const { USER_PROFILE } = ROUTES;
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
    path: LOGO,
    exact: true,
    component: Logo,
  },
  {
    path: USER_PROFILE,
    exact: true,
    component: UserProfile,
  },
  {
    path: ACCORDION,
    exact: true,
    component: Accordion,
  },
];

export default routes;
