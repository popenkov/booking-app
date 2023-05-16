import { ChangeEvent, FC } from 'react';

import cls from './BookingInput.module.scss';
import MapIcon from '@/shared/assets/icons/map-pin.svg';
import { Icon } from '@/shared/ui/Icon';
import { InputOptionsType } from '../../model/types/bookingSchema';

type BookingInputProps = {
  placeholder: string;
  inputOptions?: InputOptionsType[];
  isLoading?: boolean;
  onClick?: () => void;
  onChange?: (value: string) => void;
};

export const BookingInput: FC<BookingInputProps> = ({
  placeholder,
  inputOptions,
  onClick,
  onChange,
  isLoading,
}) => {
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt?.target?.value;
    onChange?.(value);
  };

  return (
    <div className={cls.container}>
      <Icon Svg={MapIcon} className={cls.icon} />
      <input
        className={cls.input}
        placeholder={placeholder}
        onClick={onClick}
        onChange={handleInputChange}
      />
      {/* {inputOptions && (
        <span>
          {inputOptions.map((item) => {
            <span key={item.id}>{item.value}</span>;
          })}
        </span>
      )} */}
    </div>
  );
};
