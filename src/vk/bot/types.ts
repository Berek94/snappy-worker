export type WebhookMessage = {
  date: number;
  from_id: number;
  id: number;
  out: number;
  peer_id: number;
  text: string;
  conversation_message_id: number;
  fwd_messages: any[];
  important: boolean;
  random_id: number;
  attachments: any[];
  is_hidden: boolean;
};

export type WebhookRequest =
  | {
      type: "confirmation";
    }
  | {
      type: "message_new";
      object: {
        message: WebhookMessage;
        client_info: {};
      };
      group_id: number;
      event_id: string;
    };

export type BotCommandReplyParams = {
  message: string;
  keyboard?: any;
  reply_to?: number;
};
