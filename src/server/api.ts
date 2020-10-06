import { Router } from "express";
import getCurrentDayNamesRequest from "../request/getDayNamesRequest";
import getNewsRequest from "../request/getNewsRequest";
import puppeteer from "puppeteer";

const router = Router();

router.get("/what-day-today", async (_req, res, next) => {
  try {
    const dayNames = await getCurrentDayNamesRequest();

    res.json(dayNames);
  } catch (error) {
    next({ error });
  }
});

router.get("/news", async (_req, res, next) => {
  try {
    res.json(await getNewsRequest("index"));
  } catch (error) {
    next({ error });
  }
});

router.get("/time", (_req, res) => {
  const date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" })
  );

  res.json({
    day: date.getDate(),
    month: date.getMonth() + 1,
  });
});

router.get("/test", async (_req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
  );
  await page.goto("http://kakoysegodnyaprazdnik.ru/");

  const dayNames = await page.evaluate(() =>
    Array.from(document.querySelectorAll('span[itemprop="text"]')).map((node) =>
      node.textContent?.split("(")[0].trim()
    )
  );

  await browser.close();

  res.json(dayNames);
});

export default router;
