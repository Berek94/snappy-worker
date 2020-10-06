import fetch from "../fetch";
import { getRandomNumber } from "../helpers";

let lastRequestDate = 0;
let cachedNames: string[] = [];

const getCurrentDayNamesRequest = async () => {
  try {
    const currentDate = new Date().getDate();

    if (lastRequestDate !== currentDate) {
      lastRequestDate = currentDate;
      const htmlContent = await (
        await fetch("https://prazdnikisegodnya.ru/")
      ).text();

      const daysNames =
        htmlContent.match(/(День .*)</g)?.map((i) => i.replace(/<|:/g, "")) ??
        [];

      cachedNames = daysNames;
    }

    return cachedNames;
  } catch (error) {
    throw error;
  }
};

export const getRandomDayNameRequest = async () => {
  try {
    const dayNames = await getCurrentDayNamesRequest();
    const randomDay = dayNames[getRandomNumber(dayNames.length)];

    return randomDay ?? "Что-то не так 🗿";
  } catch (error) {
    throw error;
  }
};

export default getCurrentDayNamesRequest;
