import clsx from "clsx";
import { FC } from "react";
import style from "../../../PromoDialogue.module.scss";
import FooterSend from "./FooterSend";
import { useAppSelector } from "@/shared/hooks";

const Footer: FC = () => {
  const { currentKey } = useAppSelector((state) => state.chat);

  if (!currentKey) return null;
  return (
    <footer className={clsx(style.footer)}>
      <FooterSend />
    </footer>
  );
};
export default Footer;
