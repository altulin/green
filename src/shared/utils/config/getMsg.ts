import { IResMsg } from "@/shared/types";

export const getMsg = (data: IResMsg["messageData"]) => {
  if (data.typeMessage === "textMessage" && data.textMessageData) {
    return data.textMessageData.textMessage;
  }
  if (
    data.typeMessage === "extendedTextMessage" &&
    data.extendedTextMessageData
  ) {
    return data.extendedTextMessageData.text;
  }
  return "";
};
