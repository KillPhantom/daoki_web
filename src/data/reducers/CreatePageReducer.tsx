import {
  UPDATE_TEXT_CONTENT,
  UPDATE_CODE_SNIPPET,
  UPDATE_TWITTER_WIDGET,
  updateTwitterWidget,
  DELETE_CONTENT,
} from "../actions/CreatePageActions";

/* Types */
import type { ActionType } from "../actions/CreatePageActionTypes";
import {
  CodeTextType,
  RichTextType,
  TwitterWidgetType,
} from "../types/CommonTypes";
import type { StateType } from "../types/CreatePageStateType";

const DEFAULT_STATE = {
  data: [
    {
      text: [
        {
          type: "paragraph",
          children: [
            { text: "This is editable " },
            { text: "rich", bold: true },
            { text: " text, " },
            { text: "much", italic: true },
            { text: " better than a " },
            { text: "<textarea>", code: true },
            { text: "!" },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Since it's rich text, you can do things like turn a selection of text ",
            },
            { text: "bold", bold: true },
            {
              text: ", or add a semantically rendered block quote in the middle of the page, like this:",
            },
          ],
        },
        {
          type: "block-quote",
          children: [{ text: "A wise quote." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Try it out for yourself!" }],
        },
        {
          type: "link",
          url: "https://www.google.com",
          description: "test",
          children: [{ text: "Try it out for yourself!" }],
        },
      ],
      id: 0,
      title: "Test",
    },
  ],
};

const updateDataArrayHelper = (
  state: StateType,
  newData: RichTextType | CodeTextType | TwitterWidgetType
) => {
  const changedTextData = state?.data?.find((item) => item?.id === newData.id);
  const index = state.data.indexOf(changedTextData);
  const newDataState = [...state.data];
  if (index === -1) {
    newDataState.push(newData);
  } else {
    newDataState[index] = newData;
  }
  return newDataState;
};

const CreatePageReducer = (
  state: StateType = DEFAULT_STATE,
  action: ActionType
) => {
  switch (action.type) {
    case UPDATE_TEXT_CONTENT:
      return {
        ...state,
        data: updateDataArrayHelper(state, action.payload),
      };

    case UPDATE_CODE_SNIPPET:
      return {
        ...state,
        data: updateDataArrayHelper(state, action.payload),
      };
    case UPDATE_TWITTER_WIDGET:
      return {
        ...state,
        data: updateDataArrayHelper(state, action.payload),
      };
    case DELETE_CONTENT:
      return {
        ...state,
        data: state.data.filter(
          (
            item:
              | RichTextType
              | CodeTextType
              | TwitterWidgetType
              | null
              | undefined
          ) => item?.id !== action.payload
        ),
      };

    default:
      //   ((checkType: never) => checkType)(action);
      break;
  }

  return state;
};

export default CreatePageReducer;
