/* Actions */
import {
  UPDATE_TEXT_CONTENT,
  UPDATE_CODE_SNIPPET,
  UPDATE_TWITTER_WIDGET,
  DELETE_CONTENT,
  MOVE_CONTENT_DOWN,
  MOVE_CONTENT_UP,
  UPDATE_QUOTE_TOPIC,
  CREATE_TOPIC,
  createTopic,
  UPDATE_TOPIC_TITLE,
  RESET_STATE,
  fetchTopicDetail,
} from "./CreatePageActions";

/* Types */
import type { GetFulfilledActionType } from "../types/UtilsTypes";
import type {
  RichTextType,
  CodeTextType,
  TwitterWidgetType,
  QuoteTopicType,
} from "../types/CommonTypes";

export type updateTextContentType = {
  type: typeof UPDATE_TEXT_CONTENT;
  payload: RichTextType;
};

export type updateCodeSnippetType = {
  type: typeof UPDATE_CODE_SNIPPET;
  payload: CodeTextType;
};

export type updateTwitterWidgetType = {
  type: typeof UPDATE_TWITTER_WIDGET;
  payload: TwitterWidgetType;
};

export type deleteContentType = {
  type: typeof DELETE_CONTENT;
  payload: number;
};

type moveContentUpType = {
  type: typeof MOVE_CONTENT_UP;
  payload: number;
};

type moveContentDownType = {
  type: typeof MOVE_CONTENT_DOWN;
  payload: number;
};

export type updateQuoteTopicType = {
  type: typeof UPDATE_QUOTE_TOPIC;
  payload: QuoteTopicType;
};

export type createTopicType = {
  type: typeof CREATE_TOPIC;
  payload: Promise<any>;
};

export type updateTopicTitleType = {
  type: typeof UPDATE_TOPIC_TITLE;
  payload: string;
};

type resetStateType = {
  type: typeof RESET_STATE;
  payload: null;
};

type fetchTopDetailFulfilledType = GetFulfilledActionType<
  typeof fetchTopicDetail
>;
type createTopicFulfilledType = GetFulfilledActionType<typeof createTopic>;

export type ActionType =
  | updateTextContentType
  | updateCodeSnippetType
  | updateTwitterWidgetType
  | deleteContentType
  | updateQuoteTopicType
  | moveContentUpType
  | moveContentDownType
  | updateTopicTitleType
  | createTopicFulfilledType
  | resetStateType
  | fetchTopDetailFulfilledType;
