import { useAppSelector } from "@/shared/hooks";
import clsx from "clsx";
import { FC } from "react";
import Modal from "../Modal";
import { Title } from "@/widgets/ui";
import style from "../Modal.module.scss";

const ModalError: FC = () => {
  const { modalState } = useAppSelector((state) => state.modal);

  const error = modalState?.error;

  if (!error || !("text" in error)) {
    return null;
  }

  const { text } = error;

  return (
    <Modal>
      <div className={clsx(style.modal__form)}>
        <div className={clsx(style["modal-form__wrap"])}>
          {text && <Title label={text} className={clsx(style.modal__title)} />}
        </div>
      </div>
    </Modal>
  );
};
export default ModalError;
