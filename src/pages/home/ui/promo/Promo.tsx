import clsx from "clsx";
import { FC, useEffect } from "react";
import style from "./Promo.module.scss";
import PromoSideBar from "./ui/PromoSideBar";
import PromoChats from "./ui/chats/PromoChats";
import PromoDialogue from "./ui/dialogue/PromoDialoge";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { stepTo } from "@/shared/store/modal/config/modalSlice";

const Promo: FC = () => {
  const dispatch = useAppDispatch();
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.user,
  );

  useEffect(() => {
    if (idInstance && apiTokenInstance) return;
    dispatch(stepTo({ start: { step: 1 } }));
  }, [idInstance, apiTokenInstance, dispatch]);

  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner)}>
        <PromoSideBar />
        <PromoChats />
        <PromoDialogue />
      </div>
    </section>
  );
};
export default Promo;
