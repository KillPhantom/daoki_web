import {
  CreateTopicContentType,
  QuoteTopicType,
} from "../data/types/CommonTypes";
import { post } from "../utils/API";

export default (async function CreateTopicService(
  title: string,
  content: Array<CreateTopicContentType>,
  token: string,
  quoteTopics?: Array<QuoteTopicType>
): Promise<any> {
  const data = {
    name: title,
    content,
    quoteTopics,
  };
  const headers = { token };
  const response = await post("/topic/create", data, null, headers);
  return response;
});

// ("624f6037bb7d1c7d71402208");
