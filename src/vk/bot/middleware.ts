import { BotMiddleware } from "./VkBot";
import randomPhrases from "./db/randomPhrases.json";
import { calcChance, getRandomNumber } from "../../helpers";

export const randomAnswer: BotMiddleware = async (command) => {
  try {
    const isGotChance = calcChance(20);

    if (isGotChance) {
      const randomPhrase = randomPhrases[getRandomNumber(randomPhrases.length)];
      const reply_to =
        command.message.id || command.message.conversation_message_id;

      command.reply({ message: randomPhrase, reply_to });
    }
    return true;
  } catch (error) {
    return true;
  }
};
