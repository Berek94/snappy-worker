import { randomAnswer } from "./middleware";
import botCommands from "./VkBotCommands";
import VkBot from "./VkBot";
import notifyAboutPaymentJob from "./cron-jobs/notifyAboutPaymentJob";

const bot = new VkBot([randomAnswer]);

botCommands.forEach(({ name, handler }) => {
  bot.command(name, handler);
});

notifyAboutPaymentJob(bot);

export default bot;
