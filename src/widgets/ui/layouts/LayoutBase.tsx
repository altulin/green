import { FC } from "react";
import { Outlet } from "react-router";
import { Header } from "../header/Header";
import style from "./LayoutBase.module.scss";
import clsx from "clsx";

export const BaseLayout: FC = () => {
  return (
    <>
      <Header />
      <main className={clsx(style.main)}>
        <Outlet />
      </main>
    </>
  );
};
