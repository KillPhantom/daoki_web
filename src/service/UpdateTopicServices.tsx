import axios from "axios";
import {
  CreateTopicContentType,
  QuoteTopicType,
} from "../data/types/CommonTypes";

export default (async function UpdateTopicService(
  topicId: string,
  title: string,
  content: Array<CreateTopicContentType>,
  token: string,
  quoteTopics?: Array<QuoteTopicType>
): Promise<any> {
  const response = await axios({
    method: "post",
    url: `https://daoki.xyz/api/topic/update`,
    data: {
      topicId,
      name: title,
      content,
      quoteTopics,
    },
    headers: {
      token,
    },
  });
  return response;
});
