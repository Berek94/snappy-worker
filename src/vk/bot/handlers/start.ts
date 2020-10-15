import { CommandHandler } from "../VkBot";

const start: CommandHandler = (ctx) => {
  try {
    ctx.reply("✅", {
      inline: false,
      one_time: false,
      buttons: [
        [
          {
            action: {
              type: "text",
              payload: '{"button": "1"}',
              label: "Случайное название чата",
            },
            color: "positive",
          },
          {
            action: {
              type: "text",
              payload: '{"button": "4"}',
              label: "Какой сегодня день",
            },
            color: "secondary",
          },
        ],
      ],
    });
  } catch (error) {}
};

export default start;
