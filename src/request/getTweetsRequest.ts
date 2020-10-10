import fetch from "../fetch";
import { getRandomNumber } from "../helpers";

const getTweetsRequest = async () => {
  try {
    const tweets: string[] = await (
      await fetch("http://localhost:8888/tweets")
    ).json();

    return tweets;
  } catch (error) {
    throw error;
  }
};

export const getRandomTweetsRequest = async () => {
  try {
    const tweets = await getTweetsRequest();
    const randomTweet = tweets[getRandomNumber(tweets.length)];

    return randomTweet ?? "Что-то не так 🗿";
  } catch (error) {
    throw error;
  }
};

export default getTweetsRequest;
