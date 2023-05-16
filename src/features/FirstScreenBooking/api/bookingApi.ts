import { rtkApi } from '@/shared/api/rtkApi';
import { InputOptionsType } from '../model/types/bookingSchema';

type GetCitiesArg = {
  cityName: string;
};

const bookingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<InputOptionsType[], GetCitiesArg>({
      query: ({ cityName }) => ({
        url: '/booking-cities',
        params: {
          cityName,
        },
      }),
    }),
  }),
});

export const useGetCities = bookingApi.useGetCitiesQuery;
