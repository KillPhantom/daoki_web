export type MenuItemType = {
  menuText: string;
  menuOnClick?: () => void;
};

export type RichTextType = {
  title: string;
  body: any; // TODO decouple it to be more specific type
  id: number;
  type: number;
};

export type CodeTextType = {
  language: string;
  body: string;
  id: number;
  type: number;
};

export type TwitterWidgetType = {
  body: string;
  id: number;
  type: number;
};

export type QuoteTopicType = {
  title: string;
  link: string;
  score: number;
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
