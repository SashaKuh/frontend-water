// import { lazy, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() => import(''));
// const SingUpPage = lazy(() => import(''));
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
          <Route path="signup" /> {/* SignUpPage */}
          <Route path="/homepage" /> {/* HomePage */}
        </Route>
      </Routes>
    </>
  );
};
