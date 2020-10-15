import FetchError from "../../../fetch/FetchError";
import { getRandomDayNameRequest } from "../../../request/getDayNamesRequest";
import VkApiError from "../../api/VkApiError";
import { CommandHandler } from "../VkBot";

const setRandomDialogName: CommandHandler = async (ctx) => {
  try {
    await ctx.changeDialogTitle(await getRandomDayNameRequest());
  } catch (error: unknown) {
    if (error instanceof VkApiError || error instanceof FetchError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default setRandomDialogName;
