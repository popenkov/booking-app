import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LogoIcon from '@/shared/assets/icons/header-logo.svg';

import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './Header.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { getUIScroll } from '@/features/UI/model/selectors/ui';
import { LangSwitcher } from '@/features/LangSwitcher';
import { burgerButtonAnimation } from '@/shared/const/animation';
import { BurgerButton } from './BurgerButton';

interface NavbarProps {
  className?: string;
}

export const Header = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const scrollPosition = useSelector(getUIScroll);

  useEffect(() => {
    console.log(scrollPosition);
    const scrollHeight = Number(scrollPosition);
    setIsSticky((prev) => (prev = Boolean(scrollHeight > 10)));
  }, [scrollPosition]);

  const animateValue = !isSticky ? 'visible' : 'hidden';

  const handleMenuToggle = () => {
    console.log('menu toggle');
  };

  const mods: Mods = {
    [cls.isSticky]: isSticky,
  };

  return (
    <header className={classNames(cls.header, mods, [className])}>
      <HStack align="center" gap="8" max>
        {/* <motion.div
          initial="hidden"
          animate={animateValue}
          variants={burgerButtonAnimation}
          transition={{ ease: 'linear', duration: 0.5 }}
        > */}
        <BurgerButton onClick={handleMenuToggle} />
        <div>
          <Icon Svg={LogoIcon} />
          <span>Logo text</span>
        </div>
        <AppLink to={'#'} theme={AppLinkTheme.SECONDARY}>
          {t('Destinations')}
        </AppLink>
        <AppLink to={'#'} theme={AppLinkTheme.SECONDARY}>
          {t('Hotels')}
        </AppLink>
        <LangSwitcher />
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
          {t('Login')}
        </Button>
        {/* </motion.div> */}
      </HStack>
    </header>
  );
});
