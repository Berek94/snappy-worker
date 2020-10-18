import { Router } from "express";
import vkBot from ".";
import botCommands from "./VkBotCommands";

const router = Router();

router.post("/vk-bot", (req, res, next) => {
  try {
    vkBot.webhook(req, res);
  } catch (error) {
    next({ error });
  }
});

router.get("/api/commands", (_req, res, next) => {
  try {
    const dataToResponse = botCommands.map(({ name, description }) => ({
      name,
      description,
    }));

    res.json(dataToResponse);
  } catch (error) {
    next({ error });
  }
});

export default router;
