/* Types */
import { getAuthTokenCookie } from "../../utils/Cookie";
import type { StateType } from "../types/StateType";

// Selectors
export const getUserInfoData = (state: StateType) => state.userInfo;

export const getUserAuthToken = (state: StateType) =>
  getUserInfoData(state).authToken || getAuthTokenCookie();

export const isLoggedIn = (state: StateType) =>
  Boolean(getAuthTokenCookie() || getUserAuthToken(state));

export const getUserTopics = (state: StateType) =>
  getUserInfoData(state).userTopics;
