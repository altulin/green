import clsx from "clsx";
import { FC } from "react";
import style from "../PromoChats.module.scss";
import { filters } from "../config";

const Filter: FC = () => {
  const handleClick = () => {};

  return (
    <div className={clsx(style.filter)}>
      <ul className={clsx(style.filter__list)}>
        {filters.map((filter, i: number) => (
          <li className={clsx(style.filter__item)} key={i}>
            <button
              onClick={handleClick}
              className={clsx(style.filter__btn)}
              type="button"
            >
              {filter.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Filter;
