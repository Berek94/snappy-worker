import { CommandHandler } from "../VkBot";

const getSite: CommandHandler = async (ctx) => {
  try {
    await ctx.reply({ message: "https://snappy-worker.ru/" });
  } catch (error) {
    console.error("Bot command error: getSite", error);
  }
};

export default getSite;
