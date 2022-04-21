/* Actions */
import { SET_USER_AUTH_TOKEN, fetchUserTopics } from "./UserActions";

/* Actions */
import type { GetFulfilledActionType } from "../types/UtilsTypes";

export type SetUserAuthType = {
  type: typeof SET_USER_AUTH_TOKEN;
  payload: string;
};

type GetUserTopicsFulfilled = GetFulfilledActionType<typeof fetchUserTopics>;

export type ActionType = SetUserAuthType | GetUserTopicsFulfilled;
