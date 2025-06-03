import { StepSvg } from "../../assets/svg/StepSvg/StepSvg";
import { data } from "./dataNine";
import style from "./PageNine.module.scss";

interface PageNineProps {
  onSelect: (option: string) => void;
  selectedOptions: string[];
}

export function PageNine({ onSelect, selectedOptions }: PageNineProps) {
  return (
    <ul className={style.list}>
      {data.map((item, index) => (
        <li className={style.item} key={index}>
          <h3 className={style.title}>{item.title}</h3>
          <ul className={style.listPhoto}>
            {item.list.map((items) => (
              <li
                className={`${style.photoItem} ${
                  selectedOptions
                    ? selectedOptions.includes(items.id)
                      ? style.active
                      : ""
                    : ""
                }`}
                key={items.id}
                onClick={() => onSelect(items.id)}
              >
                <img className={style.img} src={items.src} />
                {selectedOptions ? (
                  selectedOptions.includes(items.id) ? (
                    <div className={style.check}>
                      <StepSvg className={style.svg} />
                    </div>
                  ) : null
                ) : null}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
