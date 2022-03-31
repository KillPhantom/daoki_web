/* Types */
import type { RichTextType, CodeTextType } from "../types/CommonTypes";

export const UPDATE_TEXT_CONTENT = "UPDATE_TEXT_CONTENT";
export const UPDATE_CODE_SNIPPET = "UPDATE_CODE_SNIPPET";
export const UPDATE_TWITTER_WIDGET = "UPDATE_TWITTER_WIDGET";
export const DELETE_CONTENT = "DELETE_CONTENT";

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
