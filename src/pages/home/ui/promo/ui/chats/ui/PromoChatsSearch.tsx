import { FC, RefObject, useRef, useState } from "react";
import style from "../PromoChats.module.scss";
import clsx from "clsx";
import IconLoupe from "@/shared/images/sprite/search.svg";
import IconArr from "@/shared/images/sprite/searchArr.svg";

import Button from "./Button";
import { useClickAway } from "@uidotdev/usehooks";
const PromoChatsSearch: FC = () => {
  const [isSearch, setSearch] = useState(true);
  const refInput = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setSearch(false);
    refInput.current?.focus();
  };

  const handleBlur = () => {
    setSearch(true);
    refInput.current?.blur();
  };

  const ref = useClickAway(() => {
    if (isSearch) return;
    setSearch(true);
  });

  return (
    <div className={clsx(style.search)}>
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={clsx(style.search__inner)}
      >
        <div className={clsx(style.search__control)}>
          {isSearch ? (
            <Button
              data="loupe"
              icon={IconLoupe}
              onClick={handleFocus}
              isSearch={isSearch}
            />
          ) : (
            <Button
              icon={IconArr}
              data="arr"
              onClick={handleBlur}
              isSearch={isSearch}
            />
          )}
        </div>

        <div className={clsx(style.search__field)}>
          <input
            ref={refInput}
            id="search"
            className={clsx(style.search__input)}
            type="text"
            placeholder="Поиск"
            onFocus={handleFocus}
          />
        </div>
      </div>
    </div>
  );
};
export default PromoChatsSearch;
