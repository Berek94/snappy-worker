import BaseError from "../../../common/BaseError";
import getQuoteRequest from "../../../request/getQuoteRequest";
import { CommandHandler } from "../VkBot";

const getQuote: CommandHandler = async (ctx) => {
  try {
    const quote = await getQuoteRequest();

    await ctx.reply({ message: quote });
  } catch (error: unknown) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default getQuote;
