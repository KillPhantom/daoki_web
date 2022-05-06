import { post } from "../utils/API";
import { SearchResponse } from "../data/types/CommonTypes";
import { getAuthTokenCookie } from "../utils/Cookie";

export default (async function TopicSearchService(
  keyword: string,
  page: number,
  size: number
): Promise<SearchResponse> {
  const data = { keyword, page, size };
  const token = getAuthTokenCookie();
  const headers = { token };
  const response = await post("/topic/name", data, null, headers);
  return response.data.data;
});
