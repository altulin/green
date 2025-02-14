import clsx from "clsx";
import { FC } from "react";
import style from "@/shared/form/style/Form.module.scss";
import { useFormContext } from "react-hook-form";
import { ITextInput } from "@/shared/types";
import { useGetFieldData } from "@/shared/hooks";

const Input: FC<ITextInput> = ({ modifier, isErrorText = true, ...props }) => {
  const { register } = useFormContext();
  const { isError } = useGetFieldData(props.name);

  return (
    <input
      className={clsx(
        style.input,
        modifier && style[`input--${modifier}`],
        isError && isErrorText && style[`input--error`],
      )}
      id={props.id}
      {...props}
      {...register(props.name)}
    />
  );
};
export default Input;
