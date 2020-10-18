import { randomAnswer } from "./middleware";
import botCommands from "./VkBotCommands";
import VkBot from "./VkBot";

const bot = new VkBot([randomAnswer]);

botCommands.forEach(({ name, handler }) => {
  bot.command(name, handler);
});

export default bot;
