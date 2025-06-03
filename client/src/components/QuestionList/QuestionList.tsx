import { PageList1_2_4_13_15Type } from "../../types/QuizType";
import { AppImage } from "../../ui/AppImage/AppImage";
import style from "./QuestionList.module.scss";

interface Question1Props {
  title: string;
  selectedOptions: string[];
  onSelect: (option: string) => void;
  data: PageList1_2_4_13_15Type;
  isLocal?: boolean;
}

const api_url = "https://quiz.skillbox.by";

export function QuestionList({
  selectedOptions,
  onSelect,
  data,
  title,
  isLocal
}: Question1Props) {
  return (
    <div className={style.box}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {data.cards.map((item) => (
          <li
            className={`${style.item} ${
              selectedOptions
                ? selectedOptions.includes(item.id.toString())
                  ? style.selected
                  : ""
                : ""
            }`}
            onClick={() => onSelect(item.id.toString())}
            key={item.id}
          >
            <AppImage className={style.img} src={`${isLocal ? item.image.image_url : `${api_url}${item.image.image_url}`}`} />
            <p className={style.descr}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
