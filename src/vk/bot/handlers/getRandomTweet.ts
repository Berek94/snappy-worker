import BaseError from "../../../common/BaseError";
import { getRandomTweetsRequest } from "../../../request/getTweetsRequest";
import { CommandHandler } from "../VkBot";

const getRandomTweet: CommandHandler = async (ctx) => {
  try {
    await ctx.reply({ message: "💭" });
    const tweet = await getRandomTweetsRequest();

    await ctx.reply({ message: tweet });
  } catch (error: unknown) {
    if (error instanceof BaseError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default getRandomTweet;
