import { useReceiveMessageQuery } from "@/shared/api/receiveMessage/receive";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import clsx from "clsx";
import { FC, useEffect } from "react";
import style from "../PromoChats.module.scss";
import { useLazyDeleteMessageQuery } from "@/shared/api/delete/deleteMessage";
import { addToChat } from "@/shared/store/chat/config/chatSlice";
import Chat from "./Chat";
import { checkArr } from "@/shared/utils";

const ChatsList: FC = () => {
  const dispatch = useAppDispatch();
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.user,
  );
  const { list } = useAppSelector((state) => state.chat);
  const [deleteMsg] = useLazyDeleteMessageQuery();
  const { data, status, isSuccess } = useReceiveMessageQuery(
    { idInstance, apiTokenInstance },
    {
      pollingInterval: 5000,
      skip: !idInstance || !apiTokenInstance,
      // skipPollingIfUnfocused: true,
    },
  );

  useEffect(() => {
    if (!isSuccess) return;
    if (status !== "fulfilled") return;
    if (data === null) return;
    if (data.body.messageData) dispatch(addToChat(data.body));

    deleteMsg({ idInstance, apiTokenInstance, receiptId: data.receiptId })
      .then((res) => {
        if (res.isError) return Promise.reject();
      })
      .catch();
  }, [
    data,
    status,
    isSuccess,
    dispatch,
    idInstance,
    apiTokenInstance,
    deleteMsg,
  ]);

  return (
    <div className={clsx(style.array)}>
      <ul className={clsx(style.array__list)}>
        {checkArr(list) && list?.map((item, i) => <Chat {...item} key={i} />)}
      </ul>
    </div>
  );
};
export default ChatsList;
