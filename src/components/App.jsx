// import { lazy, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() => import(''));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
// const SignInPage = lazy(() => import(''));
// const MainPage = lazy(() => import(''));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          {/* SharedLayout */}
          <Route index /> {/* MainPage */}
          <Route path="signin" /> {/* SignInPage */}
          <Route path="signup" element={<SignUpPage />} />
          <Route path="/homepage" /> {/* HomePage */}
        </Route>
      </Routes>
    </>
  );
};
