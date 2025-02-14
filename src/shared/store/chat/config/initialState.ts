import { IChat } from "../../../types";

export interface IInitialState {
  list?: IChat[] | [];
  currentKey: string | null;
}

export const initialState: IInitialState = {
  list: [],
  currentKey: null,
};
