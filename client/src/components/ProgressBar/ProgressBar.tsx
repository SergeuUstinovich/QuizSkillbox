import style from "./ProgressBar.module.scss";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;
  return (
    <div className={style.progressBarContainer}>
      <div
        className={style.progressBarFill}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}
