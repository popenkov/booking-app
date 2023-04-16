import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LogoIcon from '@/shared/assets/icons/header-logo.svg';

import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './Header.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';
import { Icon } from '@/shared/ui/Icon';

interface NavbarProps {
  className?: string;
}

export const Header = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <VStack align="center" gap="8" max>
        <Icon Svg={LogoIcon} />
        <nav></nav>
      </VStack>

      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
        {t('Войти')}
      </Button>
    </header>
  );
});
