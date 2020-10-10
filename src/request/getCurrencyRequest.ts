import fetch from "../fetch";

export type Response = {
  usd: string;
  eur: string;
};

const getCurrencyRequest = async () => {
  try {
    const currency: Response = await (
      await fetch("http://localhost:8888/currency")
    ).json();

    return currency;
  } catch (error) {
    throw error;
  }
};

export default getCurrencyRequest;
