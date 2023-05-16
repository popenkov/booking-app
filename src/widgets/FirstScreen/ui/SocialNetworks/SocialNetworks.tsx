import { FC } from 'react';
import parse from 'html-react-parser';

import cls from './SocialNetworks.module.scss';
import { useFirstScreen } from '../../api/getFirstScreenApi';
import { Icon } from '@/shared/ui/Icon';
import { Network } from '../FirstScreenSlider/model/types/firstScreen';

export const SocialNetworks: FC = () => {
  const { data: networksData, isLoading } = useFirstScreen(null);

  console.log('networksData', networksData);

  if (isLoading) {
    return null;
  }

  return (
    <div className={cls.networks}>
      {networksData?.networks.map((item: Network) => {
        return (
          <a key={item.id} href={item.href} target="blank">
            {parse(item.icon)}
          </a>
        );
      })}
    </div>
  );
};
