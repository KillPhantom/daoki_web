/* Actions */
import { UPDATE_TEXT_CONTENT } from "./CreatePageActions";

/* Types */
import type { GetFulfilledActionType } from "../types/UtilsTypes";
import type { RichTextType } from "../types/CommonTypes";

export type updateTextContentType = {
  type: typeof UPDATE_TEXT_CONTENT;
  payload: RichTextType;
};

export type ActionType = updateTextContentType;
