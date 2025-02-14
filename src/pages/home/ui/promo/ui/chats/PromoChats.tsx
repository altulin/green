import clsx from "clsx";
import { FC } from "react";
import style from "./PromoChats.module.scss";
import { SpriteSVG } from "@/shared/ui";
import IconNew from "@/shared/images/sprite/new.svg";
import PromoChatsSearch from "./ui/PromoChatsSearch";
import Filter from "./ui/Filter";
import ChatsList from "./ui/ChatsList";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { stepTo } from "@/shared/store/modal/config/modalSlice";

const PromoChats: FC = () => {
  const dispatch = useAppDispatch();
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.user,
  );

  const handleClick = () => {
    if (!idInstance || !apiTokenInstance) {
      dispatch(stepTo({ start: { step: 1 } }));
    }

    if (idInstance && apiTokenInstance) {
      dispatch(stepTo({ start: { step: 2 } }));
    }

    return;
  };

  return (
    <div className={clsx(style.chats)}>
      <div className={clsx(style.chats__header)}>
        <h3 className={clsx(style.chats__title)}>Чаты</h3>

        <button
          className={clsx(style.chats__btn)}
          type="button"
          title="Новый чат"
          onClick={handleClick}
        >
          <SpriteSVG icon={IconNew} />
        </button>
      </div>

      <PromoChatsSearch />
      <Filter />
      <ChatsList />
    </div>
  );
};
export default PromoChats;
