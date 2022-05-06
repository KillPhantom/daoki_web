/* Actions */
import {
  submitCollaboratorInfo,
  SUBMIT_COLLABORATOR_INFO_SERVICES,
  fetchHomePageInitialData,
  FETCH_HOME_PAGE_INITIAL_DATA,
  SEARCH_TOPIC_DATA,
  searchTopic,
} from "./HomePageActions";

/* Actions */
import type { GetFulfilledActionType } from "../types/UtilsTypes";
import type { SearchResponse } from "../types/CommonTypes";

export type SubmitCollaboratorInfoType = {
  type: typeof SUBMIT_COLLABORATOR_INFO_SERVICES;
  payload: Promise<any>;
};

export type FetchHomePageInitialDataType = {
  type: typeof FETCH_HOME_PAGE_INITIAL_DATA;
  payload: Promise<any>;
};

export type SearchTopicDataType = {
  type: typeof SEARCH_TOPIC_DATA;
  payload: Promise<SearchResponse>;
};

type SubmitCollaboratorFulfilledActionType = GetFulfilledActionType<
  typeof submitCollaboratorInfo
>;

type FetchHomePageInitialDataFulFilledActionType = GetFulfilledActionType<
  typeof fetchHomePageInitialData
>;

type SearchTopicDataFulfilledActionType = GetFulfilledActionType<
  typeof searchTopic
>;

export type ActionType =
  | FetchHomePageInitialDataType
  | SubmitCollaboratorFulfilledActionType
  | FetchHomePageInitialDataFulFilledActionType
  | SearchTopicDataType
  | SearchTopicDataFulfilledActionType;
