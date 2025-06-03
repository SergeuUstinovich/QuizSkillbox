import { StepSvg } from "../../assets/svg/StepSvg/StepSvg";
import { Page11Type } from "../../types/QuizType";
import { AppImage } from "../../ui/AppImage/AppImage";
import style from "./PageEleven.module.scss";

interface PageElevenProps {
  onSelect: (option: string) => void;
  selectedOptions: string[];
  title: string;
  data: Page11Type;
}

const api_url = "https://quiz.skillbox.by";

export function PageEleven({
  onSelect,
  selectedOptions,
  title,
  data,
}: PageElevenProps) {
  return (
    <div className={style.box}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {data.collect_image.map((item) => (
          <li
            className={`${style.item} ${
              selectedOptions
                ? selectedOptions.includes(item.id.toString())
                  ? style.active
                  : ""
                : ""
            }`}
            key={item.id}
            onClick={() => onSelect(item.id.toString())}
          >
            <AppImage
              className={style.img}
              src={`${api_url}${item.image_url}`}
            />
            {selectedOptions ? (
              selectedOptions.includes(item.id.toString()) ? (
                <div className={style.check}>
                  <StepSvg className={style.svg} />
                </div>
              ) : null
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
