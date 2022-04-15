/* Services */

import GetUserTopicsServices from "../../service/GetUserTopicsServices";

export const SET_USER_AUTH_TOKEN = "SET_USER_AUTH_TOKEN" as const;

export const GET_USER_TOPICS = "GET_USER_TOPICS" as const;
export const GET_USER_TOPICS_FULFILLED = "GET_USER_TOPICS_FULFILLED" as const;

export const setUserAuthToken = (token: string) => ({
  type: SET_USER_AUTH_TOKEN,
  payload: token,
});

export const getUserTopics = (userId: string) => ({
  type: GET_USER_TOPICS,
  payload: GetUserTopicsServices(userId),
});
