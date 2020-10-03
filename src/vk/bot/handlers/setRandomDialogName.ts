import FetchError from "../../../fetch/FetchError";
import { getRandomDayNameRequest } from "../../../request/getDayNamesRequest";
import VkApiError from "../../api/VkApiError";
import { CommandHandler } from "../VkBot";

const setRandomDialogName: CommandHandler = async (ctx) => {
  try {
    const day = await getRandomDayNameRequest();

    await ctx.editDialogName(day);
  } catch (error: unknown) {
    if (error instanceof VkApiError || error instanceof FetchError) {
      ctx.reply(error.message);
    }
  }
};

export default setRandomDialogName;
