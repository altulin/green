import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { IResMsg } from "@/shared/types";
import { getPhoneNum } from "@/shared/utils";

const chatSlice = createSlice({
  name: "list",
  initialState: initialState,

  reducers: {
    addToChat(state, action: PayloadAction<IResMsg>) {
      const chatName = action.payload.senderData.chatName;
      const key =
        chatName.length > 0
          ? chatName
          : getPhoneNum(action.payload.senderData.chatId);

      const isElement =
        state.list &&
        state.list?.filter((item) => Object.keys(item).includes(key)).length >
          0;

      if (isElement) {
        state.list = state.list?.map((item) => {
          if (Object.keys(item).includes(key)) {
            return { [key]: [...item[key], action.payload] };
          }
          return item;
        });
      } else {
        state.list = state.list
          ? [...state.list, { [key]: [action.payload] }]
          : [{ [key]: [action.payload] }];
      }
    },

    setCurrentKey(state, action: PayloadAction<string>) {
      state.currentKey = action.payload;
    },
  },
});

export const { addToChat, setCurrentKey } = chatSlice.actions;
export default chatSlice.reducer;
