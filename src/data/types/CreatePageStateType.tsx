import type {
  RichTextType,
  CodeTextType,
  TwitterWidgetType,
} from "./CommonTypes";

export type StateType = {
  data: Array<
    RichTextType | CodeTextType | TwitterWidgetType | null | undefined
  >;
};
