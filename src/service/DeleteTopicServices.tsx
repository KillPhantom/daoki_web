import axios from "axios";
export default (async function DeleteTopicService(
  topicId: string,
  token: string
): Promise<any> {
  await axios({
    method: "post",
    url: `api/topic/delete`,
    params: {
      id: topicId,
    },
    headers: {
      token,
    },
  });
});
