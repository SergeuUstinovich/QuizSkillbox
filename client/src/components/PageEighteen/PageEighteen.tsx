import style from "./PageEighteen.module.scss";

const data = [
  {
    id: 1,
    text: "разработаем персональный карьерный план",
  },
  {
    id: 2,
    text: "поможем прокачать дополнительно необходимые скиллы",
  },
  {
    id: 3,
    text: "обеспечим приоритет перед другими соискателями: у нас есть эксклюзивные предложения от компаний и закрытый канал с вакансиями",
  },
];

export function PageEighteen() {
  return (
    <div className={style.box}>
      <h2 className={style.title}>Вернем деньги, если не трудоустроишься</h2>
      <ul className={style.list}>
        {data.map((item) => (
          <li className={style.item} key={item.id}>
            <div className={style.count}>
              <p className={style.countText}>{item.id}</p>
            </div>
            <p className={style.descr}>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
