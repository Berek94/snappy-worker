import { getRandomNumber } from "../../../helpers";
import BaseError from "../../../common/BaseError";
import randomPhrases from "../db/randomPhrases.json";
import { CommandHandler } from "../types";

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
