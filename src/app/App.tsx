import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import { classNames } from '@/shared/lib/classNames/classNames';
// import { getUserInited, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';

// import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Header } from '@/widgets/Header';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  //   const inited = useSelector(getUserInited);

  //   useEffect(() => {
  //     dispatch(userActions.initAuthData());
  //   }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Header />
        {/* TODO */}
        {/* <div className="content-page">{inited && <AppRouter />}</div> */}
        <div className="content-page">{<AppRouter />}</div>
      </Suspense>
    </div>
  );
}

export default App;
