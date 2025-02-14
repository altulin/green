import { ITextInput } from "@/shared/types";
import { required } from "../../validation";
import { File } from "@/shared/form/ui";

export const fieldFile = (args: ITextInput) => {
  return {
    type: "file",
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
    ],

    component: File,
    ...args,
  };
};
