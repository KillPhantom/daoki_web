import {
  UPDATE_TEXT_CONTENT,
  UPDATE_CODE_SNIPPET,
  UPDATE_TWITTER_WIDGET,
  DELETE_CONTENT,
  MOVE_CONTENT_DOWN,
  MOVE_CONTENT_UP,
  UPDATE_QUOTE_TOPIC,
  CREATE_TOPIC_FULFILLED,
  CREATE_TOPIC,
  UPDATE_TOPIC_TITLE,
  RESET_STATE,
  FETCH_TOPIC_DETAIL_FULFILLED,
} from "../actions/CreatePageActions";

/* Types */
import type { ActionType } from "../actions/CreatePageActionTypes";
import { DATA_TYPE } from "../Constants";
import {
  CodeTextType,
  RichTextType,
  TwitterWidgetType,
  TopicDetailType,
} from "../types/CommonTypes";
import type { StateType } from "../types/CreatePageStateType";

const DEFAULT_STATE = {
  title: "",
  data: [],
  quoteTopic: [],
  isUploading: false,
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

const moveItemInArrayUp = (state: StateType, id: number) => {
  const dataArray = state.data;
  const item = dataArray.find((item) => item?.id === id);
  const index = dataArray.indexOf(item);
  if (index <= 0) {
    return dataArray;
  }
  dataArray.splice(index, 1);
  dataArray.splice(index - 1, 0, item);
  return dataArray;
};

const moveItemInArrayDown = (state: StateType, id: number) => {
  const dataArray = state.data;
  const item = dataArray.find((item) => item?.id === id);
  const index = dataArray.indexOf(item);
  if (index >= dataArray.length - 1 || index === -1) {
    return dataArray;
  }
  dataArray.splice(index, 1);
  dataArray.splice(index + 1, 0, item);
  return dataArray;
};

const buildStateByTopicData = (data: TopicDetailType) => {
  const result: any = [];

  for (const item of data.content) {
    switch (item.type) {
      case DATA_TYPE.RICH_TEXT:
        result.push({
          title: item.title,
          body: JSON.parse(item.body),
          type: item.type,
          id: item.contentId,
        });
        continue;
      case DATA_TYPE.TWITTER_WIDGET:
        result.push({
          id: item.contentId,
          body: item.body,
          type: item.type,
        });
        continue;
      case DATA_TYPE.CODE:
        result.push({
          id: item.contentId,
          body: item.body,
          type: item.type,
          language: item.language,
        });
        continue;
      default:
        continue;
    }
  }
  return {
    title: data.name,
    data: result,
    quoteTopic: [],
    isUploading: false,
  };
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
        data: [
          ...state.data.filter(
            (
              item:
                | RichTextType
                | CodeTextType
                | TwitterWidgetType
                | null
                | undefined
            ) => item?.id !== action.payload
          ),
        ],
      };
    case MOVE_CONTENT_UP:
      return {
        ...state,
        data: [...moveItemInArrayUp(state, action.payload)],
      };
    case MOVE_CONTENT_DOWN:
      return {
        ...state,
        data: [...moveItemInArrayDown(state, action.payload)],
      };
    case UPDATE_QUOTE_TOPIC:
      return {
        ...state,
        quoteTopic: [...state.quoteTopic, action.payload],
      };
    case CREATE_TOPIC:
      return {
        ...state,
        isUploading: true,
      };
    case CREATE_TOPIC_FULFILLED:
      return {
        ...state,
        isUploading: false,
      };
    case UPDATE_TOPIC_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case RESET_STATE:
      return {
        ...state,
        title: "",
        data: [],
        quoteTopic: [],
        isUploading: false,
      };
    case FETCH_TOPIC_DETAIL_FULFILLED:
      const newState = buildStateByTopicData(action.payload);
      return newState;
    default:
      //   ((checkType: never) => checkType)(action);
      break;
  }

  return state;
};

export default CreatePageReducer;
