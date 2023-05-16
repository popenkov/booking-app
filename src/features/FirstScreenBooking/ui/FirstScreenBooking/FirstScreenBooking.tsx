import { ChangeEvent, FC, useCallback, useState } from 'react';
import { BookingInput } from '../BookingInput/BookingInput';
import { InputOptionsType } from '../../model/types/bookingSchema';
import { useGetCities } from '../../api/bookingApi';
import { useTranslation } from 'react-i18next';

export const FirstScreenBooking: FC = () => {
  const { t } = useTranslation('main');
  const [placesQuery, setPlacesQuery] = useState<string>('');
  const [places, setPlaces] = useState<InputOptionsType[]>([]);
  const { data: cities, isLoading: areCitiesLoading } =
    useGetCities(placesQuery);
  const handlePlaceChange = useCallback((value: string) => {
    console.log(value);
    setPlacesQuery(value);
  }, []);
  return (
    <div>
      FirstScreenBooking
      <BookingInput
        placeholder={t('Place')}
        onChange={handlePlaceChange}
        inputOptions={cities}
        isLoading={areCitiesLoading}
      />
      <BookingInput placeholder={t('Dates')} />
      <BookingInput placeholder={t('Guests')} />
    </div>
  );
};
