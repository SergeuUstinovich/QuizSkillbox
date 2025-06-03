import { Page22Type } from "../../types/QuizType";
import { BidTimer } from "../BidTimer/BidTimer";
import style from "./PageTwentyTwo.module.scss";
import img from "../../assets/png/discount.png";

interface PageTwentyTwoProps {
  data: Page22Type;
}

const dataList = [
  {
    id: 1,
    text: "Дополнительный курс в подарок",
  },
  {
    id: 2,
    text: "Год английского бесплатно",
  },
  {
    id: 3,
    text: "Новый курс, адаптирован под тренды рынка",
  },
  {
    id: 4,
    text: "Вернем деньги если не трудоустроишься",
  },
];

export function PageTwentyTwo({ data }: PageTwentyTwoProps) {
  const newPrice = data.full_price - data.full_price * (data.discount / 100);
  return (
    <div className={style.box}>
      <BidTimer />
      <h2 className={style.title}>{data.title}</h2>
      <div className={style.boxWell}>
        <div className={style.wellHead}>
          <img src={img} alt="" />
          <p className={style.descr}>Скидка {data.discount}% действует 2 дня</p>
        </div>
        <div className={style.wellBody}>
          <div className={style.boxFullPrice}>
            <p className={style.descrFullPrice}>
              <span className={style.span}>{data.full_price}</span> BYN/мес
            </p>
            <div className={style.boxDiscount}>-{data.discount}%</div>
          </div>
          <p className={style.newPrice}>
            {newPrice} <span className={style.newSpan}>BYN/мес</span>
          </p>
          <p className={style.month}>В рассрочку на {data.month} месяцев</p>
        </div>
      </div>
      <ul className={style.list}>
        {dataList.map((item) => (
          <li key={item.id} className={style.item}>
            <div className={style.point} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
