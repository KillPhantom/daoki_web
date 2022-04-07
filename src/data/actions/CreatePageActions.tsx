/* Types */
import type {
  RichTextType,
  CodeTextType,
  QuoteTopicType,
} from "../types/CommonTypes";

export const UPDATE_TEXT_CONTENT = "UPDATE_TEXT_CONTENT";
export const UPDATE_CODE_SNIPPET = "UPDATE_CODE_SNIPPET";
export const UPDATE_TWITTER_WIDGET = "UPDATE_TWITTER_WIDGET";
export const DELETE_CONTENT = "DELETE_CONTENT";
export const UPDATE_QUOTE_TOPIC = "UPDATE_QUOTE_TOPIC";

export const updateTextContent = (richText: RichTextType) => ({
  type: UPDATE_TEXT_CONTENT,
  payload: richText,
});

export const updateCodeSnippet = (codeText: CodeTextType) => ({
  type: UPDATE_CODE_SNIPPET,
  payload: codeText,
});

export const updateTwitterWidget = (twitterId: string) => ({
  type: UPDATE_TWITTER_WIDGET,
  payload: twitterId,
});

export const deleteContent = (id: number) => ({
  type: DELETE_CONTENT,
  payload: id,
});

export const updateQuoteTopic = (quoteTopic: QuoteTopicType) => ({
  type: UPDATE_QUOTE_TOPIC,
  payload: quoteTopic,
});
