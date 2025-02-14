import { ITextInput } from "@/shared/types";
import { required } from "../../validation";
import { MyDatePicker } from "@/shared/form/ui";

export const fieldDatePicker = (args: ITextInput) => {
  return {
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
    ...args,
    component: MyDatePicker,
  };
};
