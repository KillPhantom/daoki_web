/* Types */
import type { StateType } from "../types/StateType";

/* Constants */
import { LINK_TYPE } from "../Constants";
import { RichTextType } from "../types/CommonTypes";
// Selectors
export const getCreatePageData = (state: StateType) => state.createPage;

export const getCreatePageRichText = (
  state: StateType
): Array<RichTextType | null | undefined> =>
  //@ts-ignore
  getCreatePageData(state)?.data?.filter((item) => item?.text);

export const getExternalLinks = (state: StateType) => {
  const richTextData = getCreatePageRichText(state);

  const result = [];
  if (!richTextData) return;
  let currentIndex = 0;
  for (const data of richTextData) {
    if (data) {
      const textData = data.text;
      const linkList = textData.filter((item: any) => item.type === LINK_TYPE);
      for (const linkItem of linkList) {
        result.push({
          index: currentIndex,
          url: linkItem.url,
          description: linkItem.description,
        });
        currentIndex++;
      }
    }
  }
  return result;
};
