import { CommandHandler } from "../types";

const start: CommandHandler = (ctx) => {
  try {
    ctx.reply({
      message: "✅",
      keyboard: {
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
                payload: '{"button": "2"}',
                label: "😈",
              },
              color: "secondary",
            },
          ],
          [
            {
              action: {
                type: "text",
                payload: '{"button": "3"}',
                label: "Какой сегодня день",
              },
              color: "secondary",
            },
            {
              action: {
                type: "text",
                payload: '{"button": "4"}',
                label: "💳",
              },
              color: "secondary",
            },
          ],
        ],
      },
    });
  } catch (error) {}
};

export default start;
