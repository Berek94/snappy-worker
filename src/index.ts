import { Router } from "express";
import server from "./server";
import vkBot from "./vk/bot";

const router = Router();

router.post("/vk-bot", (req, res, next) => {
  try {
    console.log(req);
    vkBot.webhook(req, res);
  } catch (error) {
    next({ error });
  }
});

server(router);
