import setRandomDialogName from "./handlers/setRandomDialogName";
import start from "./handlers/start";
import getWhatDayToday from "./handlers/getWhatDayToday";
// import setDialogName from "./handlers/setDialogName";
// import getRandomTweet from './handlers/getRandomTweet';
// import getCurrency from "./handlers/getCurrency";
// import getNews from "./handlers/getNews";
// import getQuote from "./handlers/getQuote";

import VkBot from "./VkBot";
import getSite from "./handlers/getSite";

const bot = new VkBot();

bot.command("старт", start);

bot.command("какой сегодня день", getWhatDayToday);

bot.command("случайное название чата", setRandomDialogName);

bot.command("caйтик", getSite);

export default bot;
