import { randomAnswer } from "./middleware";
import botCommands from "./VkBotCommands";
import VkBot from "./VkBot";
import notifyAboutPaymentJob from "./cron-jobs/notifyAboutPaymentJob";
import everyDayImageJob from "./cron-jobs/everyDayImageJob";

const bot = new VkBot([randomAnswer]);

botCommands.forEach(({ name, handler }) => {
  bot.command(name, handler);
});

notifyAboutPaymentJob(bot);
everyDayImageJob(bot);

export default bot;
