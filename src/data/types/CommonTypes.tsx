export type MenuItemType = {
  menuText: string;
  menuOnClick?: () => void;
};

export type RichTextType = {
  title: string;
  text: any; // TODO decouple it to be more specific type
  id: number;
};

export type CodeTextType = {
  language: string;
  content: string;
  id: number;
};

export type TwitterWidgetType = {
  twitterId: string;
  id: number;
};
