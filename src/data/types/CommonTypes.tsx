export type MenuItemType = {
  menuText: string;
  menuOnClick?: () => void;
};

export type RichTextType = {
  text: any; // TODO decouple it to be more specific type
  position: number;
};
