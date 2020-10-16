import { EventEmitter } from "events";
import { Request, Response } from "express";
import { CONFIRMATION } from "../../config";
import { WebhookRequest } from "./types";
import VkBotMessageContext from "./VkBotMessageContext";
import { sendMessage } from "../api/methods";

export type CommandHandler = (
  context: VkBotMessageContext,
  args: string
) => void;

export type BotMiddleware = (context: VkBotMessageContext) => Promise<boolean>;

class VkBot {
  private eventEmitter;
  private middlewareList;

  constructor(middlewareList: BotMiddleware[]) {
    this.eventEmitter = new EventEmitter();
    this.middlewareList = middlewareList;
  }

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

  private callMiddleware(messageContext: VkBotMessageContext) {
    this.middlewareList.reduce(
      async (result, middleware) =>
        (await result) && middleware(messageContext),
      Promise.resolve(true)
    );
  }

  webhook = async (req: Request, res: Response) => {
    const body = req.body as WebhookRequest;

    if (body.type === "confirmation") {
      return res.send(CONFIRMATION);
    } else if (body.type === "message_new") {
      const { message } = body.object;
      const messageContext = new VkBotMessageContext(message);

      this.callMiddleware(messageContext);

      const { command, args } = this.parseCommand(message.text);
      this.eventEmitter.emit(command, messageContext, args);
    }

    console.log({ type: body.type, data: body.object });

    return res.send("ok");
  };

  command = (command: string, commandCallback: CommandHandler) => {
    this.eventEmitter.on(command, commandCallback);
  };

  send = async (dialogID: number, message: string) => {
    try {
      await sendMessage({ peer_id: dialogID, message });
    } catch (error) {}
  };
}

export default VkBot;
