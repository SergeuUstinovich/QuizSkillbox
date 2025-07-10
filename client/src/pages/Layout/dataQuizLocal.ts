import table from "../../assets/png/1table.png";
import table2 from "../../assets/png/2table.png";
import table3 from "../../assets/png/3table.png";
// import table4 from "../../assets/png/4table.png";
// import table5 from "../../assets/png/5table.png";
// import table6 from "../../assets/png/6table.png";
// import table7 from "../../assets/png/7table.png";

import switch1 from "../../assets/png/1switchWork.png";
import switch2 from "../../assets/png/2switchWork.png";
import switch3 from "../../assets/png/3switchWork.png";
import switch4 from "../../assets/png/4switchWork.png";

import dreams1 from "../../assets/png/dreams1.png";
import dreams2 from "../../assets/png/dreams2.png";
import dreams3 from "../../assets/png/dreams3.png";
import dreams4 from "../../assets/png/dreams4.png";
import dreams5 from "../../assets/png/dreams5.png";
import dreams6 from "../../assets/png/dreams6.png";
import dreams7 from "../../assets/png/dreams7.png";
import dreams8 from "../../assets/png/dreams8.png";
import dreams9 from "../../assets/png/dreams9.png";
import dreams10 from "../../assets/png/dreams10.png";
import dreams11 from "../../assets/png/dreams11.png";
import dreams12 from "../../assets/png/dreams12.png";
import { PageList1_2_4_13_15Type } from "../../types/QuizType";

export interface dataQuizProps {
  page1: PageList1_2_4_13_15Type;
  page2: PageList1_2_4_13_15Type;
  page4: PageList1_2_4_13_15Type;
}

export const dataQuizLocal = {
  page1: {
    id: 1,
    cards: [
      {
        id: 1,
        description:
          "Хочу сменить профессию – надоело работать за копейки в нелюбимой сфере.",
        image: {
          id: 1,
          image_url: table,
        },
        course_name: "",
      },
      {
        id: 2,
        description:
          "Хочу больше свободы и дохода – удалёнку, гибкий график и работу в пижаме",
        image: {
          id: 1,
          image_url: table2,
        },
        course_name: "",
      },
      {
        id: 3,
        description:
          "Хочу прокачать навыки – чтобы брать крутые проекты и расти в доходах.",
        image: {
          id: 1,
          image_url: table3,
        },
        course_name: "",
      },
      // {
      //   id: 4,
      //   description:
      //     "Хочу сменить профессию – текущая работа больше не вдохновляет",
      //   image: {
      //     id: 1,
      //     image_url: table4,
      //   },
      //   course_name: "",
      // },
      // {
      //   id: 5,
      //   description:
      //     "Мне не хватает творчества! Всё вокруг серое, а душа требует креатива",
      //   image: {
      //     id: 1,
      //     image_url: table5,
      //   },
      //   course_name: "",
      // },
      // {
      //   id: 6,
      //   description:
      //     "Чувствую, что топчусь на месте... Пора выйти из зоны комфорта!",
      //   image: {
      //     id: 1,
      //     image_url: table6,
      //   },
      //   course_name: "",
      // },
      // {
      //   id: 7,
      //   description:
      //     "Всё ок, но жажду новых знаний – не могу сидеть без развития",
      //   image: {
      //     id: 1,
      //     image_url: table7,
      //   },
      //   course_name: "",
      // },
    ],
    course_name: "",
    title:
      "Почему ты хочешь освоить графический дизайн?",
  },

  page2: {
    id: 2,
    cards: [
      {
        id: 1,
        description:
          "Мечтаю о продуктовой компании – масштабные проекты и соцпакеты!",
        image: {
          id: 1,
          image_url: switch1,
        },
        course_name: "",
      },
      {
        id: 2,
        description:
          "Только фриланс! Хочу сам(а) выбирать проекты и график работы",
        image: {
          id: 1,
          image_url: switch2,
        },
        course_name: "",
      },
      {
        id: 3,
        description:
          "Открою свою студию – время воплощать свои идеи без оглядки на начальство",
        image: {
          id: 1,
          image_url: switch3,
        },
        course_name: "",
      },
      {
        id: 4,
        description:
          "Хочу в творческую тусовку! Вдохновляться командой и делать крутые штуки вместе",
        image: {
          id: 1,
          image_url: switch4,
        },
        course_name: "",
      },
    ],
    course_name: "",
    title:
      "Если менять место работы, то какой формат тебе больше всего подходит?",
  },
  page4: {
    id: 3,
    cards: [
      {
        id: 1,
        description: "Финансовая свобода",
        image: {
          id: 1,
          image_url: dreams1,
        },
        course_name: "",
      },
      {
        id: 2,
        description: "Закрыть долги",
        image: {
          id: 1,
          image_url: dreams2,
        },
        course_name: "",
      },
      {
        id: 3,
        description: "Купить жильё",
        image: {
          id: 1,
          image_url: dreams3,
        },
        course_name: "",
      },
      {
        id: 4,
        description: "Отпуск мечты",
        image: {
          id: 1,
          image_url: dreams4,
        },
        course_name: "",
      },
      {
        id: 5,
        description: "Свой бизнес",
        image: {
          id: 1,
          image_url: dreams5,
        },
        course_name: "",
      },
      {
        id: 6,
        description: "Новый автомобиль",
        image: {
          id: 1,
          image_url: dreams6,
        },
        course_name: "",
      },
      {
        id: 7,
        description: "Переезд в другой город/страну",
        image: {
          id: 1,
          image_url: dreams7,
        },
        course_name: "",
      },
      {
        id: 8,
        description: "Не задумываться о тратах и не экономить на себе и семье",
        image: {
          id: 1,
          image_url: dreams8,
        },
        course_name: "",
      },
      {
        id: 9,
        description: "Сформировать сбережения для личных целей",
        image: {
          id: 1,
          image_url: dreams9,
        },
        course_name: "",
      },
      {
        id: 10,
        description: "Создать финансовую подушку безопасности",
        image: {
          id: 1,
          image_url: dreams10,
        },
        course_name: "",
      },
      {
        id: 11,
        description: "Оплатить обучение детям",
        image: {
          id: 1,
          image_url: dreams11,
        },
        course_name: "",
      },
      {
        id: 12,
        description: "Просто выйти на другой уровень жизни",
        image: {
          id: 1,
          image_url: dreams12,
        },
        course_name: "",
      },
    ],
    course_name: "",
    title: "Для чего ты бы хотел(а) начать зарабатывать больше денег?",
  },
};
