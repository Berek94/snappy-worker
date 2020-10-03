import { WebhookMessage } from "./types";
import { sendMessage, editDialogName } from "../api/methods";
import VkApiError from "../api/VkApiError";

class VkBotCommand {
  constructor(private message: WebhookMessage) {}

  async reply(text: string, keyboard?: any) {
    try {
      await sendMessage(this.message.peer_id, text, keyboard);
    } catch (error) {}
  }

  async editDialogName(newTitle: string) {
    try {
      const basePublicDialogID = 2000000000;

      await editDialogName(this.message.peer_id - basePublicDialogID, newTitle);
    } catch (err: unknown) {
      const error = err as VkApiError;

      if (error.code === 100) {
        error.message = "Название не указано 🙄";
      }

      throw error;
    }
  }
}

export default VkBotCommand;
