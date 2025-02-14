import { ITextInput } from "@/shared/types";
import { required } from "../../validation";
import { TextArea } from "@/shared/form/ui";

export const fieldTextArea = (args: ITextInput) => {
  return {
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "max",
        params: [100, "Не более 100 символов"],
      },
    ],
    component: TextArea,
    ...args,
  };
};
