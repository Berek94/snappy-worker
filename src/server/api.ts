import { Router } from "express";
import getCurrentDayNamesRequest from "../request/getDayNamesRequest";

const router = Router();

router.get("/commands", async (_req, res, next) => {
  try {
    const dayNames = await getCurrentDayNamesRequest();

    res.json(dayNames);
  } catch (error) {
    next({ error });
  }
});

export default router;
