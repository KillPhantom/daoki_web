/* eslint-disable import/no-anonymous-default-export */
/* Actions */
import {
  SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED,
  FETCH_HOME_PAGE_INITIAL_DATA_FULFILLED,
  FETCH_HOME_PAGE_INITIAL_DATA,
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
          title: "Hot Topics",
          link: "#",
          description: "Brief introduction ....",
        },
        {
          title: "Hot Topics",
          link: "#",
          description: "Brief introduction ....",
        },
        {
          title: "Hot Topics",
          link: "#",
          description: "Brief introduction ....",
        },
        {
          title: "Hot Topics",
          link: "#",
          description: "Brief introduction ....",
        },
      ],
    },
    {
      title: "Top six Citation Index",
      data: [
        {
          title: "Hot Topics",
          link: "#",
          description: "Brief introduction ....",
        },
        {
          title: "Hot Topics",
          link: "#",
          description: "Brief introduction ....",
        },
        {
          title: "Hot Topics",
          link: "#",
          description: "Brief introduction ....",
        },
      ],
    },
  ],
  rewardList: [
    {
      title: "Reward List",
      link: "#",
      description: "Brief introduction ....",
    },
    {
      title: "Reward List",
      link: "#",
      description: "Brief introduction ....",
    },
    {
      title: "Reward List",
      link: "#",
      description: "Brief introduction ....",
    },
  ],
};

export default (state: StateType = DEFAULT_STATE, action: ActionType) => {
  switch (action.type) {
    case SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED:
      return state;
    case FETCH_HOME_PAGE_INITIAL_DATA:
      return {
        ...state,
      };
    default:
      //   ((checkType: never) => checkType)(action);
      break;
  }

  return state;
};
