import { CommandHandler } from "./VkBot";
import setRandomDialogName from "./handlers/setRandomDialogName";
import start from "./handlers/start";
import getWhatDayToday from "./handlers/getWhatDayToday";
import getSite from "./handlers/getSite";

type Command = {
  name: string;
  description: string;
  handler: CommandHandler;
};

const commands: Command[] = [
  {
    name: "старт",
    description: "Инициализирует кнопки для команд бота в чате",
    handler: start,
  },
  {
    name: "какой сегодня день",
    description:
      "Получить случайное название праздника, который празднуется сегодня",
    handler: getWhatDayToday,
  },
  {
    name: "случайное название чата",
    description:
      "Изменить название чата на случайный праздник, который празднуется сегодня",
    handler: setRandomDialogName,
  },
  {
    name: "сайтик",
    description: "Ссылка на этот сайт 🙂",
    handler: getSite,
  },
];

export default commands;
