import type { Swiper as SwiperType } from 'swiper';

export const setSlideBackground = (url: string): string => {
  return `linear-gradient(
      181.06deg,
      rgba(0, 0, 0, 0.4) 0.91%,
      rgba(255, 255, 255, 0) 116.71%,
      rgba(255, 255, 255, 0) 116.72%
    ),
    url(${url}), #c4c4c4`;
};

export const drawFraction = (
  swiper: SwiperType,
  container: HTMLDivElement,
  slidesAmount: number
): void => {
  const fragment = container;
  const total = slidesAmount;
  if (fragment && total) {
    let current = swiper.realIndex + 1;
    if (current > total) {
      current = 1;
    }
    const idx = current < 10 ? '0' + current : current;
    const tdx = total < 10 ? '0' + total : total;
    fragment.innerHTML = `<span class="first-screen-pagination-current">${idx}</span> / <span class="first-screen-pagination-total">${tdx}</span>`;
  }
};
