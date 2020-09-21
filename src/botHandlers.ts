import botEvent, { Listener } from "./botEvent";
import { ALEX_NICKNAME, ALEX_VK_ID } from "./constants";
import currencyRequest from "./request/currencyRequest";
import { RequestError } from "./request/fetch";
import getQuoteRequest from "./request/getQuoteRequest";
import whatDayTodayRequest from "./request/whatDayTodayRequest";
import { botStart, editChat, sendMessage } from "./vkApi";

botEvent.on("старт", (message) => {
  try {
    botStart(message.peer_id);
  } catch (error) {
    sendMessage(message.peer_id, "Что-то не так, попробуй еще раз 🤯");
  }
});

botEvent.on("какой сегодня день", async (message) => {
  try {
    const dayToday = await whatDayTodayRequest();
    sendMessage(message.peer_id, `✅ ${dayToday}`);
  } catch (error: unknown) {
    if (error instanceof RequestError) {
      sendMessage(message.peer_id, error.message);
    }
  }
});

botEvent.on("изменить название", async (message) => {
  try {
    const dayToday = await whatDayTodayRequest();

    editChat(message.peer_id - 2000000000, dayToday);
  } catch (error: unknown) {
    if (error instanceof RequestError) {
      sendMessage(message.peer_id, error.message);
    }
  }
});

const currencyHandler: Listener = async (message) => {
  try {
    const { usd, eur } = await currencyRequest();

    const formatCurrency = (value: number, currency: "USD" | "EUR") =>
      new Intl.NumberFormat("en", { style: "currency", currency }).format(
        value
      );

    const text = [
      `💵 Доллар: ${formatCurrency(usd.value, "USD")}`,
      `💶 Евро: ${formatCurrency(eur.value, "EUR")}`,
    ].join("\n");

    sendMessage(message.peer_id, text);
  } catch (error: unknown) {
    if (error instanceof RequestError) {
      sendMessage(message.peer_id, error.message);
    }
  }
};

botEvent.on("курс доллара", currencyHandler);
botEvent.on("курс евро", currencyHandler);

botEvent.on("цитатка", async (message) => {
  try {
    const quote = await getQuoteRequest();

    sendMessage(message.peer_id, quote);
  } catch (error: unknown) {
    if (error instanceof RequestError) {
      sendMessage(message.peer_id, error.message);
    }
  }
});

botEvent.on("напомнить леше", (message) => {
  try {
    sendMessage(
      message.peer_id,
      `[id${ALEX_VK_ID}|@${ALEX_NICKNAME}] Когда идем в аквапарк? 🗿`
    );
  } catch (error) {}
});
