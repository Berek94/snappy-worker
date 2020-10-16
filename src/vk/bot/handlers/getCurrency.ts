import BaseError from "../../../common/BaseError";
import getCurrencyRequest from "../../../request/getCurrencyRequest";
import { CommandHandler } from "../VkBot";

const getCurrency: CommandHandler = async (ctx) => {
  try {
    await ctx.reply({ message: "💭" });
    const { usd, eur } = await getCurrencyRequest();

    const text = [`💵 Доллар: ${usd}`, `💶 Евро: ${eur}`].join("\n");

    await ctx.reply({ message: text });
  } catch (error: unknown) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default getCurrency;
