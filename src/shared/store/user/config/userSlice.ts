import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, initialState } from "./initialState";

const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    setUserData(state, action: PayloadAction<Omit<IInitialState, "phone">>) {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
    },
    setUserPhone(state, action: PayloadAction<Pick<IInitialState, "phone">>) {
      state.phone = action.payload.phone;
    },
  },
});

export const { setUserData, setUserPhone } = userSlice.actions;
export default userSlice.reducer;
