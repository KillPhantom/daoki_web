/* Actions */
import {
  submitCollaboratorInfo,
  SUBMIT_COLLABORATOR_INFO_SERVICES,
  fetchHomePageInitialData,
  FETCH_HOME_PAGE_INITIAL_DATA,
} from "./HomePageActions";

/* Actions */
import type { GetFulfilledActionType } from "../types/UtilsTypes";

export type SubmitCollaboratorInfoType = {
  type: typeof SUBMIT_COLLABORATOR_INFO_SERVICES;
  payload: Promise<any>;
};

export type FetchHomePageInitialDataType = {
  type: typeof FETCH_HOME_PAGE_INITIAL_DATA;
  payload: Promise<any>;
};

type SubmitCollaboratorFulfilledActionType = GetFulfilledActionType<
  typeof submitCollaboratorInfo
>;

type FetchHomePageInitialDataFulFilledActionType = GetFulfilledActionType<
  typeof fetchHomePageInitialData
>;

export type ActionType =
  | FetchHomePageInitialDataType
  | SubmitCollaboratorFulfilledActionType
  | FetchHomePageInitialDataFulFilledActionType;
