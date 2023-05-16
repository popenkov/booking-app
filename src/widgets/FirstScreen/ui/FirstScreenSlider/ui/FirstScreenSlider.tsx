import { FC, useRef } from 'react';
import { Autoplay, Pagination, Parallax } from 'swiper';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFirstScreen } from '../../../api/getFirstScreenApi';
import cls from './FirstScreenSlider.module.scss';
import { drawFraction, setSlideBackground } from '@/shared/lib/swiper/swiper';

export const FirstScreenSlider: FC = () => {
  const { data: sliderData, isLoading } = useFirstScreen(null);
  const fragmentRef = useRef<HTMLDivElement>();
  const progressbarRef = useRef<HTMLDivElement>();

  // const isAdaptive = useMediaQuery(theme.breakpoints.large);
  // const hasNoSwiping = !isAdaptive ? true : false;

  // const isMobile = useMediaQuery(theme.breakpoints.small);
  // const isTablet = useMediaQuery(theme.breakpoints.medium);

  const SLIDE_DELAY = 3000;

  if (isLoading) {
    return null;
  }

  const slidesAmount = sliderData?.slider?.length;

  const handleSliderInit = (swiper: SwiperType) => {
    drawFraction(
      swiper,
      fragmentRef.current as Required<HTMLDivElement>,
      slidesAmount as Required<number>
    );
  };

  const handleSlideChange = (swiper: SwiperType) => {
    drawFraction(
      swiper,
      fragmentRef.current as Required<HTMLDivElement>,
      slidesAmount as Required<number>
    );
  };

  return (
    <div className={cls.sliderPage}>
      <Swiper
        modules={[Pagination, Autoplay, Parallax]}
        direction="vertical"
        parallax={true}
        slidesPerView={1}
        pagination={{
          el: '.main-slider-progressbar',
          type: 'progressbar',
          progressbarFillClass: 'swiper-pagination-progressbar-fill',
          renderProgressbar: function (progressbarFillClass) {
            return `<span class="${progressbarFillClass}" ></span>`;
          },
        }}
        loop={true}
        // autoplay={{
        //   delay: SLIDE_DELAY,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: false,
        // }}
        noSwiping={false}
        // noSwipingClass="swiper-slide"
        speed={900}
        watchSlidesProgress
        className={cls.swiper}
        onInit={handleSliderInit}
        onSlideChange={handleSlideChange}
      >
        {sliderData?.slider?.map((slide, index) => {
          return (
            <SwiperSlide key={slide.id} className={cls.swiperSlide}>
              <div
                className={cls.slide}
                style={{
                  background: setSlideBackground(slide.img),
                }}
              >
                <div className={cls.textContainer}>
                  <span data-swiper-parallax="-600" className={cls.textTitle}>
                    Explore
                  </span>
                  <span data-swiper-parallax="-400" className={cls.countryName}>
                    {slide.title}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="main-slider-pagination" ref={fragmentRef}></div>
        <div className="main-slider-progressbar" ref={progressbarRef}></div>
      </Swiper>
    </div>
  );
};
