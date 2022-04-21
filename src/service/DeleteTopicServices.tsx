import axios from "axios";
export default (async function DeleteTopicService(
  topicId: string,
  token: string
): Promise<any> {
  await axios({
    method: "post",
    url: `https://daoki.xyz/api/topic/delete`,
    params: {
      id: topicId,
    },
    headers: {
      token,
    },
  });
});
