import { get } from "../utils/API";
import type { TopicDetailType } from "../data/types/CommonTypes";

export default (async function GetTopicDetailService(
  topicId: string
): Promise<TopicDetailType> {
  const params = { id: topicId };
  const { data } = await get("/topic/id", params);
  // @ts-ignore
  return data.data;
});
