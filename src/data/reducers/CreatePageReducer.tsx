import { UPDATE_TEXT_CONTENT } from "../actions/CreatePageActions";

/* Types */
import type { ActionType } from "../actions/CreatePageActionTypes";
import type { StateType } from "../types/CreatePageStateType";

const DEFAULT_STATE = {
  richText: [],
};

const CreatePageReducer = (
  state: StateType = DEFAULT_STATE,
  action: ActionType
) => {
  switch (action.type) {
    case UPDATE_TEXT_CONTENT:
      const richTextData = action.payload;
      const changedTextData = state?.richText?.find(
        (item) => item?.position === richTextData.position
      );
      const index = state.richText.indexOf(changedTextData);
      const newRichText = [...state.richText];
      if (index === -1) {
        newRichText.push(richTextData);
      } else {
        newRichText[index] = richTextData;
      }
      return {
        ...state,
        richText: newRichText,
      };

    default:
      //   ((checkType: never) => checkType)(action);
      break;
  }

  return state;
};

export default CreatePageReducer;
