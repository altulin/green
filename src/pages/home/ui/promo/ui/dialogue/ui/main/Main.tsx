import clsx from "clsx";
import { FC } from "react";
import style from "../../PromoDialogue.module.scss";
import { useAppSelector } from "@/shared/hooks";
import { format, fromUnixTime } from "date-fns";
import { SpriteSVG } from "@/shared/ui";
import IconStatus from "@/shared/images/sprite/status.svg";
import { getMsg } from "@/shared/utils";

const Main: FC = () => {
  const { currentKey, list } = useAppSelector((state) => state.chat);

  // if (!currentKey || !list) return null;

  const currentList =
    currentKey &&
    list &&
    list.filter((item) => Object.keys(item).includes(currentKey))[0][
      currentKey
    ];

  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.main__inner)}>
        <ul className={clsx(style.main__list)}>
          {currentList &&
            currentList.map((item, i: number) => {
              return (
                <li key={i} className={clsx(style.main__item)}>
                  <div className={clsx(style.message)}>
                    <span className={clsx(style.message__text)}>
                      {getMsg(item.messageData)}
                    </span>
                    <span className={clsx(style.message__time)}>
                      {format(fromUnixTime(item.timestamp), "HH:mm")}
                    </span>
                    <span className={clsx(style.message__status)}>
                      <SpriteSVG icon={IconStatus} />
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default Main;
