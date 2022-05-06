import { SearchResponse } from "./CommonTypes";

export type PreviewDataType = {
  title: string;
  link: string;
  description: string;
};

export type PreviewDataSectionType = {
  title?: string;
  data: Array<PreviewDataType | null>;
};

export type StateType = {
  hotTopics?: Array<PreviewDataSectionType | null>;
  rewardList?: Array<PreviewDataType | null>;
  searchResult?: SearchResponse;
};
