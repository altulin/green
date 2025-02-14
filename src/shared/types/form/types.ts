import { FC, InputHTMLAttributes } from "react";
import { Reference } from "yup";

export enum EnumTextInput {
  label_text = "label_text",
  name = "name",
  id = "id",
  placeholder = "placeholder",
  label = "label",
  value = "value",
  modifier = "modifier",
}

type TValidations = { type: string; params: TParams };

type TParams = (
  | string
  | number
  | RegExp
  | Reference<unknown>[]
  | boolean[]
  | object
)[];

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  label_text?: string;
  modifier?: string | null | undefined;
  validations?: TValidations[];
  validation_type?: string;
  options?: OptionsType;
  radio_list?: TRadioItem[];
  minRows?: number;
  init_value?: string | number | boolean | { label: string; value: string };
  component?: FC<ITextInput>;
  name: string;
  isErrorText?: boolean;
  // [key: string]: any;
}

export interface ITextInput_radio extends ITextInput {
  init_value: { label: string; value: string };
}

type TRadioItem = {
  label: string;
  value: string;
};

type OptionsType = { [key: string]: string | number }[];
