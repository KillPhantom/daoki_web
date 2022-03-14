import type { StateType as HomePageStateType } from "./HomePageStateType";
import type { StateType as CreatePageStateType } from "./CreatePageStateType";

export type StateType = {
  homePage: HomePageStateType;
  createPage: CreatePageStateType;
};
