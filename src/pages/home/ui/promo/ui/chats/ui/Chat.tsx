/* eslint-disable @typescript-eslint/no-explicit-any */
import { IChat } from "@/shared/types";
import clsx from "clsx";
import { FC } from "react";
import style from "../PromoChats.module.scss";
import IconUser from "@/shared/images/sprite/user.svg";
import { SpriteSVG } from "@/shared/ui";
import { fromUnixTime, format } from "date-fns";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { setCurrentKey } from "@/shared/store/chat/config/chatSlice";
import { getMsg } from "@/shared/utils";

const Chat: FC<IChat[] | any> = (props) => {
  const { currentKey } = useAppSelector((state) => state.chat);
  const key = Object.keys(props)[0];
  const dispatch = useAppDispatch();

  const { timestamp, messageData } = props[key][props[key].length - 1];

  const handleClick = () => {
    if (currentKey !== key) {
      dispatch(setCurrentKey(key));
    }
  };

  return (
    <li className={clsx(style.array__item)}>
      <button
        className={clsx(
          style.array__btn,
          currentKey === key && style["array__btn--active"],
        )}
        onClick={handleClick}
      >
        <figure className={clsx(style.array__img)}>
          <SpriteSVG icon={IconUser} />
        </figure>
        <div className={clsx(style.array__info)}>
          <div className={clsx(style.array__top)}>
            <span className={clsx(style.array__name)}>{key}</span>
            <span className={clsx(style.array__time)}>
              {format(fromUnixTime(timestamp), "HH:mm")}
            </span>
          </div>

          <span className={clsx(style.array__text)}>{getMsg(messageData)}</span>
        </div>
      </button>
    </li>
  );
};
export default Chat;
