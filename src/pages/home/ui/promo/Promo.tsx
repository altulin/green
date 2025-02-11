import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";

const Promo: FC = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h2>Promoioooo</h2>
      </div>
    </section>
  );
};
export default Promo;
