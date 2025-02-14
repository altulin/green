// import { useAppSelector } from "@/hooks/hook";
// import ModalAuth1 from "./auth/ModalAuth1";
// import ModalError from "./error/ModalError";

import { FC } from "react";

import { useAppSelector, useGetCurrentModal } from "@/shared/hooks";
import { TModalState } from "@/shared/store/modal/config/initialState";
import { EKeys } from "@/shared/types";
import { ModalStart_1 } from "./start";
import ModalStart_2 from "./start/ui/ModalStart_2";
import { ModalError } from "./error";

interface IModalElements {
  modalState: TModalState | null;
}

const ModalElements: FC<IModalElements> = ({ modalState }) => {
  const modal = useGetCurrentModal(modalState);

  switch (modal) {
    case `${EKeys.START}-1`:
      return <ModalStart_1 />;

    case `${EKeys.START}-2`:
      return <ModalStart_2 />;

    case EKeys.ERROR:
      return <ModalError />;

    default:
      return null;
  }
};

const ModalManager = () => {
  const { modalState } = useAppSelector((state) => state.modal);
  return modalState ? <ModalElements modalState={modalState} /> : null;
};

export default ModalManager;
