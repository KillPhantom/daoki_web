import axios from "axios";
import { CreateTopicContentType } from "../data/types/CommonTypes";

export default (async function CreateTopicService(
  title: string,
  content: Array<CreateTopicContentType>,
  token: string
): Promise<any> {
  const response = await axios({
    method: "post",
    url: `api/topic/create`,
    data: {
      name: title,
      content,
    },
    headers: {
      token,
    },
  });
  return response;
});

// ("624f6037bb7d1c7d71402208");
