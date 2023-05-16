import { FC } from 'react';

import cls from './BurgerButton.module.scss';

type BurgerButtonProps = {
  onClick: () => void;
};

export const BurgerButton: FC<BurgerButtonProps> = ({ onClick }) => {
  return <button className={cls.button}>BurgerButton</button>;
};
