import style from "./PageTwenty.module.scss";
import { ProgressBar } from "./ProgressBar";

export function PageTwenty() {
  return (
    <div className={style.box}>
      <h2 style={{ marginBottom: "18px" }} className={style.title}>
        У тебя все получится!
      </h2>
      <h2 style={{ marginBottom: "30px" }} className={style.title}>
        Мы проанализировали и поняли, что с курсом Skillbox ты добьешься своих
        целей в короткий период
      </h2>
      <ProgressBar title={'Цели'} endCount={100} />
      <ProgressBar title={'Твоя жизнь мечты'} endCount={90} />
      <ProgressBar title={'Зарплата'} endCount={100} />
    </div>
  );
}
