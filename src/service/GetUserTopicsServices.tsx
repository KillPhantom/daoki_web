import axios from "axios";
import type { GetUserTopicServicesType } from "../data/types/CommonTypes";
import { getAuthTokenCookie } from "../utils/Cookie";

export default (async function GetUserTopicsService(
  userId: string
): Promise<GetUserTopicServicesType> {
  const userToken = getAuthTokenCookie();
  const params = { userId };
  const config = {
    headers: {
      token: String(userToken),
    },
  };
  const { data } = await axios.post(`api/topic/get-all`, params, config);
  // @ts-ignore
  return data.data;
});
