import axios from "axios";

export const post = async (
  url: string,
  data?: any,
  params?: any,
  headers?: any
): Promise<any> => {
  const host =
    process.env.NODE_ENV === "production"
      ? "https://daoki.xyz/api"
      : "http://127.0.0.1:8080/daoki";
  const response = await axios({
    method: "post",
    url: `${host}${url}`,
    data: data,
    params: params,
    headers: headers,
  });
  return response;
};

export const get = async (url: string, params?: any): Promise<any> => {
  const host =
    process.env.NODE_ENV === "production"
      ? "https://daoki.xyz/api"
      : "http://127.0.0.1:8080/daoki";
  const response = await axios.get(`${host}${url}`, {
    params,
  });
  return response;
};
