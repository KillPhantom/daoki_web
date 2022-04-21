/* Services */

import GetUserTopicsServices from "../../service/GetUserTopicsServices";
import DeleteTopicServices from "../../service/DeleteTopicServices";

export const SET_USER_AUTH_TOKEN = "SET_USER_AUTH_TOKEN" as const;

export const GET_USER_TOPICS = "GET_USER_TOPICS" as const;
export const DELETE_USER_TOPIC = "DELETE_USER_TOPIC" as const;
export const GET_USER_TOPICS_FULFILLED = "GET_USER_TOPICS_FULFILLED" as const;

export const setUserAuthToken = (token: string) => ({
  type: SET_USER_AUTH_TOKEN,
  payload: token,
});

export const fetchUserTopics = (userId: string) => ({
  type: GET_USER_TOPICS,
  payload: GetUserTopicsServices(userId),
});

export const deleteUserTopic = (topicId: string, token: string) => ({
  type: DELETE_USER_TOPIC,
  payload: DeleteTopicServices(topicId, token),
});
