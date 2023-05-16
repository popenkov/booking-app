import { FC, useCallback } from 'react';

import ArrowIcon from '@/shared/assets/icons/angle-down.svg';
import cls from './SeeMoreBtn.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { useTranslation } from 'react-i18next';

export const SeeMoreBtn: FC = () => {
  const { t } = useTranslation();
  const handleSeeMoreBtnClick = useCallback(() => {
    console.log('click');
  }, []);
  return (
    <div className={cls.container}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={handleSeeMoreBtnClick}
      >
        <Icon Svg={ArrowIcon} inverted />
        <span className={cls.btnText}>{t('See more')}</span>
      </Button>
    </div>
  );
};
