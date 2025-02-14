import { api } from "@/app/providers/store/config/api";

export const send = api.injectEndpoints({
  endpoints: (build) => ({
    sendMessage: build.query({
      query: ({ chatId, message, idInstance, apiTokenInstance }) => ({
        url: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        method: "POST",
        body: {
          chatId,
          message,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazySendMessageQuery } = send;
