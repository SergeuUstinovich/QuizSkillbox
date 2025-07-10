import { ReactNode, useEffect, useState } from "react";
import { QuizData } from "../Layout";
import { dataQuizProps } from "../Layout/dataQuizLocal";
import { QuestionList } from "../../components/QuestionList/QuestionList";
import { AnimatedGraf } from "../../components/AnimatedGraf/AnimatedGraf";
import { Grafick } from "../../components/AnimatedGraf/Grafick";
import { RangeInput } from "../../components/RangeInput/RangeInput";
import page5Coin from "../../assets/png/page5coin.png";
import page5light from "../../assets/png/page6light.png";
import { PageSeven } from "../../components/PageSeven/PageSeven";
import { PageEight } from "../../components/PageEight/PageEight";
import { PageNine } from "../../components/PageNine/PageNine";
import { PageEleven } from "../../components/PageEleven/PageEleven";
import { PagetTwelve } from "../../components/PagetTwelve/PagetTwelve";
import { PageFourteen } from "../../components/PageFourteen/PageFourteen";
import { PageSixteen } from "../../components/PageSixteen/PageSixteen";
import { ClockPicker } from "../../components/ClockPicker/ClockPicker";
import { PageEighteen } from "../../components/PageEighteen/PageEighteen";
import { PageTwenty } from "../../components/PageTwenty/PageTwenty";
import { PageTwentyOne } from "../../components/PageTwentyOne/PageTwentyOne";
import { PageTwentyTwo } from "../../components/PageTwentyTwo/PageTwentyTwo";
import { QuizType } from "../../types/QuizType";

interface QuizProps {
  data: dataQuizProps;
  dataBack: QuizType;
  selectedOption: QuizData;
  onSelect: (option: string, isMultiple: boolean) => void;
  currentStep: number;
}

const arrPage6 = [
  { id: "1", text: "1" },
  { id: "2", text: "2" },
  { id: "3", text: "3" },
  { id: "4", text: "4" },
  { id: "5", text: "5" },
];

export function Quiz({
  data,
  selectedOption,
  onSelect,
  currentStep,
  dataBack,
}: QuizProps) {
  const [isActive, setIsActive] = useState(false);
  const stepComponents: Record<number, ReactNode> = {
    1: (
      <QuestionList
        isLocal
        title={data.page1.title}
        selectedOptions={selectedOption[1]}
        data={data.page1}
        onSelect={(option) => onSelect(option, true)}
      />
    ),
    2: (
      <QuestionList
        isLocal
        title={data.page2.title}
        selectedOptions={selectedOption[2]}
        data={data.page2}
        onSelect={(option) => onSelect(option, false)}
      />
    ),
    3: (
      <AnimatedGraf
        title={
          "Давай посмотрим, как изменится соотношение стресса и заработка в твоей жизни с новой профессией!"
        }
        children={<Grafick currentStep={currentStep} isActive={isActive} />}
      />
    ),
    4: (
      <QuestionList
        isLocal
        title={data.page4.title}
        selectedOptions={selectedOption[4]}
        data={data.page4}
        onSelect={(option) => onSelect(option, true)}
      />
    ),
    5: (
      <RangeInput
        title={dataBack.page5.title}
        data={dataBack.page5}
        src={page5Coin}
        isPrice
        selectedOptions={selectedOption[5]}
        onSelect={(option) => onSelect(option, false)}
      />
    ),
    6: (
      <RangeInput
        title={dataBack.page6.text}
        data6={arrPage6}
        src={page5light}
        selectedOptions={selectedOption[6]}
        onSelect={(option) => onSelect(option, false)}
      />
    ),
    7: <PageSeven />,
    8: <PageEight data={dataBack.page8} />,
    9: (
      <PageNine
        selectedOptions={selectedOption[9]}
        onSelect={(option) => onSelect(option, true)}
      />
    ),
    10: (
      <AnimatedGraf
        title={
          "Все это ты сможешь позволить себе уже во время прохождения курса!"
        }
        children={<Grafick currentStep={currentStep} isActive={isActive} />}
      />
    ),
    11: (
      <PageEleven
        data={dataBack.page11}
        title={dataBack.page11.head}
        selectedOptions={selectedOption[11]}
        onSelect={(option) => onSelect(option, true)}
      />
    ),
    12: <PagetTwelve />,
    13: (
      <QuestionList
        title={dataBack.page13.title}
        selectedOptions={selectedOption[13]}
        data={dataBack.page13}
        onSelect={(option) => onSelect(option, true)}
      />
    ),
    14: <PageFourteen title={dataBack.page14.title} data={dataBack.page14} />,
    15: (
      <QuestionList
        title={dataBack.page15.title}
        selectedOptions={selectedOption[15]}
        data={dataBack.page15}
        onSelect={(option) => onSelect(option, true)}
      />
    ),
    16: <PageSixteen title={dataBack.page16.title} data={dataBack.page16} />,
    17: (
      <ClockPicker
        selectedOptions={selectedOption[17]}
        onSelect={(option) => onSelect(option, false)}
      />
    ),
    18: <PageEighteen />,
    19: (
      <AnimatedGraf
        title={
          "Все это ты сможешь позволить себе уже во время прохождения курса!"
        }
        children={<Grafick currentStep={currentStep} isActive={isActive} />}
      />
    ),
    20: <PageTwenty />,
    21: <PageTwentyOne />,
    22: <PageTwentyTwo data={dataBack.page22} />,
  };

  useEffect(() => {
    switch (currentStep) {
      case 3:
        setIsActive(true);
        break;
      case 10:
        setIsActive(true);
        break;
      case 19:
        setIsActive(true);
        break;
      default:
        setIsActive(false);
        break;
    }
  }, [currentStep]);

  return <>{stepComponents[currentStep]}</>;
}
