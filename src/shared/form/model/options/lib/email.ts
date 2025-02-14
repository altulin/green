import { ITextInput } from "@/shared/types";
import { required } from "../../validation";
import { valid } from "../../validation/lib/errText";

export const fieldEmail = (args: ITextInput) => {
  return {
    type: "email",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/@[^.]*\./, valid],
      },
      {
        type: "email",
        params: [valid],
      },
    ],
    ...args,
  };
};
