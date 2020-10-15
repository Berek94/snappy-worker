import vkApiRequest from ".";
import VkApiError from "./VkApiError";

export const sendMessage = (
  peer_id: number,
  message?: string,
  keyboard?: any
) =>
  vkApiRequest("messages.send", {
    peer_id,
    message,
    keyboard,
  });

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
