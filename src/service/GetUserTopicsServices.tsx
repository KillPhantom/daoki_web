import axios from "axios";
import type { GetUserTopicServicesType } from "../data/types/CommonTypes";
import { getAuthTokenCookie } from "../utils/Cookie";

export default (async function GetUserTopicsService(
  userId: string
): Promise<GetUserTopicServicesType> {
  const userToken = getAuthTokenCookie();
  const params = { page: 0, size: 100 };
  const { data } = await axios.post(
    `https://daoki.xyz/api/topic/get-all-topics`,
    params,
    {
      headers: { token: String(userToken) },
    }
  );
  // @ts-ignore
  return data.data;
});
