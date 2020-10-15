import vkApiRequest from ".";
import { SendMessageParams } from "./type";
import VkApiError from "./VkApiError";

export const sendMessage = (data: SendMessageParams) =>
  vkApiRequest("messages.send", data);

export const editDialogName = async (chat_id: number, title: string) => {
  try {
    await vkApiRequest("messages.editChat", { chat_id, title });
  } catch (err: unknown) {
    const error = err as VkApiError;

    if (error.code === 100) {
      error.message = "Название не указано 🙄";
    }

    throw error;
  }
};
