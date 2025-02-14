interface IFilter {
  name: string;
  value: string;
}

export const filters: IFilter[] = [
  {
    name: "Все",
    value: "all",
  },
  {
    name: "Непрочитанное",
    value: "unread",
  },
  {
    name: "Избранное",
    value: "favorite",
  },
  {
    name: "Группы",
    value: "groups",
  },
];
