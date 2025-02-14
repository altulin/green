import { FC } from "react";
import Modal from "../../Modal";
import { FormProvider, useForm } from "react-hook-form";
import clsx from "clsx";
import style from "../../Modal.module.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from "@/shared/form/model/validation";
import { makeInitialValues } from "@/shared/form/model/initial";
import { formData_1 } from "../config/config";
import Field from "@/shared/form/ui/hoc/Field";
import { Title } from "@/widgets/ui";
import { PressBtn } from "@/widgets/ui/button";
import { useAppDispatch } from "@/shared/hooks";
import { setUserData } from "@/shared/store/user/config/userSlice";
import { stepTo } from "@/shared/store/modal/config/modalSlice";

const ModalStart_1: FC = () => {
  const dispatch = useAppDispatch();
  const { ...methods } = useForm({
    resolver: yupResolver(validateSchema(formData_1)),
    mode: "onChange",
    defaultValues: makeInitialValues(formData_1),
  });

  const { reset, handleSubmit } = methods;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    new Promise((resolve) => {
      resolve(dispatch(setUserData(data)));
    })
      .then(() => reset())
      .then(() => {
        dispatch(stepTo({ start: { step: 2 } }));
      });
  };

  return (
    <Modal>
      <FormProvider {...methods}>
        <form
          className={clsx(style.modal__form)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Title
            label="Введите необходимые данные"
            className={clsx(style.modal__title)}
          />

          <div className={clsx(style.modal__fields)}>
            {formData_1 &&
              formData_1.map((field) => {
                return <Field key={field.name} {...field} />;
              })}
          </div>

          <div className={clsx(style["modal__btn-wrap"])}>
            <PressBtn label="Отправить" type="submit">
              {/* {isLoading && <Loading />} */}
            </PressBtn>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};
export default ModalStart_1;
