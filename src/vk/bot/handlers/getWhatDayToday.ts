import BaseError from "../../../common/BaseError";
import { getRandomDayNameRequest } from "../../../request/getDayNamesRequest";
import { CommandHandler } from "../types";

const whatDayToday: CommandHandler = async (ctx) => {
  try {
    const day = await getRandomDayNameRequest();

    await ctx.reply({ message: day });
  } catch (error) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default whatDayToday;
