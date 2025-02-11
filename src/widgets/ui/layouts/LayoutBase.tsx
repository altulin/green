import { FC } from "react";
import { Outlet } from "react-router";
import { Header } from "../header/Header";

export const BaseLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
    </>
  );
};
