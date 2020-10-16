import { BotMiddleware } from "./VkBot";
import randomPhrases from "./db/randomPhrases.json";
import { calcChance, getRandomNumber } from "../../helpers";

export const randomAnswer: BotMiddleware = async (command) => {
  try {
    const isGotChance = calcChance(10);

    if (isGotChance) {
      await command.reply({
        message: randomPhrases[getRandomNumber(randomPhrases.length)],
      });
    }
    return true;
  } catch (error) {
    console.error("Middleware error:randomAnswer", error);
    return true;
  }
};
