import BaseError from "../../../common/BaseError";
import { getRandomDayNameRequest } from "../../../request/getDayNamesRequest";
import { CommandHandler } from "../types";

const setRandomDialogName: CommandHandler = async (ctx) => {
  try {
    await ctx.changeDialogTitle(await getRandomDayNameRequest());
  } catch (error: unknown) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default setRandomDialogName;
