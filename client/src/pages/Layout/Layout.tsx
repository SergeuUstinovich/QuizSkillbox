import { useCallback, useEffect, useState } from "react";
import { Quiz } from "../Quiz/Quiz";
import style from "./Layout.module.scss";
import { MainSvg } from "../../assets/svg/MainSvg/MainSvg";
import { Button } from "../../ui/Button";
import { ArrowBack } from "../../assets/svg/ArrowBack/ArrowBack";
import logo from "../../assets/png/logo.png";
import { StepSvg } from "../../assets/svg/StepSvg/StepSvg";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { dataQuizLocal } from "./dataQuizLocal";
import Modal from "../../ui/Modal/Modal";
import { FormDataPost } from "../../components/FormDataPost/FormDataPost";
import { useQuery } from "@tanstack/react-query";
import { dataQuiz } from "../../api/dataQuiz";
import { queryClient } from "../../api/queryClient";
import { QuizType } from "../../types/QuizType";
import { useUtm } from "../../provider/contexts/UtmContext";
import { LoaderContent } from "../../ui/Loader/LoaderContent/LoaderContent";

export interface QuizData {
  [step: number]: string[];
}

function Layout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState<QuizType>();
  const utmData = useUtm();
  const [quizData, setQuizData] = useState<QuizData>({});
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const totalSteps = 22;
  const alwaysActiveSteps = [
    3, 5, 6, 7, 8, 10, 12, 14, 16, 17, 18, 19, 20, 21, 22,
  ];

  useEffect(() => {
    if (!data) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [data]);

  const next = () => {
    if (data) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsOpenModal(true);
      }
    }
  };
  const prev = () => {
    if (data) {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const renderTextBtn = useCallback(() => {
    switch (currentStep) {
      case 14:
        return "Хочу также!";
      case totalSteps:
        return "Оставить заявку";
      default:
        return "Далее";
    }
  }, [currentStep]);

  const handleOptionSelect = useCallback(
    (option: string, isMultiple: boolean) => {
      setQuizData((prev) => {
        const currentSelections = prev[currentStep] || [];

        if (isMultiple) {
          return {
            ...prev,
            [currentStep]: currentSelections.includes(option)
              ? currentSelections.filter((item) => item !== option) // Удаляем если уже выбран
              : [...currentSelections, option], // Добавляем если не выбран
          };
        } else {
          // Для единичного выбора
          return {
            ...prev,
            [currentStep]: [option], // Всегда только один выбранный вариант
          };
        }
      });
    },
    [currentStep]
  );

  useEffect(() => {
    if (alwaysActiveSteps.includes(currentStep)) {
      setIsNextDisabled(false); //активирует те что не требуют выбора
    } else {
      setIsNextDisabled(!quizData[currentStep]); //изменяем для тех которые требуют выбор
    }
  }, [currentStep, quizData]);

  useEffect(() => {
    if (!alwaysActiveSteps.includes(currentStep)) {
      setIsNextDisabled(true); //проверка есть ли шаг в массиве, если нет дизейблин
    }
  }, [currentStep]);

  const isMultipleChoiceStep = (step: number) => {
    return [1].includes(step); // Номера шагов с множественным выбором
  };

  useEffect(() => {
    //проверка на пустоту, что бы дизейблить
    if (alwaysActiveSteps.includes(currentStep)) {
      setIsNextDisabled(false);
    } else if (isMultipleChoiceStep(currentStep)) {
      setIsNextDisabled((quizData[currentStep]?.length || 0) === 0);
    } else {
      setIsNextDisabled(!quizData[currentStep]?.[0]);
    }
  }, [currentStep, quizData]);

  const dataMainQuiz = useQuery(
    {
      queryKey: ["quiz"],
      queryFn: () => dataQuiz(utmData?.utmData.course_name),
      enabled: !!utmData?.utmData.course_name,
    },
    queryClient
  );

  useEffect(() => {
    if(utmData?.utmData.course_name) {
      const courseName = utmData.utmData.course_name;
      const formattedName = courseName.split('.')[1];
      if(formattedName) {
        document.title = formattedName.trim();
      } else {
        document.title = 'Skillbox Quiz';
      }
      
    }
  }, [utmData?.utmData.course_name])
  
  useEffect(() => {
    if (dataMainQuiz.data) {
      setData(dataMainQuiz.data);
    }
  }, [dataMainQuiz.data]);

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <div className={style.container}>
        <header className={style.header}>
          <div className={style.boxHead}>
            <Button
              className={style.btnBack}
              onClick={prev}
              isDisabled={currentStep === 1}
            >
              <ArrowBack />
            </Button>
            <img className={style.imgLogo} src={logo} alt="Skillbox" />
            <p className={style.descrStep}>
              <StepSvg className={style.svgStep} />
              <span className={style.step}>
                {currentStep}/{totalSteps}
              </span>
            </p>
          </div>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </header>
        <main className={style.main}>
          <MainSvg className={style.svg} />
          <div className={style.boxContent}>
            {data ? (
              <Quiz
                currentStep={currentStep}
                data={dataQuizLocal}
                dataBack={data}
                selectedOption={quizData}
                onSelect={handleOptionSelect}
              />
            ) : (
              <>
                {dataMainQuiz.isFetching ? (
                  <>
                    <LoaderContent />
                  </>
                ) : (
                  <div className={style.noQuiz}>
                    <h2 className={style.titleNoQuiz}>Упс, возникла ошибка</h2>
                    <p className={style.descrNoQuiz}>
                      Не удалось загрузить квиз!
                    </p>
                    <p className={style.descrNoQuiz}>
                      Попробуйте использовать другую ссылку!
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
        <footer className={style.footer}>
          <Button
            className={style.mainBtn}
            onClick={next}
            isDisabled={isActive || isNextDisabled}
          >
            {renderTextBtn()}
          </Button>
        </footer>
      </div>
      <Modal onClose={handleCloseModal} isSpecial isOpen={isOpenModal} hiddenClose>
        <FormDataPost utmData={utmData?.utmData} />
      </Modal>
    </>
  );
}

export default Layout;
