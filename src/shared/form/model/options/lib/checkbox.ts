import { ITextInput } from "@/shared/types";
import { requiredCheck } from "../../validation/lib/errText";
import { Checkbox } from "@/shared/form/ui";

export const fieldCheckbox = (args: ITextInput) => {
  return {
    type: "checkbox",
    validation_type: "boolean",
    validations: [
      {
        type: "oneOf",
        params: [[true], requiredCheck],
      },
    ],
    component: Checkbox,
    ...args,
  };
};
