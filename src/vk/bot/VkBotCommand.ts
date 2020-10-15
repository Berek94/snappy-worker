import { BotCommandReplyParams, WebhookMessage } from "./types";
import { sendMessage, editDialogName } from "../api/methods";

class VkBotCommand {
  constructor(public message: WebhookMessage) {}

  async reply(data: BotCommandReplyParams) {
    try {
      await sendMessage({
        peer_id: this.message.peer_id,
        ...data,
      });
    } catch (error) {}
  }

  async changeDialogTitle(newTitle: string) {
    const basePublicDialogID = 2000000000;

    editDialogName(this.message.peer_id - basePublicDialogID, newTitle);
  }
}

export default VkBotCommand;
