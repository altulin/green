import { fieldPhone } from "@/shared/form/model/options";
import { required } from "@/shared/form/model/validation";
import { ITextInput } from "@/shared/types";

export const formData_1: ITextInput[] = [
  {
    name: "idInstance",
    label_text: "id",
    validation_type: "string",
    placeholder: "idInstance",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/^[0-9]+$/, "Требуется ввести только цифры"],
      },
    ],
  },
  {
    name: "apiTokenInstance",
    label_text: "token",
    validation_type: "string",
    placeholder: "apiTokenInstance",
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
  },
];

export const formData_2: ITextInput[] = [
  fieldPhone({ label_text: "телефон", name: "phone" }),
];
