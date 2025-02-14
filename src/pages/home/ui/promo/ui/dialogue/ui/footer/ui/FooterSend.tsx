import clsx from "clsx";
import { FC } from "react";
import style from "../../../PromoDialogue.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from "@/shared/form/model/validation";
import { formData } from "../config";
import { makeInitialValues } from "@/shared/form/model/initial";
import Field from "@/shared/form/ui/hoc/Field";
import { SpriteSVG } from "@/shared/ui";
import IconSend from "@/shared/images/sprite/send.svg";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { useLazySendMessageQuery } from "@/shared/api/sendMessage/send";
import { setErrorModal } from "@/shared/store/modal/config/modalSlice";

const FooterSend: FC = () => {
  const dispatch = useAppDispatch();
  const { ...methods } = useForm({
    resolver: yupResolver(validateSchema(formData)),
    mode: "onChange",
    defaultValues: makeInitialValues(formData),
  });

  const {
    reset,
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const { idInstance, apiTokenInstance, phone } = useAppSelector(
    (state) => state.user,
  );

  const [trigger, { isLoading }] = useLazySendMessageQuery();

  const onSubmit = (data: { send?: string }) => {
    const body = {
      chatId: phone,
      message: data.send,
      idInstance,
      apiTokenInstance,
    };

    trigger(body)
      .unwrap()
      .then((res) => {
        if (typeof res.idMessage === "string") {
          reset();
        } else {
          return Promise.reject();
        }
      })

      .catch(() =>
        dispatch(setErrorModal("Произошла ошибка. Попробуйте позже")),
      );
  };

  return (
    <div className={clsx(style.send)}>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={clsx(style.send__form)}
        >
          <div className={clsx(style.send__fields)}>
            {formData &&
              formData.map((field) => {
                return <Field key={field.name} {...field} />;
              })}
          </div>

          {isDirty && (
            <button
              className={clsx(style.send__btn)}
              type="submit"
              disabled={isLoading}
            >
              <SpriteSVG icon={IconSend} />
            </button>
          )}
        </form>
      </FormProvider>
    </div>
  );
};
export default FooterSend;
