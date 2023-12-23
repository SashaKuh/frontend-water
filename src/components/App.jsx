// import { lazy, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() => import(''));
// const SingUpPage = lazy(() => import(''));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
// const MainPage = lazy(() => import(''));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">{/* SharedLayout */}
          <Route index /> {/* MainPage */}
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" /> {/* SignUpPage */}
          <Route path="/homepage" /> {/* HomePage */}
        </Route>
      </Routes>
    </>
  );
};
