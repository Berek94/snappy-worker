import VkApiError from "../../api/VkApiError";
import { CommandHandler } from "../VkBot";

const setDialogName: CommandHandler = async (ctx, newName) => {
  try {
    await ctx.editDialogName(newName);
  } catch (err: unknown) {
    const error = err as VkApiError;
    ctx.reply(error.message);
  }
};

export default setDialogName;
