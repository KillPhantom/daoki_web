export type MenuItemType = {
  menuText: string;
  menuOnClick?: () => void;
};

export type RichTextType = {
  title: string;
  text: any; // TODO decouple it to be more specific type
  id: number;
  type: number;
};

export type CodeTextType = {
  language: string;
  content: string;
  id: number;
  type: number;
};

export type TwitterWidgetType = {
  twitterId: string;
  id: number;
  type: number;
};

export type QuoteTopicType = {
  title: string;
  link: string;
  score: number;
};
