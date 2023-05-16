import { FC, memo } from 'react';
import cls from './FirstScreen.module.scss';
import { FirstScreenSlider } from './FirstScreenSlider/ui/FirstScreenSlider';
import { SocialNetworks } from './SocialNetworks';
import { SeeMoreBtn } from './SeeMoreBtn';
import { FirstScreenBooking } from '@/features/FirstScreenBooking';

export const FirstScreen: FC = memo(() => {
  return (
    <div className={cls.firstScreen}>
      <FirstScreenSlider />
      <SocialNetworks />
      <SeeMoreBtn />
      <div className={cls.bookingContainer}>
        <FirstScreenBooking />
      </div>
    </div>
  );
});
