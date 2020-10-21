import { BotMiddleware } from "./VkBot";
import randomPhrases from "./db/randomPhrases.json";
import { calcChance, getRandomNumber } from "../../helpers";

export const randomAnswer: BotMiddleware = async (ctx) => {
  try {
    const isGotChance = calcChance(30);

    if (isGotChance) {
      await ctx.reply({
        message: randomPhrases[getRandomNumber(randomPhrases.length)],
      });
    }
    return true;
  } catch (error) {
    console.error("Middleware error:randomAnswer", error);
    return true;
  }
};
