export type SendMessageParams = {
  peer_id: number;
  message?: string;
  keyboard?: any;
  reply_to?: number;
  forward_messages?: string
};
