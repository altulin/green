import { required } from "@/shared/form/model/validation";
import { ITextInput } from "@/shared/types";

export const formData: ITextInput[] = [
  {
    name: "send",
    validation_type: "string",
    placeholder: "Введите сообщение",
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
    isErrorText: false,
  },
];
