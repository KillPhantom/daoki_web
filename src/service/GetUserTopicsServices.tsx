import { post } from "../utils/API";
import type { GetUserTopicServicesType } from "../data/types/CommonTypes";
import { getAuthTokenCookie } from "../utils/Cookie";

export default (async function GetUserTopicsService(
  userId: string
): Promise<GetUserTopicServicesType> {
  const userToken = getAuthTokenCookie();
  const body = { page: 0, size: 100 };
  const headers = { token: String(userToken) };
  const { data } = await post("/topic/get-all-topics", body, null, headers);
  // @ts-ignore
  return data.data;
});
