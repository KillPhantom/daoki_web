import { pathToRegexp } from "path-to-regexp";
import type { Location } from "react-router-dom";

/* Routes */
export const HOME_ROUTE = "/";
export const CREATE_PROJECT_ROUTE = "/create-project";

const HOME_ROUTE_TESTER = pathToRegexp(HOME_ROUTE);
const CREATE_PROJECT_ROUTE_TESTER = pathToRegexp(CREATE_PROJECT_ROUTE);

export const isOnCreateProjectPage = (location: Location) =>
  CREATE_PROJECT_ROUTE_TESTER.test(location.pathname);

export const isOnHomePage = (location: Location) =>
  HOME_ROUTE_TESTER.test(location.pathname);
