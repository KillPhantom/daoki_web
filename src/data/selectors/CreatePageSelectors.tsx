/* Types */
import type { StateType } from "../types/StateType";

/* Constants */
import { DATA_TYPE, LINK_TYPE } from "../Constants";
import { RichTextType } from "../types/CommonTypes";
// Selectors
export const getCreatePageData = (state: StateType) => state.createPage;

export const getCreatePageRichText = (
  state: StateType
): Array<RichTextType | null | undefined> =>
  //@ts-ignore
  getCreatePageData(state)?.data?.filter(
    (item) => item?.type === DATA_TYPE.RICH_TEXT
  );

export const getExternalLinks = (state: StateType) => {
  const richTextData = getCreatePageRichText(state);

  const result = [];
  if (!richTextData) return;
  let currentIndex = 0;
  for (const data of richTextData) {
    if (data) {
      const textData = data.text;
      for (const allTypeData of textData) {
        if (allTypeData.type === LINK_TYPE) {
          result.push({
            index: currentIndex,
            url: allTypeData.url,
            description: allTypeData.description,
          });
          currentIndex++;
        }
        // find link in the nested children data
        const childrenLinks = allTypeData?.children?.filter(
          (item: any) => item.type === LINK_TYPE
        );
        for (const linkItem of childrenLinks) {
          result.push({
            index: currentIndex,
            url: linkItem.url,
            description: linkItem.description,
          });
          currentIndex++;
        }
      }
    }
  }
  return result;
};
