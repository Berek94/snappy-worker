import FetchError from "../../../fetch/FetchError";
import { getRandomTweetsRequest } from "../../../request/getTweetsRequest";
import { CommandHandler } from "../VkBot";

const getRandomTweet: CommandHandler = async (ctx) => {
  try {
    ctx.reply("💭");
    const tweet = await getRandomTweetsRequest();

    ctx.reply(tweet);
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      ctx.reply(error.message);
    }
  }
};

export default getRandomTweet;
