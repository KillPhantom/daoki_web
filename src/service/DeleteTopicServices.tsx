import { post } from "../utils/API";

export default (async function DeleteTopicService(
  topicId: string,
  token: string
): Promise<any> {
  await post("/topic/delete", null, { id: topicId }, { token });
  window.location.reload();
});
