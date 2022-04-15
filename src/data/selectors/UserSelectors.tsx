/* Types */
import { getAuthTokenCookie } from "../../utils/Cookie";
import type { StateType } from "../types/StateType";

// Selectors
export const getUserInfoData = (state: StateType) => state.userInfo;

export const getUserAuthToken = (state: StateType) =>
  getUserInfoData(state).authToken;

export const isLoggedIn = (state: StateType) =>
  Boolean(getAuthTokenCookie() || getUserAuthToken(state));

export const getUserTopics = (state: StateType) => {
  return [
    {
      title: "在NFT一哥BAYC头上套利80万美金的技术真相",
      link: "/example-page-1",
      index: 12,
      viewCount: "140",
    },
    {
      title: "NFTX官方doc 中文版",
      link: "/example-page-2",
      index: 1902,
      viewCount: "140",
    },
    {
      title: "NFTX官方doc 中文版",
      link: "/example-page-2",
      index: 1902,
      viewCount: "140",
    },
    {
      title: "NFTX官方doc 中文版",
      link: "/example-page-2",
      index: 1902,
      viewCount: "140",
    },
    {
      title: "NFTX官方doc 中文版",
      link: "/example-page-2",
      index: 1902,
      viewCount: "140",
    },
  ];
};
