import { FC } from "react";
import style from "../PromoChats.module.scss";
import clsx from "clsx";
import { SpriteSVG } from "@/shared/ui";

const Button: FC<{
  icon: string;
  className?: string;
  onClick?: () => void;
  isSearch?: boolean;
  onMouseUp?: () => void;
  data?: string;
}> = ({ icon, className, onClick, isSearch, onMouseUp, data }) => {
  return (
    <button
      data-type={data}
      className={clsx(
        style.search__btn,
        isSearch && style["search__btn--not-rotate"],

        className,
      )}
      type="button"
      onClick={onClick}
      onMouseUp={onMouseUp}
    >
      <SpriteSVG icon={icon} />
    </button>
  );
};

export default Button;
