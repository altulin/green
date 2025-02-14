import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { rtkQueryErrorLogger } from "./errorLogger";
import { modalSlice } from "@/shared/store/modal";
import { userSlice } from "@/shared/store/user";
import { setupListeners } from "@reduxjs/toolkit/query";
import { chatSlice } from "@/shared/store/chat";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    user: userSlice,
    chat: chatSlice,
    [api.reducerPath]: api.reducer,
  },
  devTools: process.env.NODE_ENV === "development",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware, rtkQueryErrorLogger]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
