import { useState } from "react";
import style from "./ClockPicker.module.scss";
import CircularSlider from "@fseehawer/react-circular-slider";

interface ClockPickerProps {
  selectedOptions: string[];
  onSelect: (option: string) => void;
}

export function ClockPicker({ selectedOptions, onSelect }: ClockPickerProps) {
  const [selectedValue, setSelectedValue] = useState<string | number>(selectedOptions ? selectedOptions[0] : 1);
  const [isDrag, setIsDrag] = useState(false);

  return (
    <div className={style.box}>
      <h2 className={style.title}>
        Сколько времени ты готов(а) тратит на прохождение курса в день?
      </h2>
      <div className={style.boxClock}>
          <CircularSlider
            label="Часoв:"
            labelColor="#0c092a"
            labelFontSize="2rem"
            min={1}
            max={24}
            dataIndex={!isDrag ? Number(selectedValue) - 1 : 0}
            knobColor="#4947ff"
            progressColorFrom="#00bfbd"
            progressColorTo="#4947ff"
            trackColor="#eeeeee"
            progressLineCap={"round"}
            progressSize={20}
            trackSize={20}
            onChange={(value: string | number) => {
              onSelect(String(value));
              setSelectedValue(value);
            }}
            isDragging={(draggable: boolean) => setIsDrag(draggable)}
            width={315}
          />
      </div>
    </div>
  );
}
