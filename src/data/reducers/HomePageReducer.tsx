/* Actions */
import {
  SUBMIT_COLLABORATOR_INFO_SERVICES,
  SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED,
} from "../actions/HomePageActions";

/* Types */
import type { ActionType } from "../actions/HomePageActionTypes";
import type { StateType } from "../types/StateType";

const DEFAULT_STATE = {};

export default (state: StateType = DEFAULT_STATE, action: ActionType) => {
  switch (action.type) {
    case SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED:
      return state;
    default:
      //   ((checkType: never) => checkType)(action);
      break;
  }

  return state;
};
