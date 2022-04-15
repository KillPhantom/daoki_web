import type { StateType as HomePageStateType } from "./HomePageStateType";
import type { StateType as CreatePageStateType } from "./CreatePageStateType";
import type { StateType as UserStateType } from "./UserStateType";

export type StateType = {
  homePage: HomePageStateType;
  createPage: CreatePageStateType;
  userInfo: UserStateType;
};
