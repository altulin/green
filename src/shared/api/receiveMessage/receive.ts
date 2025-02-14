import { api } from "@/app/providers/store/config/api";
import { IResMsg } from "@/shared/types";

export const receive = api.injectEndpoints({
  endpoints: (build) => ({
    receiveMessage: build.query<
      { body: IResMsg; receiptId: number },
      { idInstance: string | null; apiTokenInstance: string | null }
    >({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
        method: "get",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useReceiveMessageQuery } = receive;
