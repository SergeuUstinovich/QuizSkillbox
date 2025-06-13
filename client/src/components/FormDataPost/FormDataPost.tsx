import { useState } from "react";
import { StepSvg } from "../../assets/svg/StepSvg/StepSvg";
import style from "./FormDataPost.module.scss";
import { Button } from "../../ui/Button";
import ListBox from "../../ui/ListBox/ListBox";
import { InputMask } from "@react-input/mask";
import { countryOptions, phoneMasks } from "./phoneMasks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormScheme, FormType } from "../../types/formAction";
import { FormField } from "../../ui/FormField";
import { UtmData } from "../../provider/contexts/UtmContext";
import { useMutation } from "@tanstack/react-query";
import { dataResult } from "../../api/dataQuiz";
import { queryClient } from "../../api/queryClient";
import { TapGoogleMetrica } from "../../pages/Layout/TapGoogleMetrica";

interface FormDataPostProps {
  utmData?: UtmData;
}

export function FormDataPost({ utmData }: FormDataPostProps) {
  const [isCheck, setIsCheck] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("BY");
  const [mask, setMask] = useState<string>(phoneMasks["BY"]);

  const handleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(FormScheme),
  });

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setMask(phoneMasks[value]);
    setValue("mobile_phone", "");
  };

  const dataResultMutate = useMutation(
    {
      mutationFn: (data: {
        username: string;
        phone: string;
        email: string;
        course_name: string;
        utm_source: string;
        utm_medium: string;
        utm_content: string;
        utm_campaign: string;
        utm_term: string;
        full_link: string;
      }) =>
        dataResult(
          data.username,
          data.phone,
          data.email,
          data.course_name,
          data.utm_source,
          data.utm_medium,
          data.utm_content,
          data.utm_campaign,
          data.utm_term,
          data.full_link
        ),
      onSuccess: () => {
        reset();
        TapGoogleMetrica(22, utmData?.course_name, utmData?.direction);
      },
    },
    queryClient
  );

  return (
    <div className={style.boxForm}>
      <h2 className={style.title}>Оставить заявку</h2>
      <form
        onSubmit={handleSubmit(({ username, mobile_phone, email }) => {
          const cleaned = mobile_phone.replace(/[^\d]/g, "");

          dataResultMutate.mutate({
            username: username,
            phone: cleaned,
            email: email,
            course_name: utmData?.course_name ? utmData.course_name : "",
            utm_source: utmData?.utm_source ? utmData.utm_source : "",
            utm_medium: utmData?.utm_medium ? utmData.utm_medium : "",
            utm_content: utmData?.utm_content ? utmData.utm_content : "",
            utm_campaign: utmData?.utm_campaign ? utmData.utm_campaign : "",
            utm_term: utmData?.utm_term ? utmData.utm_term : "",
            full_link: utmData?.full_url ? utmData.full_url : "",
          });
        })}
        className={style.form}
      >
        <FormField label="" errorMessage={errors.username?.message}>
          <input
            {...register("username")}
            placeholder="Имя"
            className={style.inputBox}
            type="text"
          />
        </FormField>
        <FormField label="" errorMessage={errors.mobile_phone?.message}>
          <div className={style.phoneBox}>
            <ListBox
              items={countryOptions}
              value={selectedCountry}
              onChange={handleCountryChange}
            />
            <InputMask
              mask={mask}
              className={style.input}
              placeholder={mask}
              replacement={{ _: /\d/ }}
              {...register("mobile_phone")}
            />
          </div>
        </FormField>

        <FormField label="" errorMessage={errors.email?.message}>
          <input
            placeholder="Электронная почта"
            className={style.inputBox}
            type="text"
            {...register("email")}
          />
        </FormField>

        <div className={style.politic}>
          <Button
            type="button"
            onClick={handleCheck}
            className={`${style.boxCheck} ${isCheck ? style.active : ""}`}
          >
            {isCheck && <StepSvg className={style.svgChech} />}
          </Button>
          <p className={style.descr}>
            Даю согласие на обработку персональных данных, в том числе с целью
            получения информации о новых продуктах, демо доступах, скидках,
            персонализированных предложениях, акциях и полезных вебинарах на
            следующих условиях
          </p>
        </div>
        {dataResultMutate.isSuccess && (
          <span className={style.success}>
            Спасибо за заявку, менеджер с вами свяжется
          </span>
        )}
        {dataResultMutate.error && (
          <span className={style.err}>
            Не получилось отправить форму, попробуйте ещё раз!
          </span>
        )}
        <Button
          type="submit"
          isDisabled={dataResultMutate.isPending || !isCheck}
          className={style.mainBtn}
        >
          Оставить заявку
        </Button>
      </form>
    </div>
  );
}
