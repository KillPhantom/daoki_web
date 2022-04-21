import axios from "axios";
import type { TopicDetailType } from "../data/types/CommonTypes";

export default (async function GetTopicDetailService(
  topicId: string
): Promise<TopicDetailType> {
  const params = { id: topicId };
  const { data } = await axios.get(`https://daoki.xyz/api/topic/id`, {
    params,
  });
  // @ts-ignore
  return data.data;
});
