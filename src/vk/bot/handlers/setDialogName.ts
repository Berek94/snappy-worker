import VkApiError from "../../api/VkApiError";
import { CommandHandler } from "../types";

const setDialogName: CommandHandler = async (ctx, newName) => {
  try {
    await ctx.changeDialogTitle(newName);
  } catch (err: unknown) {
    const error = err as VkApiError;
    ctx.reply({ message: error.message });
  }
};

export default setDialogName;
