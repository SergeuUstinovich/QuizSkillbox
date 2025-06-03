import { Page14Type } from "../../types/QuizType";
import { AppImage } from "../../ui/AppImage/AppImage";
import style from './PageFourteen.module.scss'

interface PageFourteenProps {
  title: string;
  data: Page14Type;
}

const api_url = "https://quiz.skillbox.by";

export function PageFourteen({ title, data }: PageFourteenProps) {
  return (
    <div className={style.box}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {data.cards.map((item) => (
          <li className={style.item} key={item.id}>
            <AppImage className={style.img} src={`${api_url}${item.image.image_url}`} />
            <p className={style.descr}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
