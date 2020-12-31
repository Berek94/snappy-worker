import { getDate } from "../../../helpers";
import { bestChatID } from "../constants";
import VkBot from "../VkBot";

const newYearJob = (bot: VkBot) => {
  let isNotified = false;

  setInterval(() => {
    const date = getDate();

    if (date.getMonth() === 0 && date.getDate() === 1) {
      if (date.getHours() === 0 && date.getMinutes() >= 1 && !isNotified) {
        const message = [
          `
            Пусть мечты на Новый год
            Все твои сбываются,
            А по жизни, что ебeт,
            На хуй отправляется!
          `,
          "С НОВЫМ ГОДОМ! 🎄🍾🎇",
        ].join("\n\n");

        bot.send(bestChatID, message);
        isNotified = true;
      }
    } else {
      isNotified = false;
    }
  }, 1000 * 60 * 8);
};

export default newYearJob;
