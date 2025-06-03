import { ChangeEvent, useEffect, useState } from "react";
import style from "./RangeInput.module.scss";
import { Page5Type } from "../../types/QuizType";

interface RangeInputProps {
  title: string;
  src: string;
  data?: Page5Type;
  data6?: ArrPage6[];
  isPrice?: boolean;
  onSelect: (option: string) => void;
  selectedOptions: string[];
}

interface ArrPage6 {
  id: string;
  text: string;
}

export function RangeInput({
  title,
  src,
  data,
  data6,
  isPrice,
  onSelect,
  selectedOptions,
}: RangeInputProps) {
  const [rangeValue, setRangeValue] = useState<string>(
    selectedOptions ? selectedOptions[0] : "0"
  );

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setRangeValue(newValue);
    onSelect(newValue);
  };

  useEffect(() => {
    setRangeValue(selectedOptions ? selectedOptions[0] : "0");
  }, [selectedOptions]);

  return (
    <div className={style.box}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.boxInput}>
        <ul className={style.list}>
          {!isPrice && data6 ? (
            <>
              {data6.map((item) => (
                <li className={style.item} key={item.id}>
                  {item.text}
                </li>
              ))}
            </>
          ) : (
            <>
              {data && (
                <>
                  <li className={style.item}>от {data.price1}</li>
                  <li className={style.item}>от {data.price2}</li>
                  <li className={style.item}>от {data.price3}</li>
                </>
              )}
            </>
          )}
        </ul>
        <input
          value={rangeValue}
          onChange={handleRangeChange}
          className={style.inputRange}
          type="range"
        />
      </div>
      <img className={style.img} src={src} />
    </div>
  );
}
