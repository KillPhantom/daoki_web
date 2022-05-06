export type MenuItemType = {
  menuText: string;
  menuOnClick?: () => void;
};

export type RichTextType = {
  title: string;
  body: any; // TODO decouple it to be more specific type
  id: string;
  type: number;
  topicId?: string;
};

export type CodeTextType = {
  language: string;
  body: string;
  id: string;
  type: number;
  topicId?: string;
};

export type TwitterWidgetType = {
  body: string;
  id: string;
  type: number;
  topicId?: string;
};

export type QuoteTopicType = {
  title: string;
  link: string;
  score: number;
  topicId?: string;
};

export type ContentType =
  | TwitterWidgetType
  | RichTextType
  | CodeTextType
  | null
  | undefined;

export type CreateTopicContentType = {
  title?: string;
  language?: string;
  position: number;
  body: string;
  type: number;
  contentId?: string;
  topicId?: string;
};

export type TopicDetailType = {
  topicId: string;
  name: string;
  content: Array<CreateTopicContentType>;
  contributor: {
    userId: string;
    walletPublicAddress: string;
  };
};

export type TopicAbstractType = {
  id: string;
  title: string;
  index: number;
  viewCount: string;
};

export type GetUserTopicServicesType = {
  items: Array<TopicAbstractType> | null | undefined;
  pageNo: number;
  pageSiz: number;
  totalCount: number;
  totalPage: number;
};

export type SearchResultItemType = {
  title: string;
  id: string;
  description: string;
};

export type SearchResponse = {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  totalCount: number;
  items: Array<SearchResultItemType>;
};
