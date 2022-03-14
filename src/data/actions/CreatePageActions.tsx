/* Types */
import type { RichTextType } from "../types/CommonTypes";

export const UPDATE_TEXT_CONTENT = "UPDATE_TEXT_CONTENT";

export const updateTextContent = (richText: RichTextType) => ({
  type: UPDATE_TEXT_CONTENT,
  payload: richText,
});
