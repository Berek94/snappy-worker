import BaseError from "../../../common/BaseError";
import { getRandomNewsRequest } from "../../../request/getNewsRequest";
import { CommandHandler } from "../VkBot";

const getNews: CommandHandler = async (ctx) => {
  try {
    const news = await getRandomNewsRequest();
    const text = [`⭕ ${news.title}`, news.description, news.link].join("\n\n");

    await ctx.reply({ message: text });
  } catch (error) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default getNews;
