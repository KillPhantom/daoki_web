/* Actions */
import {
  SET_USER_AUTH_TOKEN,
  GET_USER_TOPICS_FULFILLED,
} from "../actions/UserActions";
/* Types */
import type { StateType } from "../types/UserStateType";

/* Actions */
import type { ActionType } from "../actions/UserActionTypes";

const DEFAULT_STATE = {
  userPublicAddress: null,
  authToken: null,
};

const UserInfoReducer = (
  state: StateType = DEFAULT_STATE,
  action: ActionType
) => {
  switch (action.type) {
    case SET_USER_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case GET_USER_TOPICS_FULFILLED:
      return { ...state, userTopics: action.payload };
    default:
      //   ((checkType: never) => checkType)(action);
      break;
  }

  return state;
};
export default UserInfoReducer;
