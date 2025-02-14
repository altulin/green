import { RadioGroup } from "@/shared/form/ui";
import { ITextInput_radio } from "@/shared/types";

export const fieldRadio = (args: ITextInput_radio) => {
  return {
    type: "radio",
    validation_type: "string",
    validations: [],
    ...args,
    component: RadioGroup,
  };
};
