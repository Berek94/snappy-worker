import FetchError from "../../../fetch/FetchError";
import { getRandomDayNameRequest } from "../../../request/getDayNamesRequest";
import { CommandHandler } from "../VkBot";

const whatDayToday: CommandHandler = async (ctx) => {
  try {
    const day = await getRandomDayNameRequest();

    ctx.reply({ message: day });
  } catch (error) {
    if (error instanceof FetchError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default whatDayToday;
