/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import style from "@/shared/form/style/Form.module.scss";
import IconRule from "@/shared/images/sprite/rule.svg";
import { useController } from "react-hook-form";
import { ITextInput } from "@/shared/types";
import { useGetFieldData } from "@/shared/hooks";
import Input from "./Input";
import { SpriteSVG } from "@/shared/ui";

const Checkbox: FC<ITextInput> = ({ children, ...props }) => {
  const { modifier, checked } = props;
  const { isError } = useGetFieldData(props.name);
  const [val, setVal] = useState<any>(checked);

  const {
    field: { onChange },
  } = useController({
    name: props.name,
  });

  useEffect(() => {
    onChange(val);
  }, [onChange, val]);

  return (
    <>
      <Input
        {...props}
        value={val}
        onInput={() => setVal(!val)}
        checked={val}
      />
      <div
        className={clsx(
          style.checkbox,
          modifier && style[`checkbox--${modifier}`],
        )}
      >
        <span
          className={clsx(
            style.checkbox__icon,
            isError && style["checkbox__icon--error"],
          )}
        >
          {val && <SpriteSVG icon={IconRule} />}
        </span>

        {children}
      </div>
    </>
  );
};
export default Checkbox;
