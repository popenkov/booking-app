import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { FirstScreen } from '@/widgets/FirstScreen';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <Page>
      {/* {t('Главная страница')} */}
      <FirstScreen />
    </Page>
  );
};

export default MainPage;
