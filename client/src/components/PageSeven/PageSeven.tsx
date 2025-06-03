import img1 from "../../assets/png/person106.png";
import img2 from "../../assets/png/education20.png";
import img3 from "../../assets/png/parthners.png";
import style from "./PageSeven.module.scss";

const data = [
  {
    id: "1",
    title: "106+ тысяч",
    text: "учеников нашли работу",
    img: img1,
  },
  {
    id: "2",
    title: "20% учеников",
    text: "начинают брать заказы ещё во время обучения",
    img: img2,
  },
  {
    id: "3",
    title: "2200+ партнёров",
    text: "предоставляют эксклюзивные предложения и вакансии для наших студентов",
    img: img3,
  },
];

export function PageSeven() {
  return (
    <ul className={style.list}>
      {data.map((item) => (
        <li className={style.item} key={item.id}>
          <img className={style.img} src={item.img} alt="" />
          <h3 className={style.title}>{item.title}</h3>
          <p className={style.text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
