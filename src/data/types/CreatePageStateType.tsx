import type { ContentType, QuoteTopicType } from "./CommonTypes";

export type StateType = {
  title: string;
  data: Array<ContentType>;
  quoteTopic: Array<QuoteTopicType | null | undefined>;
  isUploading: boolean;
};
