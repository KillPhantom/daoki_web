import type {
  RichTextType,
  CodeTextType,
  TwitterWidgetType,
  QuoteTopicType,
} from "./CommonTypes";

export type StateType = {
  data: Array<
    RichTextType | CodeTextType | TwitterWidgetType | null | undefined
  >;
  quoteTopic: Array<QuoteTopicType | null | undefined>;
};
