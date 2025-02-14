/* eslint-disable no-useless-escape */
import { FC } from "react";
import Modal from "../../Modal";
import { FormProvider, useForm } from "react-hook-form";
import clsx from "clsx";
import style from "../../Modal.module.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from "@/shared/form/model/validation";
import { makeInitialValues } from "@/shared/form/model/initial";
import { formData_2 } from "../config/config";
import Field from "@/shared/form/ui/hoc/Field";
import { Loading, Title } from "@/widgets/ui";
import { PressBtn } from "@/widgets/ui/button";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { setUserPhone } from "@/shared/store/user/config/userSlice";
import { useLazySendMessageQuery } from "@/shared/api/sendMessage/send";
import {
  clearAllStep,
  setErrorModal,
} from "@/shared/store/modal/config/modalSlice";

const ModalStart_2: FC = () => {
  const dispatch = useAppDispatch();
  const { ...methods } = useForm({
    resolver: yupResolver(validateSchema(formData_2)),
    mode: "onChange",
    defaultValues: makeInitialValues(formData_2),
  });
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.user,
  );
  const [trigger, { isLoading }] = useLazySendMessageQuery();
  const { reset, handleSubmit } = methods;

  const onSubmit = (data: { phone?: string }) => {
    const chatId = data.phone && `${data.phone.replace(/[-\+() ]/g, "")}@c.us`;
    const message = "Привет";

    const body = {
      chatId,
      message,
      idInstance,
      apiTokenInstance,
    };

    trigger(body)
      .unwrap()
      .then((res) => {
        if (typeof res.idMessage === "string") {
          dispatch(setUserPhone({ phone: chatId }));

          reset();
        } else {
          return Promise.reject();
        }
      })
      .then(() => dispatch(clearAllStep()))
      .catch(() =>
        dispatch(setErrorModal("Произошла ошибка. Попробуйте позже")),
      );
  };

  return (
    <Modal>
      <FormProvider {...methods}>
        <form
          className={clsx(style.modal__form)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Title
            label="Введите номер телефона"
            className={clsx(style.modal__title)}
          />

          <div className={clsx(style.modal__fields)}>
            {formData_2 &&
              formData_2.map((field) => {
                return <Field key={field.name} {...field} />;
              })}
          </div>

          <div className={clsx(style["modal__btn-wrap"])}>
            <PressBtn label="Отправить" type="submit">
              {isLoading && <Loading />}
            </PressBtn>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};
export default ModalStart_2;
