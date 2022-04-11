import axios from "axios";
import type { TopicDetailType } from "../data/types/CommonTypes";

export default (async function CreateTopicService(
  topicId: string
): Promise<TopicDetailType> {
  const params = { id: topicId };
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/topic/id`,
    { params }
  );
  // @ts-ignore
  return data.data;
});
