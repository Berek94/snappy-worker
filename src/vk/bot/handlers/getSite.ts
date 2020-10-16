import BaseError from "../../../common/BaseError";
import { CommandHandler } from "../VkBot";

const getSite: CommandHandler = async (ctx) => {
  try {
    await ctx.reply({ message: "https://snappy-worker.ru/" });
  } catch (error: unknown) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default getSite;
