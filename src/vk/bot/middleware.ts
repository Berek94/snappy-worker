import { BotMiddleware } from "./types";
import { calcChance } from "../../helpers";
import fetch from "../../fetch";

export const randomAnswer: BotMiddleware = async (ctx) => {
  try {
    const isGotChance = calcChance(8);

    if (isGotChance) {
      const { insult: message } = await (
        await fetch(
          "https://evilinsult.com/generate_insult.php?lang=ru&type=json"
        )
      ).json();
      await ctx.reply({ message });
    }
    return true;
  } catch (error) {
    console.error("Middleware error:randomAnswer", error);
    return true;
  }
};
