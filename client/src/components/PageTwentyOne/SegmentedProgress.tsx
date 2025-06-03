import { useState, useEffect } from "react";
import style from "./PageTwentyOne.module.scss";

interface SegmentedProgressProps {
  title: string;
  emotion: string;
  filledSegments: number;
}
const segment = 3;
export function SegmentedProgress({ title, emotion, filledSegments }: SegmentedProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 3) {
      const timeout = setTimeout(() => {
        setProgress((prev) => (prev < filledSegments ? prev + 1 : prev));
      }, (2 * 1000) / segment);

      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <div className={style.boxBar}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.descr}>{emotion}</p>
      <div className={style.progressContainer}>
        {Array.from({ length: segment }).map((_, index) => (
          <div
            key={index}
            className={`${style.segment} ${
              index < progress ? style.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
