import { FC } from "react";
import style from "./Header.module.scss";
import clsx from "clsx";

export const Header: FC = () => {
  return (
    <header className={clsx(style.header)}>
    </header>
  );
};
