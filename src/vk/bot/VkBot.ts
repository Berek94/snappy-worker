import { EventEmitter } from "events";
import { Request, Response } from "express";
import { CONFIRMATION } from "../../config";
import { WebhookRequest } from "./types";
import VkBotCommand from "./VkBotCommand";
import { sendMessage } from "../api/methods";

export type CommandHandler = (context: VkBotCommand, args: string) => void;

class VkBot {
  private eventEmitter = new EventEmitter();

  private parseCommand(commandString: string) {
    const [command, stringParams = ""] = commandString
      .replace(/\[.*\]/g, "")
      .trim()
      .split(":");

    return {
      command: command.toLowerCase(),
      args: stringParams.trim(),
    };
  }

  webhook = (req: Request, res: Response) => {
    const body = req.body as WebhookRequest;

    if (body.type === "confirmation") {
      return res.send(CONFIRMATION);
    } else if (body.type === "message_new") {
      const { message } = body.object;
      const { command, args } = this.parseCommand(message.text);

      this.eventEmitter.emit(command, new VkBotCommand(message), args);
    }

    console.log({ type: body.type, data: body.object });

    return res.send("ok");
  };

  command = (command: string, commandCallback: CommandHandler) => {
    this.eventEmitter.on(command, commandCallback);
  };

  send = async (dialogID: number, message: string) => {
    try {
      await sendMessage(dialogID, message);
    } catch (error) {}
  };
}

export default VkBot;
