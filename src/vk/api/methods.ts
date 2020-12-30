import { ReadStream } from "fs";
import vkApiRequest from ".";
import { SendMessageParams } from "./type";
import VkApiError from "./VkApiError";
import FormData from "form-data";
import nodeFetch from "node-fetch";

export const sendMessage = (data: SendMessageParams) =>
  vkApiRequest("messages.send", data);

export const editDialogName = async (chat_id: number, title: string) => {
  try {
    await vkApiRequest("messages.editChat", { chat_id, title });
  } catch (err: unknown) {
    const error = err as VkApiError;

    if (error.code === 100) {
      error.message = "Название не указано 🙄";
    }

    throw error;
  }
};

type GetMessagesUploadServerResponse = {
  response: {
    upload_url: string;
    album_id: string;
    group_id: string;
    user_id: number;
  };
};

export const getMessagesUploadServer = (peer_id: number) =>
  vkApiRequest<GetMessagesUploadServerResponse>(
    "photos.getMessagesUploadServer",
    { peer_id }
  );

type SaveMessagesPhotoResponse = {
  response: {
    id: number;
    pid: number;
    aid: number;
    owner_id: number;
    src: string;
    src_big: string;
    created: number;
  }[];
};

export const saveMessagesPhoto = (
  photo: string,
  server: number,
  hash: string
) =>
  vkApiRequest<SaveMessagesPhotoResponse>("photos.saveMessagesPhoto", {
    photo,
    server,
    hash,
  });

export const loadImage = async (chatID: number, imageFile: ReadStream) => {
  try {
    const {
      response: { upload_url },
    } = await getMessagesUploadServer(chatID);

    const form = new FormData();
    form.append("photo", imageFile);

    const { photo, server, hash } = await (
      await nodeFetch(upload_url, {
        method: "POST",
        body: form,
      })
    ).json();

    const { response } = await saveMessagesPhoto(photo, server, hash);

    const [{ owner_id, id }] = response;

    return `photo${owner_id}_${id}`;
  } catch (error) {
    throw error;
  }
};
