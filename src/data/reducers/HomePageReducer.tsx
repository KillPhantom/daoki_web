/* Actions */
import {
  SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED,
  FETCH_HOME_PAGE_INITIAL_DATA,
  SEARCH_TOPIC_DATA_FULFILLED,
} from "../actions/HomePageActions";

/* Types */
import type { ActionType } from "../actions/HomePageActionTypes";
import type { StateType } from "../types/HomePageStateType";

const DEFAULT_STATE = {
  hotTopics: [
    {
      title: "Top six Citation Index",
      data: [
        {
          title: "在NFT一哥BAYC头上套利80万美金的技术真相",
          link: "/example-page-1",
          description: "...",
        },
        {
          title: "NFTX 官方中文介绍",
          link: "/example-page-2",
          description: "NFTX 中文介绍",
        },
        {
          title: "小浣熊第一印象",
          link: "/example-page-4",
          description: "...",
        },
        {
          title: "Raccoon Chan 小浣熊",
          link: "/example-page-5",
          description: "...",
        },
      ],
    },
    {
      title: "Top six Citation Index",
      data: [
        {
          title: "Coming soon",
          link: "#",
          description: "...",
        },
        {
          title: "Coming soon",
          link: "#",
          description: "...",
        },
        {
          title: "Coming soon",
          link: "#",
          description: "...",
        },
      ],
    },
  ],
  rewardList: [
    {
      title: "Reward List",
      link: "#",
      description: "...",
    },
    {
      title: "Reward List",
      link: "#",
      description: "...",
    },
    {
      title: "Reward List",
      link: "#",
      description: "...",
    },
  ],
};

const HomePageReducer = (
  state: StateType = DEFAULT_STATE,
  action: ActionType
) => {
  switch (action.type) {
    case SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED:
      return state;
    case FETCH_HOME_PAGE_INITIAL_DATA:
      return {
        ...state,
      };
    case SEARCH_TOPIC_DATA_FULFILLED:
      const data = action.payload;
      return {
        ...state,
        searchResult: data,
      };
    default:
      //   ((checkType: never) => checkType)(action);
      break;
  }

  return state;
};

export default HomePageReducer;
