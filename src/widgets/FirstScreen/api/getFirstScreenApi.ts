import { rtkApi } from '@/shared/api/rtkApi';
import { FirstScreen } from '../ui/FirstScreenSlider/model/types/firstScreen';

const firstScreenApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFirstScreenData: build.query<FirstScreen, null>({
      query: () => ({
        url: '/first-screen',
      }),
    }),
  }),
});

export const useFirstScreen = firstScreenApi.useGetFirstScreenDataQuery;
