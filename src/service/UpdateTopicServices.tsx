import { post } from "../utils/API";
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
  const data = {
    topicId,
    name: title,
    content,
    quoteTopics,
  };
  const headers = { token };
  const response = await post("/topic/update", data, null, headers);
  return response;
});
