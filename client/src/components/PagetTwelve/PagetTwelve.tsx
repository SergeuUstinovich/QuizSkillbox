import { useEffect, useState } from "react";
import style from "./PagetTwelve.module.scss";

export function PagetTwelve() {
  const [progress, setProgress] = useState(0);
  const targetProgress = 93;
  const duration = 2000; // Время анимации (1 сек.)

  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      setProgress(start);
      if (start < targetProgress) {
        setTimeout(step, duration / targetProgress);
      }
    };

    step();
  }, []);
  
  return (
    <div className={style.box}>
      <h2 className={style.title}>
        У тебя 93% мэтч с профессией. Тебе точно нужно
        пройти курс, чтобы добиться жизни своей мечты
      </h2>
      <div className={style.progressBox}>
        <svg
          className={style.svg}
          width="315"
          height="315"
          viewBox="0 0 315 315"
        >
          <circle
            cx="157.5"
            cy="157.5"
            r="140"
            fill="none"
            stroke="#eee"
            strokeWidth="20"
          />
          <circle
            cx="157.5"
            cy="157.5"
            r="140"
            fill="none"
            stroke="#4947ff"
            strokeWidth="20"
            strokeDasharray="880"
            strokeDashoffset={880 - (880 * progress) / 100}
            strokeLinecap="round"
          />
        </svg>
        <p className={style.descr}>{progress}%</p>
      </div>
    </div>
  );
}
