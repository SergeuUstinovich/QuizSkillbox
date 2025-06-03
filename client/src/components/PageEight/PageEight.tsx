import { useRef } from "react";
import { ArrowBack } from "../../assets/svg/ArrowBack/ArrowBack";
import { AppImage } from "../../ui/AppImage/AppImage";
import { Button } from "../../ui/Button";
import style from "./PageEight.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Page8Type } from "../../types/QuizType";

interface PageEightProps {
  data: Page8Type;
}

const api_url = import.meta.env.VITE_API_BASE_URL;

export function PageEight({ data }: PageEightProps) {
  const swiperRef = useRef<any>(null);

  return (
    <div className={style.box}>
      <h2 className={style.title}>
        У 106+ тысяч студентов уже получилось, а значит и{" "}
        <span className={style.span}>ты сможешь</span> изменить свою жизнь в
        лучшую сторону!
      </h2>
      <div className={style.card}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={1}
          className={style.swiper}
        >
          {data.cards.map((item, index) => (
            <SwiperSlide key={index} className={style.slide}>
              <div className={style.boxCard}>
                <div className={style.boxSlide}>
                  <AppImage
                    className={style.img}
                    src={`${api_url}${item.image.image_url}`}
                  />
                  <div className={style.boxBtn}>
                    <Button
                      onClick={() => swiperRef.current?.slidePrev()}
                      className={style.btn}
                      isDisabled={index === 0}
                    >
                      <ArrowBack />
                    </Button>
                    <Button
                      onClick={() => swiperRef.current?.slideNext()}
                      className={style.btn}
                      isDisabled={data.cards.length - 1 === index}
                    >
                      <ArrowBack className={style.svgUp} />
                    </Button>
                  </div>
                </div>

                <p className={style.descr}>{item.description}</p>
                <div className={style.boxJob}>
                  <p className={style.job}>
                    {item.old_job}{" "}
                    <span className={style.spanNext}>
                      <ArrowBack className={style.svgJob} />
                    </span>
                  </p>
                  <p className={style.job}>{item.new_job}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
