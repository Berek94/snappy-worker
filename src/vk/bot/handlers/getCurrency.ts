import FetchError from "../../../fetch/FetchError";
import getCurrencyRequest from "../../../request/getCurrencyRequest";
import { CommandHandler } from "../VkBot";

const getCurrency: CommandHandler = async (ctx) => {
  try {
    const { usd, eur } = await getCurrencyRequest();

    const text = [`💵 Доллар: ${usd}`, `💶 Евро: ${eur}`].join("\n");

    ctx.reply(text);
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      ctx.reply(error.message);
    }
  }
};

export default getCurrency;
