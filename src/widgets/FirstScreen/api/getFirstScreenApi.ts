import { rtkApi } from '@/shared/api/rtkApi';
import { FirstScreenSLider } from '../ui/FirstScreenSlider/model/types/firstScreen';

const firstScreenApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFirstScreenData: build.query<FirstScreenSLider[], null>({
      query: () => ({
        url: '/first-screen',
      }),
    }),
  }),
});

export const useFirstScreen = firstScreenApi.useGetFirstScreenDataQuery;
