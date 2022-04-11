import { pathToRegexp } from "path-to-regexp";
import type { Location } from "react-router-dom";

/* Routes */
export const HOME_ROUTE = "/";
export const DEMO_ROUTE = "/demo";
export const CREATE_PROJECT_ROUTE = "/create-project";
export const EXAMPLE_PAGE_1 = "/example-page-1";
export const EXAMPLE_PAGE_2 = "/example-page-2";
export const EXAMPLE_PAGE_3 = "/example-page-3";
export const EXAMPLE_PAGE_4 = "/example-page-4";
export const EXAMPLE_PAGE_5 = "/example-page-5";
export const TOPIC_PAGE_ROUTE = "/topic/:topicId";

const HOME_ROUTE_TESTER = pathToRegexp(HOME_ROUTE);
const CREATE_PROJECT_ROUTE_TESTER = pathToRegexp(CREATE_PROJECT_ROUTE);
const TOPIC_PAGE_ROUTE_TESTER = pathToRegexp(TOPIC_PAGE_ROUTE);

export const isOnCreateProjectPage = (location: Location) =>
  CREATE_PROJECT_ROUTE_TESTER.test(location.pathname);

export const isOnHomePage = (location: Location) =>
  HOME_ROUTE_TESTER.test(location.pathname);

export const isOnTopicPageRoute = (location: Location) =>
  TOPIC_PAGE_ROUTE_TESTER.test(location.pathname);
