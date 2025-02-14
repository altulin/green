import clsx from "clsx";
import { FC } from "react";
import style from "./PromoDialogue.module.scss";
import Header from "./ui/Header";
import Main from "./ui/main/Main";
import Footer from "./ui/footer/ui/Footer";

const PromoDialogue: FC = () => {
  return (
    <div className={clsx(style.dialogue)}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default PromoDialogue;
