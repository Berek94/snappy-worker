import { getRandomNumber } from "../../../helpers";
import { CommandHandler } from "../VkBot";
import BaseError from "../../../common/BaseError";
import randomPhrases from "../db/randomPhrases.json";

const getRandomPhrase: CommandHandler = async (ctx) => {
  try {
    await ctx.reply({
      message: randomPhrases[getRandomNumber(randomPhrases.length)],
    });
  } catch (error) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default getRandomPhrase;
