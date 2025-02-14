export interface IInitialState {
  idInstance: string | null;
  apiTokenInstance: string | null;
  phone: string | undefined;
}

export const initialState: IInitialState = {
  idInstance: null,
  // idInstance: "1103190605",
  apiTokenInstance: null,
  // apiTokenInstance: "4293fa34fed8454a8ad1520e432db7277c6a5b19a028413382",
  phone: undefined,
  // phone: "79025159632@c.us",
};
