/* Actions */
import {
  UPDATE_TEXT_CONTENT,
  UPDATE_CODE_SNIPPET,
  UPDATE_TWITTER_WIDGET,
  DELETE_CONTENT,
} from "./CreatePageActions";

/* Types */
import type { GetFulfilledActionType } from "../types/UtilsTypes";
import type {
  RichTextType,
  CodeTextType,
  TwitterWidgetType,
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

export type ActionType =
  | updateTextContentType
  | updateCodeSnippetType
  | updateTwitterWidgetType
  | deleteContentType;
