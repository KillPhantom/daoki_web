/* Types */
import type { StateType } from "../types/StateType";

// Selectors
export const getRewardsListData = (state: StateType) =>
  state.homePage.rewardList;

export const getHotTopicsData = (state: StateType) => state.homePage.hotTopics;

export const getSearchResult = (state: StateType) =>
  state.homePage.searchResult;

export const getSearchTopicResult = (state: StateType) => {
  return getSearchResult(state)?.items;
};
