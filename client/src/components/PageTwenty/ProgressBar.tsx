import { useEffect, useState } from "react";
import style from "./PageTwenty.module.scss";

interface ProgressBarProps {
  title: string;
  endCount: number;
}

export function ProgressBar({ title, endCount }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < endCount ? prev + 1 : endCount));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.boxBar}>
      <div className={style.boxTitle}>
        <h3 className={style.barTitle}>{title}</h3>
        <p className={style.barDescr}>{progress}%</p>
      </div>
      <div className={style.progressContainer}>
        <div className={style.progressBar} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
