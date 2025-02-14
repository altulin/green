import { api } from "@/app/providers/store/config/api";

export const deleteMsg = api.injectEndpoints({
  endpoints: (build) => ({
    deleteMessage: build.query({
      query: ({ idInstance, apiTokenInstance, receiptId }) => ({
        url: `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyDeleteMessageQuery } = deleteMsg;
