import FetchError from "../../../fetch/FetchError";
import { getRandomTweetsRequest } from "../../../request/getTweetsRequest";
import { CommandHandler } from "../VkBot";

const getRandomTweet: CommandHandler = async (ctx) => {
  try {
    ctx.reply({ message: "💭" });
    const tweet = await getRandomTweetsRequest();

    ctx.reply({ message: tweet });
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      ctx.reply({ message: error.message });
    }
  }
};

export default getRandomTweet;
