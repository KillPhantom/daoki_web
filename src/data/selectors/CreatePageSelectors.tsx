/* Types */
import type { StateType } from "../types/StateType";

/* Constants */
import { LINK_TYPE } from "../Constants";
// Selectors
export const getCreatePageData = (state: StateType) => state.createPage;

export const getExternalLinks = (state: StateType) => {
  const richTextData = getCreatePageData(state).richText;

  const result = [];
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
