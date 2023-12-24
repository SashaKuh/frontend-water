// import { lazy, useEffect } from 'react';
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
import TodayAndMonthLayout from './TodayAndMonthLayout/TodayAndMonthLayout';

// const HomePage = lazy(() => import(''));
// const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
// const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
// const MainPage = lazy(() => import(''));

export const App = () => {
  return <TodayAndMonthLayout />;
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/">{/* SharedLayout */}
  //         <Route index /> {/* MainPage */}
  //         <Route path="signin" element={<SignInPage /> } />
  //         <Route path="signup" element={<SignUpPage />} />
  //         <Route path="/homepage" /> {/* HomePage */}
  //       </Route>
  //     </Routes>
  //   </>
  // );
};
