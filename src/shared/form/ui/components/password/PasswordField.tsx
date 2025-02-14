import { FC, useState } from "react";
import { ITextInput } from "@/shared/types";
import Input from "../Input";
import ButtonEye from "./ButtonEye";

const PasswordField: FC<ITextInput> = ({ ...props }) => {
  const [isTypeText, setType] = useState(false);

  return (
    <>
      <Input {...props} type={isTypeText ? "text" : "password"} />
      <ButtonEye isTypeText={isTypeText} setType={setType} />
    </>
  );
};
export default PasswordField;
