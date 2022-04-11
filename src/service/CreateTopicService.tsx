import axios from "axios";
import { CreateTopicContentType } from "../data/types/CommonTypes";

export default (async function CreateTopicService(
  title: string,
  content: Array<CreateTopicContentType>,
  operator: string
): Promise<any> {
  await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_URL}/topic/create`,
    data: {
      name: title,
      content,
      operator,
    },
  });
});

// ("624f6037bb7d1c7d71402208");
