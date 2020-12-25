import { getDate } from "../../../helpers";
import { bestChatID, paymentMessage } from "../constants";
import VkBot from "../VkBot";

const notifyAboutPaymentJob = (bot: VkBot) => {
  let isNotified = false;

  setInterval(() => {
    const date = getDate();

    if (date.getDate() === 20) {
      if (date.getHours() >= 11 && !isNotified) {
        bot.send(bestChatID, paymentMessage);
        isNotified = true;
      }
    } else {
      isNotified = false;
    }
  }, 1000 * 60 * 60);
};

export default notifyAboutPaymentJob;
