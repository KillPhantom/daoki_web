import type { TopicAbstractType } from "./CommonTypes";

export type StateType = {
  userPublicAddress: string | null;
  authToken: string | null;
  userTopics?: Array<TopicAbstractType>;
  access?: any; // for future different user
};
