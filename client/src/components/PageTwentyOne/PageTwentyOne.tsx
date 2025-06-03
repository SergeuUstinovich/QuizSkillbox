import { BidTimer } from "../BidTimer/BidTimer";
import imgNow from "../../assets/png/now.png";
import imgBefore from "../../assets/png/before.png";
import style from "./PageTwentyOne.module.scss";
import { SegmentedProgress } from "./SegmentedProgress";

const data = [
  {
    id: 1,
    title: "Уровень зарплаты",
    emotion: "Недостаточный",
    filledSegments: 1,
  },
  {
    id: 2,
    title: "Уровень зарплаты",
    emotion: "Высокий",
    filledSegments: 3,
  },
  {
    id: 3,
    title: "Уровень потребностей",
    emotion: "Не закрыты",
    filledSegments: 1,
  },
  {
    id: 4,
    title: "Уровень потребностей",
    emotion: "Закрыты",
    filledSegments: 3,
  },
  {
    id: 5,
    title: "Уровень стресса",
    emotion: "Высокий",
    filledSegments: 3,
  },
  {
    id: 6,
    title: "Уровень стресса",
    emotion: "Низкий",
    filledSegments: 0,
  },
];

export function PageTwentyOne() {
  return (
    <div className={style.box}>
      <BidTimer />
      <div className={style.boxImg}>
        <img src={imgNow} alt="" />
        <img src={imgBefore} alt="" />
      </div>
      <ul className={style.list}>
        {data.map((item) => (
          <li key={item.id} className={style.item}>
            <SegmentedProgress
              filledSegments={item.filledSegments}
              title={item.title}
              emotion={item.emotion}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
