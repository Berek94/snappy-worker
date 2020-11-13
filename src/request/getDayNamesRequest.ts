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
        await fetch("http://kakoysegodnyaprazdnik.ru/", "GET", null, {
          "Content-Type": "text/html",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
          "sec-ch-ua": `"\\Not;A\"Brand";v="99", "Google Chrome";v="85", "Chromium";v="85"`,
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "cross-site",
        })
      ).text();

      const daysNames = Array.from(
        htmlContent.matchAll(
          new RegExp('<span itemprop="text">(.*?)</span>', "g")
        )
      ).map(([, dayName]) =>
        dayName
          .replace(/\((.*)\)/g, "")
          .replace(/\s{2,}/g, " ")
          .trim()
      );

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
