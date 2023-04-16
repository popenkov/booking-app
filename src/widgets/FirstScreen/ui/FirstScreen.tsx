import { FC, memo } from 'react';
import cls from './FirstScreen.module.scss';
import { FirstScreenSlider } from './FirstScreenSlider/ui/FirstScreenSlider';

export const FirstScreen: FC = memo(() => {
  return (
    <div className={cls.firstScreen}>
      <FirstScreenSlider />
    </div>
  );
});
