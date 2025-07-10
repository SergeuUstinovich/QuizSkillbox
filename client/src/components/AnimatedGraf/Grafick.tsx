import { GrafFildSvg } from "../../assets/svg/GrafFildSvg/GrafFildSvg";
import { MyGoalSvg } from "../../assets/svg/MyGoalSvg/MyGoalSvg";
import { StressSvg } from "../../assets/svg/StressSvg/StressSvg";
import coinImg from '../../assets/png/coinsImg.png'
import style from './AnimatedGraf.module.scss'

interface ScheduleStressProps {
  isActive: boolean;
  currentStep: number;
}

export function Grafick({ isActive, currentStep }: ScheduleStressProps) {
  return (
    <>
      {currentStep === 3 && (
        <>
          <div className={style.boxGraf}>
            <img className={style.img} src={coinImg} alt="" />
            <StressSvg className={`${isActive ? "active" : ""}`} />
            <span className={style.stress}>Стресс</span>
            <span className={style.money}>Заработок</span>
          </div>
        </>
      )}
      {currentStep === 10 && (
        <MyGoalSvg className={`${isActive ? "active" : ""}`} />
      )}
      {currentStep === 19 && (
        <GrafFildSvg className={`${isActive ? "active" : ""}`} />
      )}
    </>
  );
}
