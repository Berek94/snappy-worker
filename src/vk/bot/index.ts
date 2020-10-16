import setRandomDialogName from "./handlers/setRandomDialogName";
import start from "./handlers/start";
import getWhatDayToday from "./handlers/getWhatDayToday";
import getSite from "./handlers/getSite";
import { randomAnswer } from "./middleware";
// import setDialogName from "./handlers/setDialogName";
// import getRandomTweet from './handlers/getRandomTweet';
// import getCurrency from "./handlers/getCurrency";
// import getNews from "./handlers/getNews";
// import getQuote from "./handlers/getQuote";

import VkBot from "./VkBot";

const bot = new VkBot([randomAnswer]);

bot.command("старт", start);

bot.command("какой сегодня день", getWhatDayToday);

bot.command("случайное название чата", setRandomDialogName);

bot.command("сайтик", getSite);

export default bot;
