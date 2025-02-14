/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC, useId } from "react";
import style from "@/shared/form/style/Form.module.scss";
import Select from "react-select";
import IconArrow from "@/shared/images/sprite/rule.svg";
import { getClasses, ITextInput_Modifier, wrapClass } from "./data";
import { useController } from "react-hook-form";
import { SpriteSVG } from "@/shared/ui";
import { ITextInput } from "@/shared/types";
import { useGetFieldData } from "@/shared/hooks";

const MySelect: FC<ITextInput> = ({ ...props }) => {
  const { name, options, placeholder, modifier } = props;
  const id = useId();
  const { isError } = useGetFieldData(name);
  const {
    field: { onChange, value, onBlur },
  } = useController({
    name,
  });

  return (
    <Select
      inputId={id}
      defaultMenuIsOpen={false}
      options={options as any}
      placeholder={placeholder}
      className={clsx(style[wrapClass])}
      classNames={{
        ...getClasses(modifier as ITextInput_Modifier, isError),
      }}
      name={name}
      onBlur={onBlur}
      onChange={(val: any) => onChange(val?.value)}
      value={(options && options.find((el) => el.value === value)) || ""}
      components={{
        DropdownIndicator: () => <SpriteSVG icon={IconArrow} />,
      }}
      noOptionsMessage={() => "Данные не загрузились"}
    />
  );
};

export default MySelect;
