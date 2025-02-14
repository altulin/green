export interface IResMsg {
  chatId: string;
  idMessage: string;
  instanceData: {
    idInstance: number;
    typeInstance: string;
    wid: string;
  };
  messageData: {
    typeMessage: "textMessage" | "extendedTextMessage";

    textMessageData?: {
      textMessage: string;
    };

    extendedTextMessageData?: {
      text: string;
      description: string;
      title: string;
      previewType: string;
      jpegThumbnail: string;
      forwardingScore: number;
      isForwarded: boolean;
    };
  };

  senderData: {
    chatId: string;
    chatName: string;
    sender: string;
    senderContactName: string;
    senderName: string;
  };

  sendByAp: boolean;
  status: string;
  timestamp: number;
  typeWebhook: string;
}

export interface IChat {
  [keyof: string]: IResMsg[];
}
