import fetch from "node-fetch";
import { ACCESS_TOKEN } from "../../config";
import VkApiError from "./VkApiError";

type BaseResponse = {
  error?: {
    error_code: number;
    error_msg: string;
  };
};

const vkApiRequest = async <Response = {}>(
  method: string,
  data: any
): Promise<BaseResponse & Response> => {
  try {
    const params = new URLSearchParams();

    for (let key in data) {
      const value = data[key];

      if (value !== undefined) {
        params.append(
          key,
          typeof value === "string" ? value : JSON.stringify(value)
        );
      }
    }

    params.append("random_id", `${Math.round(Math.random() * 10 ** 17)}`);
    params.append("access_token", ACCESS_TOKEN);
    params.append("v", "5.124");

    const response = (await (
      await fetch(`https://api.vk.com/method/${method}?${params.toString()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json()) as BaseResponse & Response;

    if (response.error) {
      throw new VkApiError(
        new Error(response.error.error_msg),
        response.error.error_code
      );
    }

    return response;
  } catch (error) {
    if (error instanceof VkApiError) {
      throw error;
    }

    error.message = "Ошибка VK api 🤯";
    throw new VkApiError(error, 0);
  }
};

export default vkApiRequest;
