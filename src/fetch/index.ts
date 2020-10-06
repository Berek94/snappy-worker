import nodeFetch from "node-fetch";
import FetchError from "./FetchError";

const fetch = async (
  url: string,
  method: "GET" | "POST" = "GET",
  data?: any,
  headers?: Record<string, string>
) => {
  try {
    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    };

    return await nodeFetch(url, requestOptions);
  } catch (error) {
    throw new FetchError(error);
  }
};

export default fetch;
