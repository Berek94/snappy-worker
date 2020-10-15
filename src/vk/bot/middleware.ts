import { BotMiddleware } from "./VkBot";
import randomPhrases from "./db/randomPhrases.json";
import { calcChance, getRandomNumber } from "../../helpers";

export const randomAnswer: BotMiddleware = async (command) => {
  try {
    const isGotChance = calcChance(3);

    if (isGotChance) {
      const randomPhrase = randomPhrases[getRandomNumber(randomPhrases.length)];
      command.reply({
        message: randomPhrase,
        reply_to: command.message.id,
      });
    }
    return true;
  } catch (error) {
    return true;
  }
};
