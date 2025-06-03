import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import style from "./PageSixteen.module.scss";
import { useRef, useState } from "react";
import { AppImage } from "../../ui/AppImage/AppImage";
import { Button } from "../../ui/Button";
import { ArrowBack } from "../../assets/svg/ArrowBack/ArrowBack";
import { Page16Type } from "../../types/QuizType";

interface PageSixteenProps {
  title: string;
  data: Page16Type;
}

const api_url = "https://quiz.skillbox.by";

export function PageSixteen({ title, data }: PageSixteenProps) {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div className={style.box}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.card}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className={style.swiper}
        >
          {data.cards.map((item, index) => (
            <SwiperSlide key={index} className={style.slide}>
              <div className={style.boxCard}>
                <div>
                  <div className={style.boxSlide}>
                    <AppImage className={style.img} src={`${api_url}${item.image.image_url}`} />
                  </div>
                  <h3 className={style.info}>
                    {item.title}
                  </h3>
                  <p className={style.descr}>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={style.boxBtn}>
            <Button
              onClick={() => swiperRef.current?.slidePrev()}
              className={style.btn}
              isDisabled={activeIndex === 0}
            >
              <ArrowBack />
            </Button>
            <Button
              onClick={() => swiperRef.current?.slideNext()}
              className={style.btn}
              isDisabled={data.cards.length - 1 === activeIndex}
            >
              <ArrowBack className={style.svgUp} />
            </Button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
