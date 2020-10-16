import { WebhookMessage } from "./types";
import { sendMessage, editDialogName } from "../api/methods";
import { SendMessageParams } from "../api/type";

class VkBotMessageContext {
  constructor(public message: WebhookMessage) {}

  async reply(data: Omit<SendMessageParams, "peer_id">) {
    sendMessage({
      peer_id: this.message.peer_id,
      ...data,
    });
  }

  async changeDialogTitle(newTitle: string) {
    const basePublicDialogID = 2000000000;

    editDialogName(this.message.peer_id - basePublicDialogID, newTitle);
  }
}

export default VkBotMessageContext;
