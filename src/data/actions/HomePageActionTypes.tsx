/* Actions */
import {
  submitCollaboratorInfo,
  SUBMIT_COLLABORATOR_INFO_SERVICES,
} from "./HomePageActions";

/* Actions */
import type { GetFulfilledActionType } from "../types/UtilsTypes";

export type SubmitCollaboratorInfoType = {
  type: typeof SUBMIT_COLLABORATOR_INFO_SERVICES;
  payload: Promise<any>;
};

type SubmitCollaboratorFulfilledActionType = GetFulfilledActionType<
  typeof submitCollaboratorInfo
>;

export type ActionType = SubmitCollaboratorFulfilledActionType;
