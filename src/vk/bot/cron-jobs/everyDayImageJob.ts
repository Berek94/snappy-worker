// import { getDate } from "../../../helpers";
// import { bestChatID, paymentMessage } from "../constants";
import VkBot from "../VkBot";
import path from "path";
import fs from "fs";
import { getRandomNumber } from "../../../helpers";
import { loadImage } from "../../api/methods";
import { IS_PRODUCTION } from "../../../config";

const myID = 58673372;

const everyDayImageJob = async (bot: VkBot) => {
  try {
    const imagesPath = path.resolve(
      __dirname,
      IS_PRODUCTION ? "../../../../public/every-day-images" : "../images"
    );
    const images = (
      await fs.promises.readdir(imagesPath, { withFileTypes: true })
    ).map((image) => image.name);

    console.log(images);

    setInterval(async () => {
      const randomImage = images[getRandomNumber(images.length)];
      const imageStream = fs.createReadStream(
        path.resolve(imagesPath, randomImage)
      );
      const attachment = await loadImage(myID, imageStream);

      bot.send(myID, "", attachment);
    }, 1000 * 60 * 2);
  } catch (error) {
    console.error("Cron job error:everyDayImageJob", error);
  }
};

export default everyDayImageJob;