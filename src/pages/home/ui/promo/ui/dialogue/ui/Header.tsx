import clsx from "clsx";
import { FC } from "react";
import style from "../PromoDialogue.module.scss";
import IconUser from "@/shared/images/sprite/user.svg";
import { SpriteSVG } from "@/shared/ui";
import { useAppSelector } from "@/shared/hooks";
import { getPhoneNum } from "@/shared/utils";

const Header: FC = () => {
  const { currentKey } = useAppSelector((state) => state.chat);

  if (!currentKey) return null;

  return (
    <div className={clsx(style.header)}>
      <div className={clsx(style.header__icon)}>
        <SpriteSVG icon={IconUser} />
      </div>

      <span className={clsx(style.header__label)}>
        {getPhoneNum(currentKey)}
      </span>
    </div>
  );
};
export default Header;
