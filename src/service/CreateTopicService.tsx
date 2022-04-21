import axios from "axios";
import {
  CreateTopicContentType,
  QuoteTopicType,
} from "../data/types/CommonTypes";

export default (async function CreateTopicService(
  title: string,
  content: Array<CreateTopicContentType>,
  token: string,
  quoteTopics?: Array<QuoteTopicType>
): Promise<any> {
  const response = await axios({
    method: "post",
    url: `https://daoki.xyz/api/topic/create`,
    data: {
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

// ("624f6037bb7d1c7d71402208");
