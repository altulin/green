import IconEye from "@/shared/images/sprite/eye.svg";
import IconEyeOff from "@/shared/images/sprite/eye-off.svg";
import style from "@/shared/form/style/Form.module.scss";
import clsx from "clsx";
import { FC } from "react";
import { SpriteSVG } from "@/shared/ui";

interface IButtonEye {
  isTypeText: boolean;
  setType: (type: boolean) => void;
}

const ButtonEye: FC<IButtonEye> = ({ isTypeText, setType }) => {
  return (
    <button
      type="button"
      onClick={() => setType(!isTypeText)}
      className={clsx(style.button)}
    >
      {isTypeText && (
        <SpriteSVG icon={IconEye} className={clsx(style.button__icon)} />
      )}
      {!isTypeText && (
        <SpriteSVG icon={IconEyeOff} className={clsx(style.button__icon)} />
      )}
    </button>
  );
};

export default ButtonEye;
