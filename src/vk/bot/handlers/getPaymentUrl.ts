import BaseError from "../../../common/BaseError";
import { paymentMessage } from "../constants";
import { CommandHandler } from "../types";

const getPaymentUrl: CommandHandler = async (ctx) => {
  try {
    await ctx.reply({
      message: paymentMessage,
    });
  } catch (error: unknown) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default getPaymentUrl;
